
let object;

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(() => jsonReceived(), 1000)


function jsonReceived()
{
    console.log(Object.keys(object.users).length) 
}