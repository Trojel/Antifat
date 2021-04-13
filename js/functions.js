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
            pageElems[key].style.display = "inline-block";
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

    console.log(name);
}