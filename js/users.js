let users;

json = fetch("database.json")
        .then (response => response.json())
        .then (json => json = users)
setTimeout(()=> console.log(users), 1000)


// function getJson(data)
// {
//      for(let i = 0; i < data.users.length; i++){
//         console.log(i)
//     }   
// }


