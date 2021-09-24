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
    sn: 0,
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
    sn: 1,
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
    sn: 2, 
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Apply 3 weak. Weakened characters will deal 50% less damage for X turns.'
  },
  {
    sn: 3, 
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.takeDmg(2)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        }
    },
    effect: 'Apply 3 poison. Poisoned characters will take X damage at the start of their turn. Poison count decrease by 1.'
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
    effect: 'Apply 3 curse. Cursed characters will heal 50% less for X turns.'
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
    },
    effect: 'Deal 4 damage, heal 3 health.'
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
    },
    effect: 'Deal 4 damage, increase mana by 1 for this turn.'
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
    },
    effect: 'Increase mana by 2 for this turn.'
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
    },
    effect: 'Deal 5 damange, shuffle this to the top of the deck.'
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
    },
    effect: 'Take 2 damage. Deal 12 damage.'
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
    },
    effect: 'Cast reflect. Characters with reflect will deal 50% of damage received back to enemy.'
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
    },
    effect: 'Deal 2 damange for every 5 health you have lost.'
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
    },
    effect: 'The next card you play will have doubled effect.'
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
    },
    effect: 'Heal 30 health. Remove this from the deck permanently.'
  }
]