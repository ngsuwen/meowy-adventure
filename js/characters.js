class Character{
    constructor(char, name_,hp,mana,deck){
        this.char=char;
        this.name=name_;
        this.hp=hp;
        this.mana=mana;
        this.deck=deck;
        this.hand=[]
    }
    draw(num){      
        for (let i=0;i<num;i++){
            if (this.deck.length>0 && this.hand.length<5){
                this.hand.push(this.deck[0])
                this.deck.splice(0, 1)
                $(`.${this.char}Deck`).text('Deck: '+this.deck)
                $(`.${this.char}Hand`).text('Hand: '+this.hand)
            }
        }
    }
    heal(num){
        this.hp += num
        $(`.${this.char}Health`).text('Health: '+this.hp)
    }
    takeDmg(num){
        this.hp-=num
        $(`.${this.char}Health`).text('Health: '+this.hp)
        if (this.hp<=0){
            if (this.char == 'tom'){
                alert('You Died')
                battle=false
            } else {
                $('.mouse-info').empty()
                $('.mouse').dialog('close')
                // let tom choose from 3 cards to add
                discover()
                $('.discover').dialog('open')
            }
        }
    }
}

class Tom extends Character{
    // shuffle deck before game starts
    shuffleDeck() {
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
            $('.tomDeck').text('Deck: '+tom.deck)
        }
    }
    // addCards only applicable to tom
    addCard(sn){
        // add card to deck
        tom.deck.push(sn)
        // update UI
        $('.tomDeck').text('Deck: '+tom.deck)
    }
    removeCard(sn){
        // add card to deck
        let indexFound = tom.deck.indexOf(sn)
        tom.deck.splice(indexFound,1)
        // update UI
        $('.tomDeck').text('Deck: '+tom.deck)
    }
    action(sn){
        // add card effect here
        // place holder effect
        alert('play card')
        let index = this.hand.indexOf(sn)
        this.hand.splice(index,1)
        $(`.${this.char}Hand`).text('Hand: '+ this.hand)
    }
    
}

const tom = new Tom('tom','tom',50,3,[0, 1, 2, 2, 3, 3])
const mouse = new Character('mouse','mouse',20,3,[1])

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
}

$(()=>{

    // hide mouse info until called
    $('.mouse').dialog({autoOpen: false, draggable: false, position: { my: "center", at: "center", of: '.map' }})

    // tom's profile display
    $('.tomDeck').text('Deck: '+tom.deck)
    $('.tomHealth').text('Health: '+tom.hp)
    $('.tomMana').text('Mana: '+tom.mana)
    $('.tomHand').text('Hand: '+tom.hand)
    
    // test buttons onclick functions
    $('.shuffle').click(function(){tom.shuffleDeck()})
    $('.drawCard').click(function(){tom.draw(2)})
    $('.takeDmg').click(function(){tom.takeDmg(2)})
    $('.heal').click(function(){tom.heal(2)})
    $('.receiveLethal').click(function(){tom.takeDmg(50)})
    $('.dealLethal').click(function(){mouse.takeDmg(20)})
    $('.mouseTakesDmg').click(function(){mouse.takeDmg(2)})
    // add + set add function on click to all cards, collectable cards start from 4, total 10 different cards that can be collected
    for (i=4;i<14;i++){
        let addSn = 'a'+i
        let sn = i
        $('.discover').append($('<button>').text(`Card ${sn}`).attr('id', addSn))
        $(`#${addSn}`).click(function(){
            tom.addCard(sn)
            $("[id^=a]").css({'display': 'none'})
            $('.discover').dialog('close')
            remove()
            $('.remove').dialog('open')
        })
        $(`#${addSn}`).css({'display': 'none'})
    }
    // set skip-add button
    $('#skip-add').click(function(){
        $("[id^=a]").css({'display': 'none'})
        $('.discover').dialog('close')
        remove()
        $('.remove').dialog('open')
    })
})