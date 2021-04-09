let sessionStopped = true;

function sessionLoop()
{
    if (points == 0 || sessionStopped)
    {
        stopSession();
        sessionStopped = false;
        return;
    }

    document.querySelector(".wallet").innerHTML = "Point: " + String(points);

    document.querySelector(".time").innerHTML = "Time: " + String(points) + "sec";

    console.log(points);
    points--;

    setTimeout(() => {  sessionLoop(); }, 1000);
}