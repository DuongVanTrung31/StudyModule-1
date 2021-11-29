//Player
let playerRight = new Image();
playerRight.src = '/image/sharkRight.gif';
let playerLeft = new Image();
playerLeft.src = '/image/SharkLeft.gif';

class Player {
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height;
        this.radius = 30;
        this.angle = 0;
        this.speed = 50;// lower is faster
    }
    draw(){
        if(this.x >= mouse.x) {
            if(score < 15) ctx.drawImage(playerLeft,this.x-40,this.y-30,this.radius*2.8,this.radius*2);
            else if(score < 40) ctx.drawImage(playerLeft,this.x-55,this.y-40,this.radius*3,this.radius*2);
            else if(score >= 40) ctx.drawImage(playerLeft,this.x-80,this.y-60,this.radius*3,this.radius*2);
        } else {
            if(score < 15) ctx.drawImage(playerRight,this.x-45,this.y-30,this.radius*2.8,this.radius*2);
            else if(score < 40) ctx.drawImage(playerRight,this.x-65,this.y-40,this.radius*3,this.radius*2);
            else if(score >= 40) ctx.drawImage(playerRight,this.x-100,this.y-60,this.radius*3,this.radius*2);
        }
    }
    update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        if (this.x != mouse.x) {
            this.x += dx/this.speed;
        }
        if (this.y != mouse.y){
            this.y += dy/this.speed;
        }
        if (score >= 15 && score < 40) {
            this.radius = 40;
            this.speed = 40;
        }
        if (score >= 40) {
            this.radius = 60;
            this.speed = 30 ;
        }
    }
}
let player = new Player();
