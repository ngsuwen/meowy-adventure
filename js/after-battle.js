// pick one card from three to add to deck
function discover(){
    let cards=[4,5,6,7,8,9,10,11,12,13]
    for (let i=0;i<3;i++) {
        let randomIndex = Math.floor(Math.random()*(cards.length-1))
        let card = cards[randomIndex]
        cards.splice(randomIndex,1)
        $(`#a${card}`).css({'display':'inline'})
    }
}

// pick one card to remove from deck
function remove(){
    for (let i of tom.deck){
        $(`#r${i}`).css({'display':'inline'})
    }
}

$(()=>{
    // hide discover dialog until called
    $('.discover').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
    // hide remove dialog until called
    $('.remove').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})
    // add, then set on click remove to all cards
    for (i=0;i<14;i++){
        let sn=i
        let removeSn = 'r'+i
        let $button = $('<img>').attr('src',`./src/image/${sn}.png`)
        $button.attr('id', removeSn)
        $button.attr('href','#card-window')
        $button.addClass('open-gallery-link')
        $('.remove').prepend($button)
        $(`#${removeSn}`).click(function(){
            if (tom.deck.length <=5){
                alert('Minimum 5 cards in the deck!')
            } else {
                tom.removeCard(sn)
                $("[id^=r]").css({'display': 'none'})
                $('.remove').dialog('close')
                battle=false
            }
        })
        $(`#${removeSn}`).css({'display': 'none'})
    }
    // skip-remove button
    $('#skip-remove').click(function(){
        $("[id^=r]").css({'display': 'none'})
        $('.remove').dialog('close')
        battle=false
    })

    // add, then set on click add to all cards
    // collectible cards start from 4, total 10 different cards that can be collected
    for (i=4;i<14;i++){
        let addSn = 'a'+i
        let sn = i
        let $button = $('<img>').attr('src',`./src/image/${sn}.png`)
        $button.attr('id', addSn)
        $button.attr('href','#card-window')
        $button.addClass('open-gallery-link')
        $('.discover').prepend($button)
        $(`#${addSn}`).click(function(){
            tom.addCard(sn)
            $("[id^=a]").css({'display': 'none'})
            $('.discover').dialog('close')
            remove()
            $('.remove').dialog('open')
        })
        $(`#${addSn}`).css({'display': 'none'})
    }
    // skip-add button
    $('#skip-add').click(function(){
        $("[id^=a]").css({'display': 'none'})
        $('.discover').dialog('close')
        remove()
        $('.remove').dialog('open')
    })
}) 