

 
var player;
var enemies = [];
var points = 10;
var color;
var fuelImg,carImg
var gamestate = 0; 
 
preload = () =>{
    fuelImg = loadImage("fuel.png")
    carImg = loadImage("car.png")
}

function setup() {
    // createCanvas(200,200);
    createCanvas(displayWidth,displayHeight);
    player = new Car();
}
 
function draw() {
    background(200)
    if(gamestate===0){
        push();
        textSize(20);
        if(points === 0){
            color = 200
        } else if(points >0){
            color = (0,255,0);
        } else if(points<0){
            color = (255,0,0)
        }
        fill(color)
        text("Score: " + points, 97, 47);
        pop();
        player.renderer();
        player.moveMent();
        if(frameCount%94===0){
            var randomY = random(displayHeight-40, displayHeight%displayHeight + 40)
            var enemy = new Enemy(randomY)
            enemies.push(enemy);
        }

        for(var i=0;i<enemies.length; i++){
            enemies[i].display();
        }

        gameover();

        healthLoss();
        endOfTheLine();
    }else if(gamestate === 1){
        textSize(40);
        text("GAME OVER",displayWidth/2,displayHeight/2);
        text("You ran out of fuel ",displayWidth,displayHeight/2 + 40)
    }
}
// this will help with the position
mousePressed = () => {
    console.log(mouseX+", "+mouseY);
    
}

healthLoss = () =>{
    for(var i=0;i<enemies.length; i++){
        enemy = enemies[i];
        
        if(enemy.x + (enemy.s/2)>player.x-(player.w/2) && enemy.x - (enemy.s/2) < player.x + (player.w/2) && enemy.y + (enemy.s/2)>player.y-(player.h/2) && enemy.y - (enemy.s/2) < player.y + (player.h/2)){
            console.log("haKuna matata");
            enemies.shift();
            points +=1;
        }
    }
}

endOfTheLine = () =>{
    for(var i=0;i<enemies.length; i++){
        enemy = enemies[i];
        
        if(enemy.x < 10){
            
            enemies.shift();
            points -=2;
        }
    }
}

gameover = () =>{
    if(points <= 0){
        
        gamestate = 1
    }
}
    
