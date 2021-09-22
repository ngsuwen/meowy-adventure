class Character{
    constructor(char, name_,hp,mana,deck){
        this.char=char;
        this.name=name_;
        this.hp=hp;
        this.mana=mana;
        this.deck=deck;
        this.hand=[]
        this.discard=[]
    }
    draw(num){      
        for (let i=0;i<num;i++){
            if (this.deck.length>0 && this.hand.length<4){
                this.hand.push(this.deck[0])
                this.deck.splice(0, 1)
                $(`.${this.char}Deck`).text('Deck: '+this.deck)
                $(`.${this.char}Hand`).text('Hand: '+this.hand)
                if (this.char=='tom'){
                    let sn = tom.hand[tom.hand.length-1]
                    this.playButton(sn)
                }
            }
            if (this.deck.length<=0 && this.hand.length<4){
                this.discard.forEach(element=>this.deck.push(element))
                this.discard = []
                this.shuffleDeck()
                this.hand.push(this.deck[0])
                this.deck.splice(0, 1)
                $(`.${this.char}Deck`).text('Deck: '+this.deck)
                $(`.${this.char}Hand`).text('Hand: '+this.hand)
                if (this.char=='tom'){
                    let sn = tom.hand[tom.hand.length-1]
                    this.playButton(sn)
                }
            }
        }
    }
    newTurn(){
        this.mana = 3      
        $(`.${this.char}Mana`).text('Mana: '+this.mana)
        this.hand.forEach(element=>this.deck.push(element))
        this.hand = []
        this.discard.forEach(element=>this.deck.push(element))
        this.discard = []
        this.shuffleDeck()
        $(`.${this.char}Deck`).text('Deck: '+this.deck)
        $(`.${this.char}Hand`).text('Hand: '+this.hand)
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
                tom.newTurn()
                $(`[id^='p']`).remove()
                $('.mouse-info').empty()
                $('.battle').dialog('close')
                // let tom choose from 3 cards to add
                discover()
                $('.discover').dialog('open')
            }
        }
    }
    // shuffle deck before game starts
    shuffleDeck() {
        for (var i = this.deck.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
            $(`.${this.char}Deck`).text('Deck: '+this.deck)
        }
    }
}

class Tom extends Character{
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
    // set on click play to cards
    playButton(sn){
        let playSn = 'p'+sn
        let $button = $('<button>').text(`Card ${sn}`).attr('id', playSn)
        $('.play').append($button)
        $button.on('click', function(event){
            $(event.currentTarget).remove()
            cardList[sn].play(tom, mouse)
        })
    }
}