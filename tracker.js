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

    let startTime = time.getTime();
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

    timeNow = time.getTime();

    if (endTime <= timeNow)
    {
        console.log("faerdig!");
        web.soff();
    }
}