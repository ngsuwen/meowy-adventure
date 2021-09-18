const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<= 0.5){
        newMouse()
        battle=true
    }
}

const mouseAction = ()=>{
        const drawInterval = setInterval(()=>{
            if (mouse.hand.length <5){
                mouse.draw(1)
                console.log(mouse.hand)
            } else {
                console.log('pass')
                clearInterval(drawInterval)
                mousePlay()
            }
        }, 300)
    }

function mousePlay(){
    const playInterval = setInterval(()=>{
        if (mouse.hand.length >0){
            console.log(mouse.hand[mouse.hand.length-1])
            mouse.hand.pop()
        } else {
            clearInterval(playInterval)
        }
    }, 500)
}

mouseAction()