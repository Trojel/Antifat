let object;
let users = [];
let activeUser = "penis";

fetch("database.json")
    .then (response => response.json())
    .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

// Skriv til json igen når en bruger har optjent point

function jsonReceived()
{
    console.log("usersObj: ", object, " len: ", object.users.length);

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
    console.log(usersRanked);
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
        this.place = place;
        this.user = user;
    }
}