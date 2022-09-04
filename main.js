leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
video = createCapture(VIDEO);
video.size(550, 500);
video.position(100, 100);
canvas = createCanvas(550, 550);
canvas.position(760, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
background("gold");
textSize(difference);
fill("red");
text("Tanisha", 50, 50);
}

function modelLoaded(){
console.log('PoseNet Is Initialized');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
leftWristX= results[0].pose.leftWrist.x;
rightWristX= results[0].pose.rightWrist.x;
difference= floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
}
}