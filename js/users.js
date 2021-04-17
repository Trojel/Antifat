let object;
let users = [];
let activeUser = null;

fetch("https://raw.githubusercontent.com/Trojel/Antifat/main/database.json")
    .then (response => response.json())
    .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

// Skriv til json igen når en bruger har optjent point

function jsonReceived()
{
    if (object === undefined)
    {
        console.log("JSON not received!");
        return;
    }

    // console.log("usersObj: ", object, " len: ", object.users.length);

    for (let i = 0; i < object.users.length; i++)
    {
        users[i] = new User(object.users[i].name, object.users[i].score);
    }

    initializeScoreboard();
}

function initializeScoreboard()
{
    if (users.length < 1)
    {
        console.log("No users!");
        return;
    }

    let scoreboardRows = [];
    let usersRanked = users;

    usersRanked.sort((a, b) => (a.points > b.points) ? -1 : 1);

    for (let i = 0; i < usersRanked.length; i++)
    {
        scoreboardRows[i] = new ScoreboardRow(i + 1, usersRanked[i]);
        scoreboardRows[i].appendToElem(document.querySelector("#scoreboard > table"));
    }
}

class User
{
    constructor(name, points)
    {
        this.name = name;
        this.points = points || 0;
    }
}

class ScoreboardRow
{
    constructor(place, user)
    {
        this.elem = document.createElement("TR");

        let placeColElem = document.createElement("TD");
        placeColElem.innerHTML = String(place);

        let nameColElem = document.createElement("TD");
        nameColElem.innerHTML = user.name;

        let pointColElem = document.createElement("TD");
        pointColElem.innerHTML = String(user.points);

        this.elem.appendChild(placeColElem);
        this.elem.appendChild(nameColElem);
        this.elem.appendChild(pointColElem);
    }

    appendToElem(elem)
    {
        elem.appendChild(this.elem);
    }

    // Måske tilføj update metode
}
