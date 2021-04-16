let users;

fetch("database.json")
        .then (response => response.json())
        .then (json => json = users)
        
setTimeout(()=> getJson(users), 1000)


function getJson(data)
{
    console.log(data.length) 
}


