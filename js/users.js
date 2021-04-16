
let object;

fetch("database.json")
        .then (response => response.json())
        .then (json => object = json)
        
setTimeout(()=> getJson(object), 1000)


function getJson(data)
{
    for (let i = 0; i < Object.keys(data.users); i++){
        
    }
    
}


