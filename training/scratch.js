// Grab all the DOM elements
const video = document.getElementById('video');
const videoStatus = document.getElementById('video-status');
const loading = document.getElementById('loading');

const addInfoButton = document.getElementById('add-info-button');
const addImageButton = document.getElementById('add-image-button');

const train = document.getElementById('train');
const saveButton = document.getElementById('save-button');
const loss = document.getElementById('loss');
const result = document.getElementById('result');
const confidence = document.getElementById('confidence');
const predict = document.getElementById('predict');

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
    // classifier.load('./model/model.json', function() {
    //     loading.innerText = 'Model and custom model loaded!';
    //     classifier.classify(gotResults);
    // })
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
train.onclick = function() {
    classifier.train(function(lossValue) {
        if (lossValue) {
            totalLoss = lossValue;
            loss.innerHTML = `Loss: ${totalLoss}`;
        } else {
            loss.innerHTML = `Done Training! Final Loss: ${totalLoss}`;
        }
    });
};

// When the save button is pressed, save the model
saveButton.onclick = function() {
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
predict.onclick = function() {
    classifier.classify(gotResults);
}

addInfoButton.addEventListener('click', addInfo)
addImageButton.addEventListener('click', addImage)

function addInfo (e) {
    e.preventDefault()
}

function addImage (e) {
    e.preventDefault()
    // classifier.addImage('phone');
    let product = {
        'category': document.getElementById('product-category').value,
        'brand': document.getElementById('brand').value,
        'name': document.getElementById('name').value,
        'size-type': document.getElementById('size-type').value,
        'size': document.getElementById('size').value,
        'date-type': document.getElementById('date-type').value,
        'best-before-time': document.getElementById('best-before-time').value,
    }
    classifier.addImage(product);
}