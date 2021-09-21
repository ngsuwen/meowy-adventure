const mouse = new Character('mouse','mouse',20,3,[1])

const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<= 0.5){
        newMouse()
        battle=true
    }
}

const randomPlay=()=>{
    random = Math.random()
    if (random<=0.25){
        cardList[mouse.hand[0]].play(mouse, tom)
        mouse.discard.push(mouse.hand[0])
        mouse.hand.splice(0,1)
        //$($('.cardback')[0]).remove()
    }
    if (random<=0.5 && random>0.25){
        cardList[mouse.hand[1]].play(mouse, tom)
        mouse.discard.push(mouse.hand[1])
        mouse.hand.splice(1,1)
        //$($('.cardback')[0]).remove()
    }
    if (random<=0.75 && random>0.5){
        cardList[mouse.hand[2]].play(mouse, tom)
        mouse.discard.push(mouse.hand[2])
        mouse.hand.splice(2,1)
        //$($('.cardback')[0]).remove()
    }
    if (random>0.75){
        cardList[mouse.hand[3]].play(mouse, tom)
        console.log(mouse.hand[3])
        mouse.discard.push(mouse.hand[3])
        mouse.hand.splice(3,1)
        //$($('.cardback')[0]).remove()
    }
}

const mouseAction = ()=>{
        const drawInterval = setInterval(()=>{
            if (mouse.hand.length <4){
                mouse.draw(1)
                $('.mouse').append($('<div>').addClass('cardback'))
            } else {
                clearInterval(drawInterval)
                mousePlay()
            }
        }, 500)
    }

function mousePlay(){
    const playInterval = setInterval(()=>{
        if (mouse.mana>0){
            randomPlay()
        } else {
            clearInterval(playInterval)
            mouse.newTurn()
            tom.draw(4)
        }
    }, 500)
}

async function newMouse(){
    mouse.name = await getName()
    mouse.hp = 20
    mouse.mana = 3
    mouse.deck = [0, 1, 2, 3, 3, 0]
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

$(()=>{
        // hide mouse info until called
        $('.battle').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
})