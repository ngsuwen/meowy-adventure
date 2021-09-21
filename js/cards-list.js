// combat cards: attack and defense
// magic cards: buffs, debuffs, heal, special effect
// play function: remove from hand, effect

function cardStandard(player, sn){
  let index = player.hand.indexOf(sn)
  player.discard.push(player.hand[index])
  player.hand.splice(index,1)
  player.draw(1)
  player.mana-=1
}

const cardList = [{
    sn: 0,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 1,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 2,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 3,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 4,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 5,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 6,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 7,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 8,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 9,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 10,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 11,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 12,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  },
  {
    sn: 13,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
          against.takeDmg(2)
          cardStandard(player, this.sn)
        }
    }
  }
]