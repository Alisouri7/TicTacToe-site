//elements
let $ = document
let shapes = $.querySelectorAll('img')

let crossOne = $.querySelector('#crossone')
let crossTwo = $.querySelector('#crosstwo')
let crossThree = $.querySelector('#crossthree')
let crossFour = $.querySelector('#crossfour')
let crossFive = $.querySelector('#crossfive')

let circleOne = $.querySelector('#circleone')
let circleTwo = $.querySelector('#circletwo')
let circleThree = $.querySelector('#circlethree')
let circleFour = $.querySelector('#circlefour')
let circleFive = $.querySelector('#circlefive')

let slots = $.querySelectorAll('.slot')

let divOne = $.getElementById('0')
let divTwo = $.getElementById('1')
let divThree = $.getElementById('2')
let divFour = $.getElementById('3')
let divFive = $.getElementById('4')
let divSix = $.getElementById('5')
let divSeven = $.getElementById('6')
let divEight = $.getElementById('7')
let divNine = $.getElementById('8')

let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]
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
crossFour.addEventListener('click', () => {
    selectedClassRemover()
    crossFour.classList.add('selected')
})
crossFive.addEventListener('click', () => {
    selectedClassRemover()
    crossFive.classList.add('selected')
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
circleFour.addEventListener('click', () => {
    selectedClassRemover()
    circleFour.classList.add('selected')
})
circleFive.addEventListener('click', () => {
    selectedClassRemover()
    circleFive.classList.add('selected')
})

divOne.addEventListener('click', () => {
    appendImgToSlot(divOne)
    selectedClassRemover()
})
divTwo.addEventListener('click', () => {
    appendImgToSlot(divTwo)
    selectedClassRemover()
})
divThree.addEventListener('click', () => {
    appendImgToSlot(divThree)
    selectedClassRemover()
})
divFour.addEventListener('click', () => {
    appendImgToSlot(divFour)
    selectedClassRemover()
})
divFive.addEventListener('click', () => {
    appendImgToSlot(divFive)
    selectedClassRemover()
})
divSix.addEventListener('click', () => {
    appendImgToSlot(divSix)
    selectedClassRemover()
})
divSeven.addEventListener('click', () => {
    appendImgToSlot(divSeven)
    selectedClassRemover()
})
divEight.addEventListener('click', () => {
    appendImgToSlot(divEight)
    selectedClassRemover()
})
divNine.addEventListener('click', () => {
    appendImgToSlot(divNine)
    selectedClassRemover()
})

function appendImgToSlot(box) {
    shapes.forEach((shape) => {
        if (shape.className === 'selected') {
            shape.classList.add('added')
            box.append(shape)
            addDetailsToBoard(box, shape)
        }
    })

}

function addDetailsToBoard (box, shape) {
    let row = box.getAttribute('row')
    let column = box.getAttribute('column')
    let shapeType = shape.getAttribute('alt')
    board[row][column] = shapeType
}

function selectedClassRemover() {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
}
window.addEventListener('dblclick', selectedClassRemover)
