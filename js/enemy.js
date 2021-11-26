class Enemy {
    radius
    constructor (radius) {
        this.x;
        this.y = Math.random() * (550-100+1) +100;
        this.radius = radius;
        this.speed = Math.random() * 10 + 2;
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
bigFishImgRight.src = '/image/bigFishRight.gif';
let bigFishImgLeft = new Image();
bigFishImgLeft.src = '/image/bigFishLeft.gif';

class FishRight extends Enemy {
    constructor(radius){
        super(radius);
        this.x = 0;
        this.direction = true;
    }
    draw() {
        if (this.radius == 20) {
            ctx.drawImage(smallFishImgRight,this.x-29, this.y-25,this.radius*2.5,this.radius*2.5);
        } else if (this.radius == 35) {
            ctx.drawImage(mediumFishImgRight,this.x-45, this.y-43,this.radius*2.23,this.radius*2.23);
        } else if(this.radius === 55){
            ctx.drawImage(bigFishImgRight,this.x-89, this.y-75,this.radius*2.6,this.radius*2.6);
        }
    }
    moveR() {
        this.x += this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}

class FishLeft extends Enemy {
    constructor(radius){
        super(radius);
        this.x = 1300;
        this.direction = false;
    }
    draw() {
        if (this.radius === 20) {
            ctx.drawImage(smallFishImgLeft,this.x-22, this.y-25,this.radius*2.5,this.radius*2.5);
        } else if (this.radius === 35) {
            ctx.drawImage(mediumFishImgLeft,this.x-33, this.y-43,this.radius*2.23,this.radius*2.23);
        } else if(this.radius === 55) {
            ctx.drawImage(bigFishImgLeft,this.x-55, this.y-75,this.radius*2.6,this.radius*2.6);
        }
    }
    moveL() {
        this.x -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
}