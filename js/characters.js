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
                $('.mouse').remove()
                battle=false
            }
        }
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
    addCards(sn){
        // add card to deck
        tom.deck.push(sn)
        // update UI
        $('.tomDeck').text('Deck: '+tom.deck)
    }
    
}

const tom = new Tom('tom','tom',50,2,[1000, 1001, 1002, 1003, 1003, 1000])
const mouse = new Character('mouse','mouse',20,2,[1000, 1001, 1002, 1003, 1003, 1000])

async function newMouse(){
    mouse.name = await getName()
    mouse.hp = 20
    mouse.mana = 2
    mouse.deck = [1000, 1001, 1002, 1003, 1003, 1000]
    const $h3 = $('<h3>').text(mouse.name + ' Profile')
    const $health = $('<div>').addClass('mouseHealth')
    $health.text('Health: '+mouse.hp)
    const $newMouseInfo = $('<div>').addClass('mouse')
    $newMouseInfo.append($h3)
    $newMouseInfo.append($health)
    $('body').append($newMouseInfo)
}

$(()=>{
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
    $('.action').click(function(){tom.action(1000)})
    $('.newMouse').click(function(){newMouse()})
    $('.mouseTakesDmg').click(function(){mouse.takeDmg(2)})
    
    // set add function on click to all cards
    for (i=4;i<14;i++){
        let addSn = 'a100'+i
        let sn = '100'+i
        $(`.${addSn}`).click(function(){tom.addCards(sn)})
    }
})