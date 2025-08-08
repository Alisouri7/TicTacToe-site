//elements
let $ = document
let crossOne = $.querySelector('.crossone')
let crossTwo = $.querySelector('.crosstwo')
let crossThree = $.querySelector('.crossthree')
let circleOne = $.querySelector('.circleone')
let circleTwo = $.querySelector('.circletwo')
let circleThree = $.querySelector('.circlethree')
////////////////events
crossOne.addEventListener('click', () => {
    crossOne.classList.toggle('selected')
})
crossTwo.addEventListener('click', () => {
    crossTwo.classList.toggle('selected')
})
crossThree.addEventListener('click', () => {
    crossThree.classList.toggle('selected')
})
circleOne.addEventListener('click', () => {
    circleOne.classList.toggle('selected')
})
circleTwo.addEventListener('click', () => {
    circleTwo.classList.toggle('selected')
})
circleThree.addEventListener('click', () => {
    circleThree.classList.toggle('selected')
})