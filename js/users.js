
<<<<<<< HEAD
json = fetch(path)
        .then(response => response.json())
        .then(json => console.log(json))


=======
async function fetchJson(path)
{
    const response = await fetch(path);
    const json = await response.json();
    return json;
}

console.log("hej3")


users = fetchJson("database.json");
>>>>>>> ceddf0dd291c51c01b858021f74aefc275a3b956




for (let i = 0; i < json.users.length; i++){
    console.log("hej")
}


