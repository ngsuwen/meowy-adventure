const tom = new Tom('tom','tom',50,3,[0, 1, 2, 2, 3, 3])

$(()=>{

    // tom's profile display
    $('.tomDeck').text('Deck: '+tom.deck)
    $('.tomHealth').text('Health: '+tom.hp)
    $('.tomMana').text('Mana: '+tom.mana)
    $('.tomHand').text('Hand: '+tom.hand)

    // add, then set on click play to all cards
    for (i=0;i<14;i++){
        let playSn = 'p'+i
        let sn = i
        $('.play').append($('<button>').text(`Card ${sn}`).attr('id', playSn))
        $(`#${playSn}`).click(function(){
            cardList[sn].play(tom, mouse)
        })
        $(`#${playSn}`).css({'display': 'none'})
    }

    // end-turn button
    $('#end-turn').click(function(){
        $("[id^=p]").css({'display': 'none'})
        tom.newTurn()
        tom.shuffleDeck()
        mouseAction()
    })
})