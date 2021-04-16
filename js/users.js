let users;

async function fetchJson(path)
{
    const response = await fetch(path);
    const json = await response.json();
    return json;
}

console.log("hej3")


users = fetchJson("database.json");

console.log(users)


//for (let i = 0; i < json.users.length; i++){

//}


