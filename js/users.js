
let object;
let users = [];

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)

function jsonReceived()
{
<<<<<<< HEAD
    for (let i = 0; i < Object.keys(data.users); i++){
        
    }
    
=======
    console.log(Object.keys(object.users).length) 
>>>>>>> aeb6ea6dcbc019debdbd6d91f1eb78c064421528
}

class User
{
    constructor(name, points)
    {
        this.name = name;
        this.points = points || 0;
    }
}
