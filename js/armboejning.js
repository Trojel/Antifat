class Pushup
{
    constructor()
    {
        this.downCheck = false;
    }
    
    down()
    {
        this.downCheck = true;
        document.querySelectorAll("page").forEach(elem => elem.style.backgroundColor = "green");
    }
    
    up()
    {
        document.querySelectorAll("page").forEach(elem => elem.style.backgroundColor = "var(--color1)");
        if (this.downCheck)
        {
            this.downCheck = false;
            
            activeUser.pushupCount++;
            activeUser.updatePoints();
        }
    }
}

let pushup = new Pushup();
