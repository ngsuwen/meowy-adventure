const $boss = $('<div>').addClass('mouseright').attr('id','mousesprite')

function boss(){
    mouse.name = 'Bossy Mouse'
    mouse.hp = 50
    mouse.mana = 5
    mouse.deck = [0, 1, 2, 4, 9, 6, 5, 8, 12, 13]
    mouse.double = false
    mouse.poison = 0
    mouse.weak = 0
    mouse.curse = 0
    tom.double = false
    tom.poison = 0
    tom.weak = 0
    tom.curse = 0
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
    if (randomMove<=0.5 && currentBoss[3]<=9 && currentBoss[3]>1){
        let newCo = Number(currentBoss[3])-1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $boss.attr('class','mouseleft')
        $(`.${currentBoss}`).append($boss)
    }
    if (randomMove>0.5 && currentBoss[3]>=1 && currentBoss[3]<9){
        let newCo = Number(currentBoss[3])+1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $boss.attr('class','mouseright')
        $(`.${currentBoss}`).append($boss)
    }
}

let moveInterval = setInterval(function() {
  if(!battle) {
    bossMove();
  }
}, 2500);