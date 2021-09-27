const $box = $('<div>').addClass('box')

const checkBox=()=>{
    if ($(`.${currentPoint}`).find('.box').length>0){
        $(`.${currentPoint}`).children().remove()
        $(`.${currentPoint}`).append($cat)
        let randomRow = Math.floor(Math.random()*6+3)
        let randomCol = Math.floor(Math.random()*9+1)
        while ($(`.${randomRow}-${randomCol}`).find('.obstacle').length>0) {
            randomRow = Math.floor(Math.random()*6+3)
            randomCol = Math.floor(Math.random()*9+1)
        }
        $(`.${randomRow}-${randomCol}`).append($box)
        discover()
        battle = true
        $('.discover').dialog('open')
    } else if ($(`.${currentPoint}`).find('#mousesprite').length>0){
        $(`.${currentPoint}`).children().remove()
        $(`.${currentPoint}`).append($cat)
        boss()
        battle=true
        $('#tomDeck').hide()
    } else {
        $(`.${currentPoint}`).append($cat)
        // randomly bumps into mouse
        bumpMouse()
    }
}

$(()=>{ 
    $('.5-3').append($box)
})