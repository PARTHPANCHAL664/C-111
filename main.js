Classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AyiF7GrSc/model.json ', ModelLoaded)


Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera')

function takeimg() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log('ml5 version', ml5.version);

function ModelLoaded()
{
    console.log("Model is Loaded!")
}