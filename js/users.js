json = fetch("database.json")
        .then(response => response.json())
        .then(json => console.log(json))




for (let i = 0; i < json.array.length; i++){
    console.log("hej")
}


