//Player
let playerImg = new Image();
playerImg.src = '/image/sharkRight.gif';

class Player {
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height;
        this.radius = 30;
        this.angle = 0;
    }
    draw() {
        if (score < 15) {
            ctx.drawImage(playerImg,this.x-57, this.y-42,this.radius*3.2,this.radius*2.5)
        }
        if(score >= 15 && score < 35) {
            player.radius = 40;
            ctx.drawImage(playerImg,this.x-75, this.y-55,this.radius*3.2,this.radius*2.5);  
        }
        if (score >= 35) {
            player.radius = 60;
            ctx.drawImage(playerImg,this.x-140, this.y-95,this.radius*4,this.radius*2.8);
        }
    }
}
let player = new Player();
