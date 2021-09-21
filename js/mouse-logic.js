const mouse = new Character('mouse','mouse',20,3,[1])

const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<= 0.5){
        newMouse()
        battle=true
    }
}

const mouseAction = ()=>{
        const drawInterval = setInterval(()=>{
            if (mouse.hand.length <5){
                mouse.draw(1)
                console.log(mouse.hand)
            } else {
                console.log('pass')
                clearInterval(drawInterval)
                mousePlay()
            }
        }, 1000)
    }

function mousePlay(){
    const playInterval = setInterval(()=>{
        if (mouse.hand.length >0){
            console.log(mouse.hand[mouse.hand.length-1])
            mouse.hand.pop()
        } else {
            clearInterval(playInterval)
            $('.mouse').dialog('open')
            tom.draw(4)
        }
    }, 1000)
}

async function newMouse(){
    mouse.name = await getName()
    mouse.hp = 20
    mouse.mana = 3
    mouse.deck = [1000, 1001, 1002, 1003, 1003, 1000]
    const $h3 = $('<h3>').text(mouse.name + ' Profile')
    const $health = $('<div>').addClass('mouseHealth')
    $health.text('Health: '+mouse.hp)
    const $mouseInfoDialog = $('.mouse')
    $newMouseInfo = $('<div>').addClass('mouse-info')
    $newMouseInfo.append($h3)
    $newMouseInfo.append($health)
    $mouseInfoDialog.append($newMouseInfo)
    // Create pop up window with mouse info
    $mouseInfoDialog.dialog('open')
    tom.draw(4)
}

$(()=>{
        // hide mouse info until called
        $('.mouse').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
})