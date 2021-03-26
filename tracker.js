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
    let endTime = startTime + points * 10000;

    web.son();
}

function checkSession()
{
    if (endTime == undefined)
    {
        return;
    }

    if (endtime == time.getTime())
    {
        console.log("faerdig!");
        web.soff();
    }
}