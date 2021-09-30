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
}

function healCal(player, base){
  let multiplier = 1
  if (player.curse>0){
    multiplier/=2
  }
  if (player.double) {
    multiplier*=2
    player.double=false
  }
  let heal = base*multiplier
  player.heal(heal)
}

const cardList = [{
    sn: 0,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        cardStandard(player, this.sn)
        dmgCal(player, against, 6)
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
        if (against.weak==0){
          const $weak=$('<div>').addClass(`weak${against.char}`).attr('title','Weak')
          $(`.${against.char}`).children().append($weak)
          $weak.text('3')
        } else {
          let num = Number($(`.weak${against.char}`).text())
          num += 3
          $(`.weak${against.char}`).text(num)
        }
        against.weak+=3
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
        if (against.poison==0){
          const $poison=$('<div>').addClass(`poison${against.char}`).attr('title','Poison')
          $(`.${against.char}`).children().append($poison)
          $poison.text('3')
        } else {
          let num = Number($(`.poison${against.char}`).text())
          num += 3
          $(`.poison${against.char}`).text(num)
        }
        against.poison+=3
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
        if (against.curse==0){
          const $curse=$('<div>').addClass(`curse${against.char}`).attr('title','Curse')
          $(`.${against.char}`).children().append($curse)
          $curse.text('3')
        } else {
          let num = Number($(`.curse${against.char}`).text())
          num += 3
          $(`.curse${against.char}`).text(num)
        }
        against.curse+=3
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
        player.mana+=1
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
        dmgCal(player, against, 4)
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
        if (player.reflect==0){
          const $reflect=$('<div>').addClass(`reflect${player.char}`).attr('title','Reflect')
          $reflect.text('1')
          $(`.${player.char}`).children().append($reflect)
        } else {
          let num = Number($(`.reflect${player.char}`).text())
          num += 1
          $(`.reflect${player.char}`).text(num)
        }
        player.reflect+=1
      }
    },
    effect: 'Cast reflect. Characters with reflect will deal 50% of damage received back to enemy.'
  },
  {
    sn: 11,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else if (80-player.hp>0) {
        cardStandard(player, this.sn)
        let num = 2*(Math.floor((80-player.hp)/5))
        dmgCal(player, against, num)
        } else {
          return
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
        let index = player.hand.indexOf(13)
        player.hand.splice(index,1)
        player.draw(1)
        player.mana-=1
        $(`.${player.char}Mana`).text('Mana: '+player.mana)
        }
        $($('#d13')[0]).remove()
        player.addCard(1)
    },
    effect: 'Heal 30 health. This card will be replaced by Heal permanently after use. Heal: Heal 4 health.'
  }
]