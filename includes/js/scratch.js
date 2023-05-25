// Grab all the DOM elements
const video = document.getElementById('video');
const videoStatus = document.getElementById('video-status');
const loading = document.getElementById('loading');

const addInfoButton = document.getElementById('add-info-button');
const addImageButton = document.getElementById('add-image-button');
const imageFilesInput = document.getElementById('training-data');

const source = document.getElementById('source');
let trainingSource = "image";

const train = document.getElementById('train');
const saveButton = document.getElementById('save-button');
const loss = document.getElementById('loss');
const result = document.getElementById('result');
const confidence = document.getElementById('confidence');
const predict = document.getElementById('predict');

const productSelector = document.getElementById('product');
const sizeTypeSelector = document.getElementById('size-type');
const sizeInput = document.getElementById('size');

const modelURL = '../training/model/model.json'

//
// ML5 related code
//

// A variable to store the total loss
let totalLoss = 0;

// Create a webcam capture
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
        };
    });
}

// A function to be called when the model has been loaded
function modelLoaded() {
    loading.innerText = 'Model loaded!';
    classifier.load(modelURL, function () {
        loading.innerText = 'Model and custom model loaded!';
        // add this to client-side eventually
        // classifier.classify(gotResults);
    })
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
// With all the given headphone, phone and bottle images
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
}

addInfoButton.addEventListener('click', addInfo)
addImageButton.addEventListener('click', addImage)

function addInfo(e) {
    e.preventDefault()
    let productInformation = JSON.stringify({
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
    })

    console.log(productInformation)

    if (trainingSource !== "image") {
        classifier.addImage(video, productInformation);
    } else {
        const files = imageFilesInput.files;
        if (files.length > 0) {
            for (let file of files) {
                const img = new Image();
                img.src = URL.createObjectURL(file);

                img.style.height = '200px'
                img.style.width = '200px'
                img.addEventListener('load', () => {
                    classifier.addImage(img, productInformation);
                });
            }
        } else {
            alert('Please select at least one image file.');
        }
    }
}

function addImage(e) {
    e.preventDefault()

    let productInformation = document.getElementById('item-select').value

    console.log(productInformation)

    if (trainingSource !== "image") {
        classifier.addImage(video, productInformation);
    } else {
        const files = imageFilesInput.files;
        if (files.length > 0) {
            for (let file of files) {
                const img = new Image();
                img.src = URL.createObjectURL(file);

                img.style.height = '200px'
                img.style.width = '200px'
                img.addEventListener('load', () => {
                    classifier.addImage(img, productInformation);
                });
            }
        } else {
            alert('Please select at least one image file.');
        }
    }
}

//
//Form Related code
//

//Do stuff when page is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('hidden-if-new').style.display = 'none';
})

productSelector.addEventListener('change', (e) => {
    if (e.target.value === 'new') {
        document.getElementById('hidden-if-new').style.display = 'none';
        document.getElementById('hidden-if-existing').style.display = 'block';
    } else {
        document.getElementById('hidden-if-new').style.display = 'block';
        document.getElementById('hidden-if-existing').style.display = 'none';
    }
})

source.addEventListener('change', (e) => {
    trainingSource = e.target.value;
    if (e.target.value !== "image") {
        document.getElementById('training-data').style.display = 'none';
        document.getElementById('training-data-label').style.display = 'none';
    } else {
        document.getElementById('training-data').style.display = 'block';
        document.getElementById('training-data-label').style.display = 'block';
    }
})

sizeTypeSelector.addEventListener('change', (e) => {
    document.getElementById('size-notation').innerHTML = e.target.value
    UpdateReadableSize()
})

document.getElementById('size').addEventListener('change', UpdateReadableSize)

function UpdateReadableSize() {
    if (sizeTypeSelector.value === 'ML') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}L)`
    } else if (sizeTypeSelector.value === 'Gram') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}KG)`
    }
}

document.getElementById('image').addEventListener('change', (e) => {
    document.getElementById('preview-image').src = e.target.value
})

document.getElementById('average-shelf-life-type').addEventListener('change', (e) => {
    document.getElementById('date-notation').innerHTML = `dagen tot ${e.target.value}-datum`
})

//Add available data
let availableLabels = [];

fetch(modelURL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        availableLabels = data.ml5Specs.mapStringToIndex;
        for (let item of availableLabels) {
            let option = document.createElement('option')
            console.log(item)
            let product = JSON.parse(item);
            option.innerHTML = `${product.brand} ${product.name} ${product.size} ${product.sizeType}`;
            option.value = item;
            document.getElementById('item-select').appendChild(option)
        }
    });
