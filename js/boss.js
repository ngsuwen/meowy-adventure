const $boss = $('<div>').addClass('mouseright').attr('id','mousesprite')

function boss(){
    mouse.name = 'Jerry Mouse'
    mouse.hp = 60
    mouse.mana = 5
    mouse.deck = [3, 3, 3, 4, 6, 5, 8, 12, 13]
    mouse.double = false
    mouse.poison = 0
    mouse.weak = 0
    mouse.curse = 0
    mouse.reflect = 0
    tom.double = false
    tom.poison = 0
    tom.weak = 0
    tom.curse = 0
    tom.reflect = 0
    $('.reflecttom').remove()
    $('.reflectmouse').remove()
    $('.cursetom').remove()
    $('.cursemouse').remove()
    $('.weaktom').remove()
    $('.weakmouse').remove()
    $('.poisontom').remove()
    $('.poisonmouse').remove()
    const $h3 = $('<h3>').text(mouse.name)
    const $effect = $('<div>').addClass('mouseEffect')
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
    $('#tomDeck').hide()
    battle=true
}

let currentBoss='9-5'
function bossMove(){
    let randomMove = Math.random()
    if (randomMove<=0.5 && currentBoss[2]<=9 && currentBoss[2]>1){
        let newCo = Number(currentBoss[2])-1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $boss.attr('class','mouseleft')
        $(`.${currentBoss}`).append($boss)
    }
    if (randomMove>0.5 && currentBoss[2]>=1 && currentBoss[2]<9){
        let newCo = Number(currentBoss[2])+1
        currentBoss = currentBoss.replace(/.$/,newCo)
        $boss.attr('class','mouseright')
        $(`.${currentBoss}`).append($boss)
    }
}

let moveInterval = setInterval(function() {
  if(!battle) {
    bossMove();
  }
}, 1000);