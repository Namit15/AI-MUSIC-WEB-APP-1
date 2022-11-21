song = "";
song1 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreRightWrist = 0;
scoreLeftWrist - 0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelloadded);
    poseNet.on("pose", gotPoses);
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;

        console.log("Left Wrist X :" + leftWristX + "Left Wrist Y :" + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.leftWristY;

        console.log("Right Wrist X :" + rightWristX + "Right Wrist Y :" + rightWristY);
    }
}

function preload()
{
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3")
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
}