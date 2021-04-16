json = fetch("database.json")
        .then (response => response.json())
        .then (console.log(json.users.length))



// function getJson(data)
// {
//      for(let i = 0; i < data.users.length; i++){
//         console.log(i)
//     }   
// }


