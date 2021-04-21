function switchTo(pageId)
{
    pageElems = {
        menu: document.querySelector("#menu"),
        tm: document.querySelector("#tm"),
        inSession: document.querySelector("#inSession")
    };

    Object.keys(pageElems).forEach(key => {
        if (key == pageId)
        {
            pageElems[key].style.display = "grid";
        }
        else
        {
            pageElems[key].style.display = "none";
        }
    });

    document.querySelectorAll(".wallet").forEach(elem => elem.style.display = "block");
    if (pageId === "menu") initializeScoreboard();
}

function submitName()
{
    let name = document.querySelector("#nameField").value;

    if (name.length < 1)
    {
        window.alert("Venligst indtast et navn");
        return;
    }

    document.querySelector("#startTraining").style.display = "inline-block";
    document.querySelector("#startSession").style.display = "inline-block";
    document.querySelector("#selectDifficulty").style.display = "inline-block";
    document.querySelector(".wallet").style.display = "inline-block";

    let userExists = false;
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].name === name)
        {
            userExists = true;
            activeUser = users.find(user => user.name === name);
            document.querySelector("#selectDifficulty > select").value = activeUser.difficulty;
            break;
        }
    }

    if (!userExists)
    {
        let difficulty = parseInt(document.querySelector("#selectDifficulty > select").value);
        activeUser = new User(name, difficulty);
        users.push(activeUser);
    }

    initializeScoreboard();
    
    // console.log("Alll users: ", users, " found: ", activeUser);

    document.querySelectorAll(".wallet").forEach(elem => elem.innerHTML = "Point: " + String(activeUser.points));
}

function submitDifficulty()
{
    let difficulty = parseInt(document.querySelector("#selectDifficulty > select").value);
    activeUser.difficulty = difficulty;
}

function startTraining()
{
    if (!activeUser)
    {
        alert("Venligst indtast et navn (eller JSON problem)");
        return;
    }

    switchTo('tm');
    document.querySelector('#startTm').style.display = 'inline-block';
    activeUser.startTraining();
}

function endTm()
{
    if (webcam != undefined)
    {
        webcam.stop();
    }
    
    stopTm = true;
    switchTo('menu');
    document.querySelectorAll("page").forEach(elem => elem.style.backgroundColor = "var(--color1)");
}

let time = new Date();
let endTime;
let pointsCopy;

function startSession()
{
    if (activeUser.points == 0 || activeUser.points == undefined)
    {
        window.alert("Du har ikke nok point!");
        console.log("Du har ikke nok point!");
        return;
    }

    switchTo("inSession");

    startTimer();
    console.log(activeUser.points);
    pointsCopy = activeUser.points
    console.log("kopi" + String(pointsCopy))

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

    clearTimeout(sessionLoopTimeout);

    web.soff();
}
