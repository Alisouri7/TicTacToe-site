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
    selectedClassRemover()
    crossOne.classList.add('selected')
})
crossTwo.addEventListener('click', () => {
    selectedClassRemover()
    crossTwo.classList.add('selected')
})
crossThree.addEventListener('click', () => {
    selectedClassRemover()
    crossThree.classList.add('selected')
})
circleOne.addEventListener('click', () => {
    selectedClassRemover()
    circleOne.classList.add('selected')
})
circleTwo.addEventListener('click', () => {
    selectedClassRemover()
    circleTwo.classList.add('selected')
})
circleThree.addEventListener('click', () => {
    selectedClassRemover()
    circleThree.classList.add('selected')
})

function selectedClassRemover() {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
}
window.addEventListener('dblclick', selectedClassRemover)
