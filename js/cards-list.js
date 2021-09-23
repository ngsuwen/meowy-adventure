// combat cards: attack and defense
// magic cards: buffs, debuffs, heal, special effect
// play function: remove from hand, effect

function cardStandard(player, sn){
  let index = player.hand.indexOf(sn)
  player.discard.push(player.hand[index])
  player.hand.splice(index,1)
  player.draw(1)
  player.mana-=1
  $(`.${player.char}Mana`).text('Mana: '+player.mana)
}

const cardList = [{
    sn: 0, // basic combat card
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(6)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Deal 6 damage'
  },
  {
    sn: 1, // basic combat card
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        player.heal(5)
        $(`.${player.char}Health`).text('Health: '+player.hp)
      }
    },
    effect: 'Heal 5 health'
  },
  {
    sn: 2, // basic magic card
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Apply 3 weak'
  },
  {
    sn: 3, // basic magic card
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Apply 3 poison'
  },
  {
    sn: 4,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Apply 3 weak'
  },
  {
    sn: 5,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 6,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 7,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 8,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 9,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 10,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 11,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 12,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  },
  {
    sn: 13,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    }
  }
]