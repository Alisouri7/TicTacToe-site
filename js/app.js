//elements
let $ = document
let crossOne = $.querySelector('.crossone')
let crossTwo = $.querySelector('.crosstwo')
let crossThree = $.querySelector('.crossthree')
let circleOne = $.querySelector('.circleone')
let circleTwo = $.querySelector('.circletwo')
let circleThree = $.querySelector('.circlethree')
let divOne = $.querySelector('#0')
let divTwo = $.querySelector('#1')
let divThree = $.querySelector('#2')
let divFour = $.querySelector('#3')
let divFive = $.querySelector('#4')
let divSix = $.querySelector('#5')
let divSeven = $.querySelector('#6')
let divEight = $.querySelector('#7')
let divNine = $.querySelector('#8')
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