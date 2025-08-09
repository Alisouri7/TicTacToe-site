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
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
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
            setTimeout(() => {
                addDetailsToBoard(box, shape)
            },5)
        }
    })
}

function addDetailsToBoard(box, shape) {
    let row = box.getAttribute('row')
    let column = box.getAttribute('column')
    let shapeType = shape.getAttribute('alt')
    board[row][column] = shapeType
    ticTacToeWinner(shapeType)
}

function checkRow(rowArr, shapeType) {
    for (var i = 0; i < 3; i++) {
        if (rowArr[i] !== shapeType) {
            return false
        }
    }
    return true
}

function checkColumn(columnArr, shapeType) {
    for (var i = 0; i < 3; i++) {
        if (board[i][columnArr] !== shapeType) {
            return false
        }
    }
    return true
}

function ticTacToeWinner(shapeType) {
    let rowWin = checkRow(board[0], shapeType)
        || checkRow(board[1], shapeType)
        || checkRow(board[2], shapeType);

    let columnWin = checkColumn(0, shapeType)
        || checkColumn(1, shapeType)
        || checkColumn(2, shapeType);

    let diagonalWinLeftToRight = (board[0][0] === shapeType
        && board[1][1] === shapeType
        && board[2][2] === shapeType);
    let diagonalWinRightToLeft = (board[0][2] === shapeType
        && board[1][1] === shapeType
        && board[2][0] === shapeType);

    if (rowWin || columnWin || diagonalWinLeftToRight || diagonalWinRightToLeft) {
        alert('Winner is: ' + shapeType)
        history.go(0)
    }
}

function selectedClassRemover() {
    shapes.forEach((item) => {
        item.classList.remove('selected')
    })
}

window.addEventListener('dblclick', selectedClassRemover)
