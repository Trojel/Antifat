let points;
let time = new Date();
let endTime;

function updatePoints()
{
    points = squatCount;
}

function startSession()
{
    if (points == 0 || points == undefined)
    {
        console.log("Du har ikke nok point!");
        return;
    }

    let startTime = Date.now();
    endTime = startTime + points * 10000;
    console.log(endTime);

    web.son();
}

function checkSession()
{
    if (endTime == undefined)
    {
        console.log("nej");
        return;
    }

    timeNow = Date.now();

    if (endTime <= timeNow)
    {
        console.log("faerdig!");
        web.soff();
    }
}