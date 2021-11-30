const enemyArr = [];



function rateEnemies() {
    let randomRadius;
    let random1 = Math.random() <= 0.50 ? 20 :  Math.random() >= 0.8 ? 45 : 35;
    let random2 = Math.random() <= 0.50 ? 45 :  Math.random() >= 0.8 ? 20 : 35;
    if (score < 15) {
        return randomRadius = random1;
    } else {
        return randomRadius = random2;
    }
}

function createAndCollisionEnemies() {
    if(gameTime % 60 === 0 && enemyArr.length < 40){
        enemyArr.push(new FishRight(rateEnemies()));
        enemyArr.push(new FishLeft(rateEnemies()));
    }
    for (let i = 0; i < enemyArr.length; i ++) {
        if (enemyArr[i].direction) {
            enemyArr[i].moveR();
            enemyArr[i].draw();
        } else if (!enemyArr[i].direction) {
            enemyArr[i].moveL();
            enemyArr[i].draw();
        }
        if (enemyArr[i].distance < player.radius + enemyArr[i].radius && enemyArr[i].radius <= player.radius) {
            if (enemyArr[i].radius === 20) ++score;
            else if (enemyArr[i].radius === 35) score+=2;
            else if (enemyArr[i].radius === 45) score+=3;
            eating();
            enemyArr.splice(i, 1);
        } else if (enemyArr[i].distance + 15 < player.radius + enemyArr[i].radius && enemyArr[i].radius > player.radius) {
            localStorage.setItem("score" +localStorage.length,score);
            endGame();
        }
    }
}
