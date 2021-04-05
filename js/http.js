class Web
{
    constructor()
    {

    }

    son()
    {
        fetch("http://127.0.0.1:1880/son")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }

    soff()
    {
        fetch("http://127.0.0.1:1880/soff")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }
}