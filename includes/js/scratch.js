// Grab all the DOM elements
const video = document.getElementById('video'); // Video element
const videoStatus = document.getElementById('video-status'); // Element to display video status
const loading = document.getElementById('loading'); // Element to display loading status

const addInfoButton = document.getElementById('add-info-button'); // Button to add new information
const addImageButton = document.getElementById('add-image-button'); // Button to add new image
const imageFilesInput = document.getElementById('training-data'); // Input for image files

const source = document.getElementById('source'); // Source selection element
let trainingSource = 'image'; // Variable to store the selected training source
let newOrExisting = 'new'; // Variable to store whether new or existing data is selected

const train = document.getElementById('train'); // Train button
const saveButton = document.getElementById('save-button'); // Save button
const loss = document.getElementById('loss'); // Element to display loss
const result = document.getElementById('result'); // Element to display prediction result
const confidence = document.getElementById('confidence'); // Element to display prediction confidence
const predict = document.getElementById('predict'); // Predict button

const productSelector = document.getElementById('product'); // Product selection element
const sizeTypeSelector = document.getElementById('size-type'); // Size type selection element
const sizeInput = document.getElementById('size'); // Size input element

//
// ML5 related code
//

// A variable to store the total loss
let totalLoss = 0;

// Create a webcam capture
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
        };
    });
}

// A function to be called when the model has been loaded
function modelLoaded() {
    loading.innerText = 'Model loaded!';
}

// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);
// Create a new classifier using those features
const classifier = featureExtractor.classification(video, videoReady);

// A function to be called when the video is finished loading
function videoReady() {
    videoStatus.innerText = 'Video ready!';
}

// When the train button is pressed, train the classifier
train.onclick = function () {
    classifier.train(function (lossValue) {
        if (lossValue) {
            totalLoss = lossValue;
            loss.innerHTML = `Loss: ${totalLoss}`;
        } else {
            loss.innerHTML = `Done Training! Final Loss: ${totalLoss}`;
        }
    });
};

// When the save button is pressed, save the model
saveButton.onclick = function () {
    classifier.save();
};

// Show the results
function gotResults(err, results) {
    // Display any error
    if (err) {
        console.error(err);
    }
    if (results && results[0]) {
        result.innerText = results[0].label;
        confidence.innerText = results[0].confidence;
        classifier.classify(gotResults);
    }
}

// Start predicting when the predict button is clicked
predict.onclick = function () {
    classifier.classify(gotResults);
};

// Event listeners for adding new data
addInfoButton.addEventListener('click', addNewData);
addImageButton.addEventListener('click', addNewData);

function addNewData(e) {
    e.preventDefault();
    let productInformation;

    if (document.getElementById('product').value === 'new') {
        // Create a new product information object
        productInformation = JSON.stringify({
            'brand': document.getElementById('brand').value,
            'name': document.getElementById('name').value,
            'description': document.getElementById('description').value,
            'image': document.getElementById('image').value,
            'averageShelfLife': document.getElementById('average-shelf-life').value,
            'averageShelfLifeType': document.getElementById('average-shelf-life-type').value,
            'size': document.getElementById('size').value,
            'sizeType': document.getElementById('size-type').value,
            'category': document.getElementById('product-category').value,
            'status': 0,
            'userId': 0,
        });
    } else {
        // Use existing product information
        productInformation = document.getElementById('item-select').value;
    }

    if (trainingSource !== 'image') {
        // Add image from video to the classifier
        classifier.addImage(video, productInformation);
    } else {
        const files = imageFilesInput.files;
        if (files.length > 0) {
            for (let file of files) {
                const img = new Image();
                img.src = URL.createObjectURL(file);

                img.style.height = '200px';
                img.style.width = '200px';
                img.addEventListener('load', () => {
                    classifier.addImage(img, productInformation);
                });
            }

            if (newOrExisting === 'new') {
                // Add a new option to the product selection dropdown
                let option = document.createElement('option');
                let product = JSON.parse(productInformation);
                option.innerHTML = `${product.brand} ${product.name} ${product.size} ${product.sizeType}`;
                option.value = productInformation;
                document.getElementById('item-select').appendChild(option);

                productSelector.value = 'existing';
                document.getElementById('hidden-if-new').style.display = 'block';
                document.getElementById('hidden-if-existing').style.display = 'none';
            }
        } else {
            alert('Please select at least one image file.');
        }
    }
}

//
// Form Related code
//

// Do stuff when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hidden-if-new').style.display = 'none';
});

// Event listener for product selection change
productSelector.addEventListener('change', (e) => {
    if (e.target.value === 'new') {
        newOrExisting = 'new';
        document.getElementById('hidden-if-new').style.display = 'none';
        document.getElementById('hidden-if-existing').style.display = 'block';
    } else {
        newOrExisting = 'existing';
        document.getElementById('hidden-if-new').style.display = 'block';
        document.getElementById('hidden-if-existing').style.display = 'none';
    }
});

// Event listener for source selection change
source.addEventListener('change', (e) => {
    trainingSource = e.target.value;
    if (e.target.value !== 'image') {
        document.getElementById('training-data').style.display = 'none';
        document.getElementById('training-data-label').style.display = 'none';
    } else {
        document.getElementById('training-data').style.display = 'block';
        document.getElementById('training-data-label').style.display = 'block';
    }
});

// Event listener for size type selection change
sizeTypeSelector.addEventListener('change', (e) => {
    document.getElementById('size-notation').innerHTML = e.target.value;
    UpdateReadableSize();
});

// Event listener for size input change
document.getElementById('size').addEventListener('change', UpdateReadableSize);

// Update the readable size based on the selected size type
function UpdateReadableSize() {
    if (sizeTypeSelector.value === 'ML') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}L)`;
    } else if (sizeTypeSelector.value === 'Gram') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}KG)`;
    }
}

// Event listener for image input change
document.getElementById('image').addEventListener('change', (e) => {
    document.getElementById('preview-image').src = e.target.value;
});

// Event listener for average shelf life type selection change
document.getElementById('average-shelf-life-type').addEventListener('change', (e) => {
    document.getElementById('date-notation').innerHTML = `dagen tot ${e.target.value}-datum`;
});
