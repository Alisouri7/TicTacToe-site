//elements
let $ = document
let crossOne = $.querySelector('#crossone')
let crossTwo = $.querySelector('#crosstwo')
let crossThree = $.querySelector('#crossthree')
let circleOne = $.querySelector('#circleone')
let circleTwo = $.querySelector('#circletwo')
let circleThree = $.querySelector('#circlethree')
let divOne = $.getElementById('0')
let divTwo = $.getElementById('1')
let divThree = $.getElementById('2')
let divFour = $.getElementById('3')
let divFive = $.getElementById('4')
let divSix = $.getElementById('5')
let divSeven = $.getElementById('6')
let divEight = $.getElementById('7')
let divNine = $.getElementById('8')
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
