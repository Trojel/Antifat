let object;
let users = [];
let user;

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

// Skriv til json igen når en bruger har optjent point

function jsonReceived()
{
    console.log("users ", object);

    for (let i = 0; i < Object.keys(object.users); i++){
        users[i] = new User(object.users[i].name, object.users[i].score)
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
