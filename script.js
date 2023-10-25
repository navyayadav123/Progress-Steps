const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circle = document.querySelectorAll('.circle')

let currentActive = 1

// its work for next btn

next.addEventListener('click',() =>{
    currentActive++

    // set boundaries
    // circle.length define the no of circle

    if(currentActive>circle.length){
        currentActive = circle.length
    }
    update()

})
// and this is for prev btn
prev.addEventListener('click',() =>{
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }

    update()

})

// active the circle
function update(){
    circle.forEach((circle,idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    // active.length define the no of circle are active

    progress.style.width = (actives.length-1)/(circle.length-1)*100 +'%'

    if(currentActive===1){
        prev.disabled = true
    } else if(currentActive===circle.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}


