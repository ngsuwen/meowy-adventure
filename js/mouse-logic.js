const mouse = new Character('mouse','mouse',30,3,[1])

const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<=0.25){
        newMouse()
        battle=true
        $('#tomDeck').hide()
    }
}

const randomPlay=()=>{
    random = Math.random()
    if (random<=0.25){
        cardList[mouse.hand[0]].play(mouse, tom)
        //$($('.cardback')[0]).remove()
    }
    if (random<=0.5 && random>0.25){
        cardList[mouse.hand[1]].play(mouse, tom)
        //$($('.cardback')[0]).remove()
    }
    if (random<=0.75 && random>0.5){
        cardList[mouse.hand[2]].play(mouse, tom)
        //$($('.cardback')[0]).remove()
    }
    if (random>0.75){
        cardList[mouse.hand[3]].play(mouse, tom)
        //$($('.cardback')[0]).remove()
    }
}

const mouseAction = ()=>{
    if (mouse.poison>0){
        mouse.takeDmg(mouse.poison)
        mouse.poison-=1
    }
    if (mouse.hp<=0){
        $('#end-turn').css({'display': 'block'})
        return
    }
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
            $('.cardback').remove()
            $('#end-turn').css({'display': 'block'})
            mouse.newTurn()
            if (tom.poison>0){
                tom.takeDmg(tom.poison)
                tom.poison-=1
            }
            if (tom.reflect>0){
                tom.reflect-=1
            }
            tom.draw(4)
        }
    }, 500)
}

async function newMouse(){
    mouse.name = await getName()
    mouse.hp = 20
    mouse.mana = 3
    mouse.deck = [0, 1, 2, 3, 0, 9]
    mouse.double = false
    mouse.poison = 0
    mouse.weak = 0
    mouse.curse = 0
    tom.double = false
    tom.poison = 0
    tom.weak = 0
    tom.curse = 0
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
}

$(()=>{
        // hide mouse info until called
        $('.battle').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
})