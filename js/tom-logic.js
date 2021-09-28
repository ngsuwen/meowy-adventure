const tom = new Tom('tom','tom',80,3,[10, 11, 12, 13, 3])

$(()=>{

    // tom's profile display
    $('.tomDeck').text('Deck: '+tom.deck)
    $('.tomHealth').text('Health: '+tom.hp)
    $('.tomMana').text('Mana: '+tom.mana)
    $('.tomHand').text('Hand: '+tom.hand)

    // end-turn button
    $('#end-turn').click(function(){
        $("[id^=p]").css({'display': 'none'})
        $('#end-turn').css({'display': 'none'})
        if (mouse.reflect>0){
            mouse.reflect-=1
            if (mouse.reflect==0){
                $('.reflectmouse').remove()
            } else {
                $('.reflectmouse').text(mouse.reflect)
            }
        }
        tom.newTurn()
        tom.shuffleDeck()
        mouseAction()
    })
})