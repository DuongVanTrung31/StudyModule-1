const enemyArr = [];



function rateEnemies() {
    let randomRadius;
    let random1 = Math.random() <= 0.52 ? 20 :  Math.random() >= 0.75 ? 55 : 35;
    let random2 = Math.random() <= 0.52 ? 55 :  Math.random() >= 0.9 ? 55 : 35;
    if (score < 15) {
        return randomRadius = random1;
    } else {
        return randomRadius = random2;
    }
}


function createEnemies() {
    if(gameTime % 50 === 0 && enemyArr.length < 200){
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
        if (enemyArr[i].distance < player.radius + enemyArr[i].radius && enemyArr[i].radius < player.radius) {
            enemyArr.splice(i, 1);
            i--;
            score++;
        } else if (enemyArr[i].distance + 10< player.radius + enemyArr[i].radius && enemyArr[i].radius > player.radius) {
            endGame();
        }
    }
}

