
let object;
let users = [];

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

function jsonReceived()
{
    for (let i = 0; i < Object.keys(data.users); i++){
        
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
