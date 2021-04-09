let points;
let time = new Date();
let endTime;

function startSession()
{
    console.log(points);
    if (points == 0 || points == undefined)
    {
        window.alert("Du har ikke nok point!");
        console.log("Du har ikke nok point!");
        return;
    }

    switchTo("inSession");

    sessionStopped = false;
    sessionLoop();

    let startTime = Date.now();
    endTime = startTime + points * 10000;
    console.log(endTime);

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
    console.log("stop");
    switchTo("menu");
    sessionStopped = true;
    web.soff();
    console.log("Du har ikke flere point");
}