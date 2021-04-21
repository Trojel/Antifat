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
    if (object == undefined)
    {
        console.log("JSON not received!");
        return;
    }

    // console.log("usersObj: ", object, " len: ", object.users.length);

    for (let i = 0; i < object.users.length; i++)
    {
        users[i] = new User(object.users[i].name, object.users[i].difficulty, object.users[i].squatCount, object.users[i].pushupCount);
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
    constructor(name, difficulty, squatCount, pushupCount)
    {
        this.name = name;
        this.difficulty = difficulty;
        this.squatCount = squatCount || 0;
        this.pushupCount = pushupCount || 0;
        
        this.sessionStartPoints = 0;
        this.sessionPoints = 0;
        this.multiplier = 1;
        
        this.points;
        this.updatePoints();
    }

    updatePoints()
    {
        this.multiplier = Math.floor((this.sessionPoints * 0.05 + 1) * 2) / 2;
        document.querySelector(".multiplier").innerHTML = `Multiplier: ${this.multiplier}`;

        // fjerner ikke point

        // this.sessionPoints = ((this.ses) * this.multiplier) / parseInt(this.difficulty);
        // this.points = 
    }

    startTraining()
    {
        this.sessionStartPoints = this.points;
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
