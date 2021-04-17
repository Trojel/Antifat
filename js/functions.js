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

    activeUser = users.find(user => user.name === name);
    // console.log("Alll users: ", users, " found: ", activeUser);
}

function startTraining()
{
    switchTo('tm');
    document.querySelector('#startTm').style.display = 'inline-block';

    let playerName = document.querySelecter('#nameField').value;
    player = new User(playerName, undefined);
}