//elements
let $ = document
let shapes = $.querySelectorAll('img')
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
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    crossOne.classList.add('selected')
})
crossTwo.addEventListener('click', () => {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    crossTwo.classList.add('selected')
})
crossThree.addEventListener('click', () => {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    crossThree.classList.add('selected')
})
circleOne.addEventListener('click', () => {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    circleOne.classList.add('selected')
})
circleTwo.addEventListener('click', () => {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    circleTwo.classList.add('selected')
})
circleThree.addEventListener('click', () => {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
    circleThree.classList.add('selected')
})
