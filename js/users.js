let users;

async function getJson(path)
{
    await fetch(path)
        .then(response => response.json())
        .then(json => users = json)
}

console.log("hej2")
users = await getJson("database.json");

console.log(users)


//for (let i = 0; i < json.users.length; i++){

//}


