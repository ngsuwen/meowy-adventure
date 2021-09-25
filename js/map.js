const makeGridRow=(pointer)=>{
    $('body').append($('<div>').addClass(`row${pointer}`))
    $(`.row${pointer}`).css({'display': 'flex'})
}

const $cat = $('<div>').addClass('catright').attr('id', 'cat')

function generateGrid(num) {
    for (let i=1;i<=num;i++){
        makeGridRow(i)
        let j=1
        while (j<=num) {
            let gridClass = `${i}-${j}`
            $(`.row${i}`).append($('<div>').addClass(gridClass))
            $(`.${gridClass}`).css({'width':'50px', 'height':'50px', 'display':'inline-block'})
            $('.map').append($(`.row${i}`))
            j++
        }
    }
}

let currentPoint='3-4'
let battle = false
function move(str) {
    if (!battle){
        const arr=currentPoint.split('-')
        if (str=='up'){
            $('#cat').attr('class','catup')
            if (arr[0]==3){
                return
            }
            arr[0]=Number(arr[0])-1
            let currentPointTemp=arr.join('-')
            if ($(`.${currentPointTemp}`).find('.obstacle').length>0) {
                return
            } else {
                $(`.${currentPointTemp}`).append($cat)
                currentPoint = currentPointTemp
                checkBox()
            }
        }
        if (str=='down'){
            $('#cat').attr('class','catdown')
            if (arr[0]==9){
                return
            }
            arr[0]=Number(arr[0])+1
            let currentPointTemp=arr.join('-')
            if ($(`.${currentPointTemp}`).find('.obstacle').length>0) {
                return
            } else {
                $(`.${currentPointTemp}`).append($cat)
                currentPoint = currentPointTemp
                checkBox()
            }
        }
        if (str=='left'){
            $('#cat').attr('class','catleft')
            if (arr[1]==1){
                return
            }
            arr[1]=Number(arr[1])-1
            let currentPointTemp=arr.join('-')
            if ($(`.${currentPointTemp}`).find('.obstacle').length>0) {
                return
            } else {
                $(`.${currentPointTemp}`).append($cat)
                currentPoint = currentPointTemp
                checkBox()
            }
        }
        if (str=='right'){
            $('#cat').attr('class','catright')
            if (arr[1]==10){
                return
            }
            arr[1]=Number(arr[1])+1
            let currentPointTemp=arr.join('-')
            if ($(`.${currentPointTemp}`).find('.obstacle').length>0) {
                return
            } else {
                $(`.${currentPointTemp}`).append($cat)
                currentPoint = currentPointTemp
                checkBox()
            }
        }
    }
}

$(()=>{ 
    // generate grid map
    generateGrid(10)
    // cat starts at grid (1,1)
    $('.3-4').append($cat)
    // cat movement (buttons)
    $('.up').click(function(){move('up')})
    $('.down').click(function(){move('down')})
    $('.left').click(function(){move('left')})
    $('.right').click(function(){move('right')})
    // cat movement (keyboard)
    $(document).on('keydown',function(event){
        if(event.which==68){move('right')}
        if(event.which==87){move('up')}
        if(event.which==83){move('down')}
        if(event.which==65){move('left')}
    })
    // obstacles
    const $obstacle=$('<div>').addClass('obstacle')
    for (let i=5;i<=10;i++){
        $obstacle.clone().appendTo($(`.3-${i}`))
    }
    $obstacle.clone().appendTo($('.5-6'))
    $obstacle.clone().appendTo($('.5-7'))
    $obstacle.clone().appendTo($('.6-6'))
    $obstacle.clone().appendTo($('.6-7'))
    $obstacle.clone().appendTo($('.3-1'))
    $obstacle.clone().appendTo($('.3-2'))
})