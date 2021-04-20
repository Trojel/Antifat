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
    document.querySelector(".wallet").style.display = "inline-block";

    let userExists = false;
    for (let i = 0; i < users.length; i++)
    {
        if (users[i].name === name)
        {
            userExists = true;
            activeUser = users.find(user => user.name === name);
            break;
        }
    }

    if (!userExists)
    {
        activeUser = new User(name);
        users.push(activeUser);
    }

    initializeScoreboard();
    
    // console.log("Alll users: ", users, " found: ", activeUser);

    document.querySelectorAll(".wallet").forEach(elem => elem.innerHTML = "Point: " + String(activeUser.points));
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
}

function endTm()
{
    switchTo('menu');
    stopTm = true;
    webcam.stop();
}