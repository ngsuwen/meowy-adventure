class Character{
    constructor(char, name_,hp,mana,deck){
        this.char=char;
        this.name=name_;
        this.hp=hp;
        this.mana=mana;
        this.deck=deck;
        this.hand=[];
        this.discard=[];
        this.weak=0;
        this.poison=0;
        this.curse=0;
        this.reflect=0;
        this.double=false;
    }
    draw(num){      
        for (let i=0;i<num;i++){
            if (this.deck.length>0 && this.hand.length<4){
                this.hand.push(this.deck[0])
                this.deck.splice(0, 1)
                // $(`#${this.char}Deck`).text('Deck: '+this.deck)
                // $(`.${this.char}Hand`).text('Hand: '+this.hand)
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
                // $(`#${this.char}Deck`).text('Deck: '+this.deck)
                // $(`.${this.char}Hand`).text('Hand: '+this.hand)
                if (this.char=='tom'){
                    let sn = tom.hand[tom.hand.length-1]
                    this.playButton(sn)
                }
            }
        }
    }
    newTurn(){
        if (this.weak>0){
            this.weak-=1
            if (this.weak==0){
                $(`.weak${this.char}`).remove()
            } else {
                $(`.weak${this.char}`).text(this.weak)
            }
        }
        if (this.curse>0){
            this.curse-=1
            if (this.curse==0){
                $(`.curse${this.char}`).remove()
            } else {
                $(`.curse${this.char}`).text(this.curse)
            }
        }
        this.double=false
        this.mana = 3    
        $(`.${this.char}Mana`).text('Mana: '+this.mana)
        this.hand.forEach(element=>this.deck.push(element))
        this.hand = []
        this.discard.forEach(element=>this.deck.push(element))
        this.discard = []
        this.shuffleDeck()
        // $(`#${this.char}Deck`).text('Deck: '+this.deck)
        // $(`.${this.char}Hand`).text('Hand: '+this.hand)
    }
    heal(num){
        this.hp += num
        $(`.${this.char}Health`).text('Health: '+this.hp)
        $(`.${this.char}Health`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    }
    takeDmg(num){
        this.hp-=num
        $(`.${this.char}Health`).text('Health: '+this.hp)
        $(`.${this.char}Health`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
        if (this.hp<=0){
            if (this.char == 'tom'){
                $.magnificPopup.open({
                    items:{
                        src: '#gameover',
                        type:'inline'}
                    })
                newgame()
            } else if (this.name == 'Jerry Mouse'){
                if(!alert('You Win!')){window.location.reload()}
            } else {
                tom.newTurn()
                $("[id^='p']").remove()
                $('.mouse-info').remove()
                $('.battle').dialog('close')
                battle = false
                $('#tomDeck').show()
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
        }
    }
}

class Tom extends Character{
    // addCards only applicable to tom
    addCard(sn){
        // add card to deck
        tom.deck.push(sn)
        // update UI
        addToDeck(sn)
    }
    removeCard(sn){
        // add card to deck
        let indexFound = tom.deck.indexOf(sn)
        tom.deck.splice(indexFound,1)
        // update UI
        removeFromDeck(sn)
    }
    // set on click play to cards
    playButton(sn){
        let playSn = 'p'+sn
        let $button = $('<img>').attr('src',`./src/image/${sn}.png`)
        $button.attr('href','#card-window')
        $button.attr('id', playSn)
        $button.addClass('open-gallery-link')
        $('.play').prepend($button)
        $button.on('click', function(event){
            $(event.currentTarget).remove()
            cardList[sn].play(tom, mouse)
        })
    }
}