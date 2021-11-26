// Canvas init
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 550;
let score = 0;
let gameTime = 0;
let start = false;
let gameOver = false;
let bgSpeed = 1;


// Start game
canvas.addEventListener('click', () => start = true)
//Mouse move
canvas.addEventListener('mousemove', event => {
    if(start) {
        player.x = event.offsetX + 50;
        player.y = event.offsetY + 75;
    }
})
// Create Button
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

function starGame() {
    drawButton(button1, canvas.width/2, canvas.height/2);
    drawButton(button2, canvas.width/2, canvas.height/2);
}





// End game
function endGame() {
    ctx.font = "70px Arial"
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER!!!, YOUR SCORE   ' + score , 35 , 275)
    gameOver = true;
}
// Background
let bgImg = new Image();
bgImg.src = '/image/BG2.png'
const BG = {
    x : 0,
    x2 : canvas.width,
    y : 0,
    width : canvas.width,
    height : 50
}

function drawImg() {
    BG.x -= bgSpeed
    if (BG.x < -BG.width) {
        BG.x = BG.width;
    }
    BG.x2-= bgSpeed
    if(BG.x2 < -BG.width) {
        BG.x2 = BG.width;
    }
    ctx.drawImage(bgImg ,BG.x, BG.y , BG.width, BG.height);
    ctx.drawImage(bgImg ,BG.x2, BG.y , BG.width, BG.height);
}
// heartIMG
let heartImg = new Image();
heartImg.src = '/image/100-percent.png';



//Loop Animation Frame
ctx.font = "25px Arial";
function animation () {
    ctx.clearRect(0, 0,canvas.width ,canvas.height);
    createEnemies();
    drawImg();
    ctx.drawImage(heartImg,120,0, 30 ,30);  
    ctx.fillStyle = 'red';
    ctx.fillText('Score: ' + score, 10 ,20)
    player.draw();
    gameTime++;
    if(!gameOver) {
        requestAnimationFrame(animation);
    }
    
}

animation();