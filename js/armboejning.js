class Pushup
{
    constructor()
    {
        this.downCheck = false;
    }
    
    down()
    {
        this.downCheck = true;
    }
    
    up()
    {
        if (this.downCheck)
        {
            this.downCheck = false;
            
            console.log("push point for u");
            activeUser.points++;
        }
    }
}

let pushup = new Pushup();
