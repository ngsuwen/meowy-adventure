const tom = new Tom('tom','tom',50,8,[0, 1, 2, 2, 3, 3])

$(()=>{

    // tom's profile display
    $('.tomDeck').text('Deck: '+tom.deck)
    $('.tomHealth').text('Health: '+tom.hp)
    $('.tomMana').text('Mana: '+tom.mana)
    $('.tomHand').text('Hand: '+tom.hand)

    // end-turn button
    $('#end-turn').click(function(){
        $("[id^=p]").css({'display': 'none'})
        tom.newTurn()
        tom.shuffleDeck()
        mouseAction()
    })
})