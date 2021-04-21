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
        users[i] = new User(object.users[i].name, object.users[i].squatCount, object.users[i].pushupCount);
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

    document.querySelectorAll("#scoreboard > table > *:not(:first-child)").forEach(elem => elem.remove());

    for (let i = 0; i < usersRanked.length; i++)
    {
        scoreboardRows[i] = new ScoreboardRow(i + 1, usersRanked[i]);
        scoreboardRows[i].appendToElem(document.querySelector("#scoreboard > table"));
    }
}

class User
{
    constructor(name, squatCount, pushupCount)
    {
        this.name = name;
        this.squatCount = squatCount || 0;
        this.pushupCount = pushupCount || 0;
        
        this.points;
        this.updatePoints();

        this.difficulty;
    }

    updatePoints()
    {
        let squatPoints = this.squatCount ** 0.9;
        let pushupPoints = this.pushupCount ** 0.9;

        this.points = Math.floor(squatPoints + pushupPoints);
    }
}

class ScoreboardRow
{
    constructor(place, user)
    {
        this.elem = document.createElement("TR");
        if (place % 2) this.elem.style.backgroundColor = "rgba(255, 255, 255, 0.1)";

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
