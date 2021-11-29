class Enemy {
    radius
    constructor (radius) {
        this.x;
        this.y = Math.random() * (canvas.height -150) +80;
        this.radius = radius;
        this.speed = Math.random() * 3 + 2;
        this.distance;
        this.direction;
    }
}

// Create Img
// Small
let smallFishImgRight = new Image();
smallFishImgRight.src = '/image/smallFishRight.gif';
let smallFishImgLeft = new Image();
smallFishImgLeft.src = '/image/smallFishLeft.gif'
// Medium
let mediumFishImgRight = new Image();
mediumFishImgRight.src = '/image/blueFishRight.gif';
let mediumFishImgLeft = new Image();
mediumFishImgLeft.src = '/image/blueFishLeft.gif';
// Big
let bigFishImgRight = new Image();
bigFishImgRight.src = '/image/BOOMFishR.gif';
let bigFishImgLeft = new Image();
bigFishImgLeft.src = '/image/BOOMFishL.gif';

class FishRight extends Enemy {
    constructor(radius){
        super(radius);
        this.x = -50;
        this.direction = true;
    }
    draw() {
        if (this.radius == 20) {
            ctx.drawImage(smallFishImgRight,this.x-29, this.y-25,this.radius*2.5,this.radius*2.5);
        } else if (this.radius == 35) {
            ctx.drawImage(mediumFishImgRight,this.x-55, this.y-33,this.radius*2.7,this.radius*1.8);
        } else if(this.radius === 45){
            ctx.drawImage(bigFishImgRight,this.x-70, this.y-45,this.radius*3,this.radius*2);
        }
    }
    moveR() {
        this.x += this.speed;
        if (this.x > canvas.width + 200) {
            this.x = -50;
            this.speed = Math.random() * 5 + 2;    
            this.y = Math.random() * (canvas.height -150) +200;
        }
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}

class FishLeft extends Enemy {
    constructor(radius){
        super(radius);
        this.x = canvas.width + 100;
        this.direction = false;
    }
    draw() {
        if (this.radius === 20) {
            ctx.drawImage(smallFishImgLeft,this.x-22, this.y-25,this.radius*2.5,this.radius*2.5);
        } else if (this.radius === 35) {
            ctx.drawImage(mediumFishImgLeft,this.x-40, this.y-33,this.radius*2.7,this.radius*1.8);
        } else if(this.radius === 45) {
            ctx.drawImage(bigFishImgLeft,this.x-65, this.y-45,this.radius*3,this.radius*2);
        }
    }
    moveL() {
        this.x -= this.speed;
        if (this.x < -200) {
            this.x = canvas.width + 100;
            this.speed = Math.random() * 5 + 2;    
            this.y = Math.random() * (canvas.height -150) +200;
        }
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}

class Squirt {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 50;
        this.speed = 3;
        this.width = 50;
        this.height = 100;
    }
    draw() {
        ctx.beginPath();
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    }
    update() {
        this.x -=this.speed;
        this.y -=this.speed;
    }
}
