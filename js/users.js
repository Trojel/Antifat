
let object;
let users = [];

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

function jsonReceived()
{
    for (let i = 0; i < Object.keys(object.users); i++){
        users[i] = new User(object.users.name, object.useres.score)
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
