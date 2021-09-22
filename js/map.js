const makeGridRow=(pointer)=>{
    $('body').append($('<div>').addClass(`row${pointer}`))
    $(`.row${pointer}`).css({'display': 'flex'})
}

const $cat = $("<img class='cat' src='https://thumbs.gfycat.com/BouncyFavorableLamb.webp'>")

function generateGrid(num) {
    for (let i=1;i<=num;i++){
        makeGridRow(i)
        let j=1
        while (j<=num) {
            let gridClass = `${i}-${j}`
            $(`.row${i}`).append($('<div>').addClass(gridClass))
            $(`.${gridClass}`).css({'width':'50px', 'height':'50px', 'display':'inline-block', 'border':'1px solid black'})
            $('.map').append($(`.row${i}`))
            j++
        }
    }
}

let currentPoint='1-5'
let battle = false
function move(str) {
    if (!battle){
        const arr=currentPoint.split('-')
        if (str=='up'){
            if (arr[0]==1){
                return
            }
            arr[0]=Number(arr[0])-1
            currentPoint=arr.join('-')
            $(`.${currentPoint}`).append($cat)
            checkBox()
        }
        if (str=='down'){
            if (arr[0]==10){
                return
            }
            arr[0]=Number(arr[0])+1
            currentPoint=arr.join('-')
            checkBox()

        }
        if (str=='left'){
            if (arr[1]==1){
                return
            }
            arr[1]=Number(arr[1])-1
            currentPoint=arr.join('-')
            $(`.${currentPoint}`).append($cat)
            checkBox()
        }
        if (str=='right'){
            if (arr[1]==10){
                return
            }
            arr[1]=Number(arr[1])+1
            currentPoint=arr.join('-')
            $(`.${currentPoint}`).append($cat)
            checkBox()
        }
    }
}

$(()=>{ 
    // generate grid map
    generateGrid(10)
    // cat starts at grid (1,1)
    $('.1-5').append($cat)
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
})