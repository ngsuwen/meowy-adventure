const bumpMouse=()=>{
    // randomly bumps into mouse
    random = Math.random()
    if (random<= 0.5){
        newMouse()
        battle=true
    }
}