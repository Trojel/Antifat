class Web
{
    constructor()
    {

    }

    son()
    {
        fetch("http://192.168.177.196/cm?cmnd=Power%20On")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }

    soff()
    {
        fetch("http://192.168.177.196/cm?cmnd=Power%20Off")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }
}