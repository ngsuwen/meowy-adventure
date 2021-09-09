class Character{
    constructor(name_,hp,mana,deck){
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
                $(`.${this.name}Deck`).text('Deck: '+this.deck)
                $(`.${this.name}Hand`).text('Hand: '+this.hand)
            }
        }
    }
    heal(num){
        this.hp += num
        $(`.${this.name}Health`).text('Health: '+this.hp)
    }
    takeDmg(num){
        this.hp-=num
        $(`.${this.name}Health`).text('Health: '+this.hp)
        if (this.hp<=0){
            alert('You Died')
        }
    }
    action(sn){
        // add card effect here
    }
}

// shuffle deck before game starts
function shuffleDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        $('.tomDeck').text('Deck: '+tom.deck)
    }
}

const tom = new Character('tom',50,2,[1000, 1001, 1002, 1003, 1003, 1000])

// addCards only applicable to tom
function addCards(sn){
    // add card to deck
    tom.deck.push(sn)
    // update UI
    $('.tomDeck').text('Deck: '+tom.deck)
}

$(()=>{
    $('.tomDeck').text('Deck: '+tom.deck)
    $('.tomHealth').text('Health: '+tom.hp)
    $('.tomMana').text('Mana: '+tom.mana)
    $('.tomHand').text('Hand: '+tom.hand)
    
    // test buttons onclick functions
    $('.shuffle').click(function(){shuffleDeck(tom.deck)})
    $('.drawCard').click(function(){tom.draw(2)})
    $('.takeDmg').click(function(){tom.takeDmg(2)})
    $('.heal').click(function(){tom.heal(2)})
    $('.receiveLethal').click(function(){tom.takeDmg(50)})

    // set add function on click to all cards
    for (i=4;i<14;i++){
        let addSn = 'a100'+i
        let sn = '100'+i
        $(`.${addSn}`).click(function(){addCards(sn)})
    }
})