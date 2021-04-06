let sessionStopped = true;

function sessionLoop()
{
    if (points == 0 || sessionStopped)
    {
        stopSession();
        sessionStopped = false;
        return;
    }

    console.log(points);
    console.log("hej")
    points--;

    setTimeout(() => {  sessionLoop(); }, 1000);
}