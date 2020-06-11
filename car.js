class Car {
    constructor(){
        this.x = displayWidth/8;
        this.y = displayHeight/2;
        this.w = 80;
        this.h = 60;
    }

    renderer(){
        rectMode(CENTER);
        fill("#000000")
        noStroke();
        image(carImg,this.x, this.y,);
        carImg.resize(this.w, this.h)
    }

    moveMent(){
        if(keyIsDown(87)){
            this.y -= 5;
        }

        if(keyIsDown(83)){
            this.y += 5;
        }
    }
}