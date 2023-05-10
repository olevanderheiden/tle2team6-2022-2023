// Grab all the DOM elements
const video = document.getElementById("video");
const videoStatus = document.getElementById("videoStatus");
const loading = document.getElementById("loading");

const train = document.getElementById("train");
const saveButton = document.getElementById("saveButton");
const loss = document.getElementById("loss");
const result = document.getElementById("result");
const confidence = document.getElementById("confidence");
const predict = document.getElementById("predict");

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
    loading.innerText = "Model loaded!";
    classifier.load('./model/model.json', function() {
        loading.innerText = "Model and custom model loaded!";
        classifier.classify(gotResults);
    })
}

// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor("MobileNet", modelLoaded);
// Create a new classifier using those features
const classifier = featureExtractor.classification(video, videoReady);

// A function to be called when the video is finished loading
function videoReady() {
    videoStatus.innerText = "Video ready!";
}

// When the headphone button is pressed, add the current frame
// from the video with a label of headphone to the classifier
headphoneButton.onclick = function() {
    classifier.addImage("headphone");
    amountOfHeadphoneImages.innerText = Number(amountOfHeadphoneImages.innerText) + 1;
};

// When the phone button is pressed, add the current frame
// from the video with a label of phone to the classifier
phoneButton.onclick = function() {
    classifier.addImage("phone");
    amountOfPhoneImages.innerText = Number(amountOfPhoneImages.innerText) + 1;
};

// When the bottle button is pressed, add the current frame
// from the video with a label of bottle to the classifier
bottleButton.onclick = function() {
    classifier.addImage("bottle");
    amountOfBottleImages.innerText = Number(amountOfBottleImages.innerText) + 1;
};

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