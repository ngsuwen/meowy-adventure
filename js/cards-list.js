// combat cards: attack and defense
// magic cards: buffs, debuffs, heal, special effect
// play function: remove from hand, effect

const cardList = [{
    sn: 0,
    play: function(player, against) {
      against.takeDmg(2)
      player.draw(1)
      player.mana-=1
    }
  },
  {
    sn: 1,
    play: function(player, against) {
      if (player.mana==0){
        alert('no mana, please end turn')
      } else {
        against.takeDmg(2)
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
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
        player.draw(1)
        player.mana-=1
      }
    }
  }
]