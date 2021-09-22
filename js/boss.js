const $boss = $("<img class='boss' src='https://pa1.narvii.com/6373/6e9dfebb7763d13fb5774ce007f137d47444d072_hq.gif'>")

function boss(){
    mouse.name = 'Bossy Mouse'
    mouse.hp = 30
    mouse.mana = 4
    mouse.deck = [0, 1, 2, 3, 9, 10, 11, 12, 13]
    const $h3 = $('<h3>').text(mouse.name + ' Profile')
    const $health = $('<div>').addClass('mouseHealth')
    $health.text('Health: '+mouse.hp)
    const $mouseInfoDialog = $('.mouse')
    $newMouseInfo = $('<div>').addClass('mouse-info')
    $newMouseInfo.append($h3)
    $newMouseInfo.append($health)
    $mouseInfoDialog.append($newMouseInfo)
    // Create pop up dialog when battle starts
    $('.battle').dialog('open')
    tom.shuffleDeck()
    tom.draw(4)
}

let currentBoss='10-5'
function bossMove(){
    let randomMove = Math.random()
    if (randomMove<=0.5 && currentBoss[3]<=10 && currentBoss[3]>1){
        let newCo = Number(currentBoss[3])-1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $(`.${currentBoss}`).append($boss)
    }
    if (randomMove>0.5 && currentBoss[3]>=1 && currentBoss[3]<10){
        let newCo = Number(currentBoss[3])+1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $(`.${currentBoss}`).append($boss)
    }
}

let moveInterval = setInterval(function() {
  if(!battle) {
    bossMove();
  }
}, 2500);