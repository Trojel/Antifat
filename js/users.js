let users;

json = fetch("database.json")
        .then (response => response.json())
        .then (json => json = users)
        
setTimeout(()=> getJson(users), 1000)


function getJson(data)
{
     for(let i = 0; i < data.length; i++){
        console.log(data)
    }   
}


