status = "";
video = "";

function preload(){
    video = createCapture();
    video.hide();
}
function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
}

function start(){
    object_detector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelloaded(){
    console.log("model is loaded");
    status = "true";
}

function draw(){
    image(video,0,0,480,380);
}