const newgame=()=>{
    tom.hp=80
    tom.mana=3
    tom.deck=[]
    $('#tomDeck').empty()
    tom.addCard(0)
    tom.addCard(1)
    tom.addCard(2)
    tom.addCard(2)
    tom.addCard(3)
    tom.addCard(3)
    tom.newTurn()
    currentPoint='3-4'
    $('.3-4').append($cat)
    if (tom.name=='Tom'){
        $('#catcss').attr('href','./css/cat2.css')
        tom.name='Tommy'
    } else {
        tom.name='Tom'
        $('#catcss').attr('href','./css/cat1.css')
    }
    $("[id^='p']").remove()
    $('.mouse-info').remove()
    $('.battle').dialog('close')
    battle = false
    $('#tomDeck').show()
    $('.tomHealth').text('Health: '+tom.hp)
    $('#tomName').text(tom.name)
    tom.poison=0
    mouse.mana=0
}