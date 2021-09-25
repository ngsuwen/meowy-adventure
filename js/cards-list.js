function cardStandard(player, sn){
  let index = player.hand.indexOf(sn)
  player.discard.push(player.hand[index])
  player.hand.splice(index,1)
  player.draw(1)
  player.mana-=1
  $(`.${player.char}Mana`).text('Mana: '+player.mana)
}

function dmgCal(player, against, base){
  let multiplier = 1
  if (player.weak>0){
    multiplier /= 2
  }
  if (player.double) {
    multiplier *=2
    player.double=false
  }
  let damage = base*multiplier
  against.takeDmg(damage)
  if (against.reflect>0){
    player.takeDmg(Math.floor(damage/2))
  }
  console.log(`${player.char} deal ${damage} to ${against.char}`)
  console.log(`Weak: ${player.weak}`)
}

function healCal(player, base){
  let multiplier = 1
  if (player.curse>0){
    multiplier/2
  }
  if (player.double) {
    multiplier*=2
    player.double=false
  }
  let heal = base*multiplier
  player.heal(heal)
  console.log(`${player.char} heal ${heal} hp`)
  console.log(`Curse: ${player.curse}`)
}

const cardList = [{
    sn: 0,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        dmgCal(player, against, 6)
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
        healCal(player, 4)
        $(`.${player.char}Health`).text('Health: '+player.hp)
      }
    },
    effect: 'Heal 4 health'
  },
  {
    sn: 2, 
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.weak+=3
        console.log(`${player.name} casted weak on ${against.name}`)
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
        against.poison+=3
        console.log(`${player.name} casted poison on ${against.name}`)
        }
    },
    effect: 'Apply 3 poison. Poisoned characters will take X damage at the end of their turn. Poison count decrease by 1.'
  },
  {
    sn: 4,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        against.curse+=3
        console.log(`${player.name} casted curse on ${against.name}`)
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
        dmgCal(player, against, 4)
        healCal(player, 4)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        $(`.${player.char}Health`).text('Health: '+player.hp)
        }
    },
    effect: 'Deal 4 damage, heal 4 health.'
  },
  {
    sn: 6,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        dmgCal(player, against, 4)
        player.mana+=1
        $(`.${against.char}Health`).text('Health: '+against.hp)
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
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
        player.mana+=2
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
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
        dmgCal(player, against, 8)
        if (against.hp<=0){
          return
        }
        $(`.${against.char}Health`).text('Health: '+against.hp)
        let index = player.hand.indexOf(8)
        player.hand.splice(index,1)
        player.draw(1)
        player.deck.unshift(8)
        console.log(player.hand)
        console.log(player.discard)
        $(`#${player.char}Deck`).text(player.deck)
        player.mana-=1
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
        }
    },
    effect: 'Deal 8 damange, shuffle this to the top of the deck after drawing a card.'
  },
  {
    sn: 9,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        dmgCal(player, against, 12)
        if (player.double){
          player.takeDmg(4)
        } else {
          player.takeDmg(2)
        }
        $(`.${against.char}Health`).text('Health: '+against.hp)
        $(`.${player.char}Health`).text('Health: '+player.hp)
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
        player.reflect+=1
        console.log(`${player.name} casted reflect on himself`)
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
        let num = 2*(Math.floor((80-player.hp)/5))
        dmgCal(player, against, num)
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
        player.double=true
        }
    },
    effect: 'The next [heal] or [damage] card you play will have doubled effect.'
  },
  {
    sn: 13,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        healCal(player, 30)
        $(`.${against.char}Health`).text('Health: '+against.hp)
        let index = player.hand.indexOf(8)
        player.hand.splice(index,1)
        player.draw(1)
        player.mana-=1
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
        }
    },
    effect: 'Heal 30 health. Remove this from the deck permanently.'
  }
]