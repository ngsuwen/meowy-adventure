const $box = $("<img class='box' src='https://opengameart.org/sites/default/files/Treasure%20Chest%20%28Open-Close%29%20GIF.gif'>")

function specialDiscover(){
    let cards=[11, 12, 13]
    for (let i of cards) {
        $(`#a${i}`).css({'display':'block'})
    }
}

const checkBox=()=>{
    if ($(`.${currentPoint}`).find('.box').length>0){
        $(`.${currentPoint}`).children().remove()
        $(`.${currentPoint}`).append($cat)
        let randomRow = Math.floor(Math.random()*10+1)
        let randomCol = Math.floor(Math.random()*10+1)
        $(`.${randomRow}-${randomCol}`).append($box)
        specialDiscover()
        $('.discover').dialog('open')
    } else {
        $(`.${currentPoint}`).append($cat)
        // randomly bumps into mouse
        bumpMouse()
    }
}

$(()=>{ 
    $('.3-5').append($box)
})