let sessionStopped = true;

function sessionLoop()
{
    if (points == 0 || sessionStopped)
    {
        stopSession();
        sessionStopped = false;
        return;
    }

    document.querySelector(".points").innerHTML = "Point: " + String(points);
    console.log(points);
    points--;

    setTimeout(() => {  sessionLoop(); }, 1000);
}