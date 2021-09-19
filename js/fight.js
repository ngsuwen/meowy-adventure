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
        }, 300)
    }

function mousePlay(){
    const playInterval = setInterval(()=>{
        if (mouse.hand.length >0){
            console.log(mouse.hand[mouse.hand.length-1])
            mouse.hand.pop()
        } else {
            clearInterval(playInterval)
        }
    }, 500)
}

// after each fight
function discover(){
    let cards=[4,5,6,7,8,9,10,11,12,13]
    for (let i=0;i<3;i++) {
        let randomIndex = Math.floor(Math.random()*(cards.length-1))
        let card = cards[randomIndex]
        cards.splice(randomIndex,1)
        $(`#a${card}`).css({'display':'block'})
    }
}

function remove(){
    for (let i of tom.deck){
        $(`#r${i}`).css({'display':'block'})
    }
}

$(()=>{
    $('.discover').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
    $('.remove').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
    // add + set remove function on click to all cards
    for (i=0;i<14;i++){
        let sn=i
        let removeSn = 'r'+i
        $('.remove').append($('<button>').text(`Card ${sn}`).attr('id', removeSn))
        $(`#${removeSn}`).click(function(){
            tom.removeCard(sn)
            $("[id^=r]").css({'display': 'none'})
            $('.remove').dialog('close')
            battle=false
        })
        $(`#${removeSn}`).css({'display': 'none'})
    }
    // set skip-remove button
    $('#skip-remove').click(function(){
        $("[id^=r]").css({'display': 'none'})
        $('.remove').dialog('close')
        battle=false
    })
}) 