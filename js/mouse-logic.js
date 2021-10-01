const mouse = new Character('mouse','mouse',30,3,[1])

const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<=0.33){
        newMouse()
        angryCat.play()
        battle=true
        $('#tomDeck').hide()
    }
}

const mouseLogic=()=>{
    if (mouse.hp<=10){
        if (mouse.hand.indexOf(5)>0){
            let index=mouse.hand.indexOf(5)
            $($('.cardback')[index]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
            cardList[mouse.hand[index]].play(mouse, tom)
        } else if (mouse.hand.indexOf(1)>0){
            let index=mouse.hand.indexOf(1)
            $($('.cardback')[index]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
            cardList[mouse.hand[index]].play(mouse, tom)
        } else {
            randomPlay()
        }
    } else if (mouse.hand.indexOf(3)>0){
        let index=mouse.hand.indexOf(3)
        $($('.cardback')[index]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
        cardList[mouse.hand[index]].play(mouse, tom)
    } else {
        randomPlay()
    }
}

const randomPlay=()=>{
    random = Math.random()
    if (random<=0.25){
        cardList[mouse.hand[0]].play(mouse, tom)
        $($('.cardback')[0]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
    if (random<=0.5 && random>0.25){
        cardList[mouse.hand[1]].play(mouse, tom)
        $($('.cardback')[1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
    if (random<=0.75 && random>0.5){
        cardList[mouse.hand[2]].play(mouse, tom)
        $($('.cardback')[2]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
    if (random>0.75){
        cardList[mouse.hand[3]].play(mouse, tom)
        $($('.cardback')[3]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
}

const mouseAction = ()=>{
    if (mouse.poison>0){
        mouse.takeDmg(mouse.poison)
        mouse.poison-=1
        if (mouse.poison==0){
            $('.poisonmouse').remove()
        } else {
            $('.poisonmouse').text(mouse.poison)
        }
    }
    if (mouse.hp<=0){
        $('#end-turn').css({'display': 'block'})
        return
    }
    const drawInterval = setInterval(()=>{
        if (mouse.hand.length <4){
            mouse.draw(1)
            $('.mouse').append($('<img>').attr('src','./src/image/cardback.png').addClass('cardback'))
        } else {
            clearInterval(drawInterval)
            mousePlay()
        }
    }, 500)
}

function mousePlay(){
    const playInterval = setInterval(()=>{
        if (mouse.mana>0){
            mouseLogic()
        } else {
            clearInterval(playInterval)
            $('.cardback').remove()
            $('#end-turn').css({'display': 'block'})
            mouse.newTurn()
            if (tom.poison>0){
                tom.takeDmg(tom.poison)
                tom.poison-=1
                if (tom.poison==0){
                    $('.poisontom').remove()
                } else {
                    $('.poisontom').text(tom.poison)
                }
            }
            if (tom.reflect>0){
                tom.reflect-=1
                if (tom.reflect==0){
                    $('.reflecttom').remove()
                } else {
                    $('.reflecttom').text(tom.reflect)
                }
            }
            tom.draw(4)
        }
    }, 1000)
}

async function newMouse(){
    mouse.name = await getName()
    mouse.hp = 20
    mouse.mana = 3
    mouse.deck = [1, 2, 3, 3, 5, 6, 8]
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
}

$(()=>{
        // hide mouse info until called
        $('.battle').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
})