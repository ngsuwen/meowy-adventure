const makeGridRow=(pointer)=>{
    $('body').append($('<div>').addClass(`row${pointer}`))
    $(`.row${pointer}`).css({'height':'50px'})
}

function generateGrid(num) {
    for (let i=1;i<=num;i++){
        makeGridRow(i)
        let j=1
        while (j<=num) {
            let gridClass = `${i}-${j}`
            $(`.row${i}`).append($('<div>').addClass(gridClass))
            $(`.${gridClass}`).css({'width':'50px', 'height':'50px', 'display':'inline-block', 'border':'1px solid black'})
            j++
        }
    }
}

let currentPoint='2-1'

function move(str) {
    const arr=currentPoint.split('-')
    if (str=='up'){
        if (arr[0]==1){
            return
        }
        arr[0]=Number(arr[0])-1
        currentPoint=arr.join('-')
    }
    if (str=='down'){
        if (arr[0]==10){
            return
        }
        arr[0]=Number(arr[0])+1
        currentPoint=arr.join('-')
    }
    if (str=='left'){
        if (arr[1]==1){
            return
        }
        arr[1]=Number(arr[1])-1
        currentPoint=arr.join('-')
    }
    if (str=='right'){
        if (arr[1]==10){
            return
        }
        arr[1]=Number(arr[1])+1
        currentPoint=arr.join('-')
    }
}

$(()=>{
    
    // generate grid map
    generateGrid(10)
    // cat starts at grid (1,1)
    const $cat = $("<img class='cat' src='https://thumbs.gfycat.com/BouncyFavorableLamb.webp'>")
    $('.2-1').append($cat)
    $('.up').click(function(){
        move('up')
        $(`.${currentPoint}`).append($cat)
    })
    $('.down').click(function(){
        move('down')
        $(`.${currentPoint}`).append($cat)
    })
    $('.left').click(function(){
        move('left')
        $(`.${currentPoint}`).append($cat)
    })
    $('.right').click(function(){
        move('right')
        $(`.${currentPoint}`).append($cat)
    })
})