// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/KcUHN8LkL/";
let model, webcam, ctx, labelContainer, maxPredictions;
let web = new Web();
let squatSiddendeCheck = false
let squatStaaendeCheck = false
let squatCheck = false;
let stopTm = false;

async function init() {
    switchTo("tm");
    document.querySelector("#startTm").style.display = "none";
    stopTm = false;

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // Note: the pose library adds a tmPose object to your window (window.tmPose)
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const size = 200;
    const flip = true; // whether to flip the webcam
    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append/get elements to the DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
}

async function loop(timestamp) {
    if (stopTm)
    {
        return;
    }
    document.querySelectorAll(".wallet").forEach(elem => elem.innerHTML = "Point: " + String(activeUser.points));
    activeUser.updatePoints();
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    // Prediction #1: run input through posenet
    // estimatePose can take in an image, video or canvas html element
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Prediction 2: run input through teachable machine classification model
    window.prediction = await model.predict(posenetOutput);

    for (position of prediction)
    {
        if (position.probability > 0.99)
        {
            switch (position.className)
            {
                case "squat stående":
                    break;

                case "squat siddende":
                    break;

                case "armbøjning bøj":
                    pushup.down();
                    break;

                case "armbøjning strakt":
                    pushup.up();
                    break;
            }
        }
    }

    squat()

    // finally draw the poses
    drawPose(pose);
}


    


/*function test(){
    for (let i = 0; i<prediction.length; i++){
        console.log(prediction[i])
    }
}*/

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // draw the keypoints and skeleton
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}
