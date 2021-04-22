class Web
{
    constructor()
    {
        this.ip = "192.168.177.196";
    }

    son()
    {
        fetch(`http://` + this.ip + `/cm?cmnd=Power%20On`)
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }

    soff()
    {
        fetch("http://" + this.ip + "/cm?cmnd=Power%20Off")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }
}