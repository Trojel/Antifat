json = fetch("database.json")
        .then(response => response.json())
        .then(json => console.log(json))




for (let i = 0; i < Object.keys(json).length; i++){
    console.log("hej")
}


