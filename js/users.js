let users;

async function fetchJson(path)
{
    const response = await fetch(path);
    const movies = await response.json();
    return movies;
}

console.log("hej3")

users = await fetchJson("database.json");

console.log(users)


//for (let i = 0; i < json.users.length; i++){

//}


