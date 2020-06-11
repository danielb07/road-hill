class Enemy {
    constructor(y){
        this.x = displayWidth;
        this.y = y
        this.s = 20
        
    }

    display(){
        rectMode(CENTER)
        fill(255,5,0);
        image(fuelImg,this.x, this.y)
        fuelImg.resize(this.s, this.s)
        this.x -=(6 + frameCount/300);;
    }

    
}