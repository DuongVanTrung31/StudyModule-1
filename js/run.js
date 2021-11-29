// Canvas init
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let score = 0;
let gameTime = 0;
let start = false;
let gameOver = false;
let bgSpeed = 1;
let highScore = 0;
// Mouse Begin 
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2
}

// Start game
canvas.addEventListener('click', () => {
    drawHigh();
    start = true;
})
//Mouse move
canvas.addEventListener('mousemove', event => {
    if(start) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
})
//Audio
function eating() {
    document.getElementById('eating').play();
    window.removeEventListener('click', eating)
}
// End game
function endGame() {
    ctx.font = "30px Arial"
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER!!!, YOUR SCORE   ' + score , canvas.width/3 , 275)
    gameOver = true;
}
// Background
let bgImgSky = new Image();
bgImgSky.src = '/image/New Project.png'
const bgSky = {
    x : 0,
    x2 : canvas.width,
    y : -50,
    width : canvas.width,
    height : 150
}
let bgImg = new Image();
bgImg.src = '/image/1_game_background.png';
const BG = {
    x : 0,
    x2 : canvas.width,
    y : 81,
    width : canvas.width,
    height : canvas.height
}

function drawBG() {
    bgSky.x += bgSpeed
    if (bgSky.x > bgSky.width) {
        bgSky.x = -bgSky.width;
    }
    bgSky.x2 += bgSpeed
    if(bgSky.x2 > bgSky.width) {
        bgSky.x2 = -bgSky.width;
    }
    ctx.drawImage(sunImg,canvas.width - 300, - 75, 250 , 250);  
    ctx.drawImage(bgImgSky,bgSky.x, bgSky.y , bgSky.width, bgSky.height);
    ctx.drawImage(bgImgSky,bgSky.x2, bgSky.y , bgSky.width, bgSky.height);
    BG.x -= bgSpeed
    if (BG.x < -BG.width) {
        BG.x = BG.width;
    }
    BG.x2 -= bgSpeed
    if(BG.x2 < -BG.width) {
        BG.x2 = BG.width;
    }
    ctx.drawImage(bgImg,BG.x, BG.y , BG.width, BG.height);
    ctx.drawImage(bgImg,BG.x2, BG.y , BG.width, BG.height);
}


// heartIMG
let heartImg = new Image();
heartImg.src = '/image/100-percent.png';
let sunImg = new Image();
sunImg.src = '/image/sun.png';

function drawHigh() {
    for (let i = 0; i < localStorage.length; i++) {
        if( Number(localStorage["score"+i]) > highScore){
            highScore = Number(localStorage["score"+i])
        }
    }
}

//Loop Animation Frame
ctx.font = "25px Arial";
function animation () {
    ctx.clearRect(0, 0,canvas.width ,canvas.height);
    drawBG();
    createAndCollisionEnemies()
    ctx.drawImage(heartImg,50,30, 30 ,30);  
    ctx.fillStyle = 'red';
    player.update();
    player.draw();
    ctx.fillText('Score: ' + score, 50 ,50);
    ctx.fillText('High Score: ' + highScore, canvas.width-200 ,50);
    gameTime++;
    if(!gameOver) {
        requestAnimationFrame(animation);
    }
}

animation();