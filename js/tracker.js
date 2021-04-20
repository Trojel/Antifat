let time = new Date();
let endTime;
let pointsCopy;

function startSession()
{
    startTimer();
    console.log(activeUser.points);
    pointsCopy = activeUser.points
    console.log("kopi" + String(pointsCopy))
    if (activeUser.points == 0 || activeUser.points == undefined)
    {
        window.alert("Du har ikke nok point!");
        console.log("Du har ikke nok point!");
        return;
    }

    switchTo("inSession");

    sessionStopped = false;
    sessionLoop();

    let startTime = Date.now();
    endTime = startTime + activeUser.points * 10000;
    
    stopTimer = false;

    web.son();
}

// function sessionEnd()
// {
//     if (endTime == undefined)
//     {
//         console.log("An error ocurred: 404");
//         return;
//     }

//     timeNow = Date.now();

//     if (endTime <= timeNow)
//     {
//         console.log("Done");
//         web.soff();
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

function stopSession()
{
    switchTo("menu");
    
    sessionStopped = true;
    stopTimer = true;
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    timerInterval = null;
    remainingPathColor = COLOR_CODES.info.color;

    web.soff();
}