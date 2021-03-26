class Web
{
    constructor()
    {

    }

    test()
    {
        fetch("http://127.0.0.1:1880/test")
        .then(data => {return data.json()})
        .then(res => {console.log(res)})
    }
}