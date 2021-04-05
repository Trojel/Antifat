let sessionStopped = false;

function loop()
{
    if (points == 0 || sessionStopped)
    {
        stopSession();
        sessionStopped = false;
        return;
    }

    console.log(points);
    points--;

    setTimeout(() => {  loop(); }, 1000);
}