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
            
            activeUser.pushupCount++;
            activeUser.updatePoints();
        }
    }
}

let pushup = new Pushup();
