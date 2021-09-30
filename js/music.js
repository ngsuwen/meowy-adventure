// bg music
var bgMusic = new Audio()
bgMusic.src = "./src/music/bg-music.mp3"
bgMusic.autoplay = false
bgMusic.loop = true
// general click
var softClick = new Audio()
softClick.src = "./src/music/soft-click.wav"
softClick.autoplay = false
// card description
var interfaceClick = new Audio()
interfaceClick.src = "./src/music/interface-click.wav"
interfaceClick.autoplay = false
// start game
var startBattle = new Audio()
startBattle.src = "./src/music/kitty-meow.wav"
startBattle.autoplay = true
// game over
var gameover = new Audio()
gameover.src = "./src/music/gameover.wav"
gameover.autoplay = false
// found box
var foundBox = new Audio()
foundBox.src = "./src/music/treasure.wav"
foundBox.autoplay = false
// start battle
var angryCat = new Audio()
angryCat.src = "./src/music/kitty-angry-meow.wav"
angryCat.autoplay = false
// start battle
var bossMusic = new Audio()
bossMusic.src = "./src/music/boss-mouse.mp3"
bossMusic.autoplay = false
bossMusic.loop = true
// mouse dead
var mouseMusic = new Audio()
mouseMusic.src = "./src/music/mouse-dead.wav"
mouseMusic.autoplay = false
$(()=>{
    $('body').mousedown(function(){softClick.play()})
    $('.music-control-off').click(function(){
        bgMusic.pause()
        bossMusic.pause()
        $(this).toggleClass('music-control-on')
    })
    $(document).on('click','.music-control-on',function(){
        if (battle && mouse.name=='Jerry Mouse') {
            bossMusic.play()
        } else {
            bgMusic.play()
        }
    })
})