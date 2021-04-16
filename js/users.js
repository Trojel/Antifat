json = fetch("database.json")
        .then(response => response.json())
        .then(getJson(json))


function getJson(data){
     for (let i = 0; i < data.users.length; i++){
        console.log("hej")
    }   
}


