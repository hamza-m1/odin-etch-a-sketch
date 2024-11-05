const container = document.querySelector('.container')
const changeSizeButton = document.querySelector('#changeSizeButton')
const clearButton = document.querySelector('#clearButton')
const rainbowButton = document.querySelector('#rainbowButton')

const DEFAULT_SIZE = 32
const MIN_SIZE = 2
const MAX_SIZE = 100

let gridNum = DEFAULT_SIZE
let toggleRainbow = false

function createRows(num) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        row.appendChild(square)
    }
    container.appendChild(row)
}

function createColumns(num) {
    for (let i = 0; i < num; i++) {
        createRows(num)
    }
}

function createGrid(num) {
    container.innerHTML = ''
    createColumns(num)
    const squares = document.querySelectorAll('.square')
    if (toggleRainbow) {
        squares.forEach(function (square) {
            square.addEventListener('mouseover', (e) => {
                e.currentTarget.style.backgroundColor = randomRgbColor()
            })
        })
    } else {
        squares.forEach(function (square) {
            square.addEventListener('mouseover', (e) => {
                e.currentTarget.style.backgroundColor = 'black'
            })
        })
    }
}

function randomNum(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
    let r = randomNum(255);
    let g = randomNum(255);
    let b = randomNum(255);
    return `rgb(${r}, ${g}, ${b})`;
}


function getValidNumber() {
    num = prompt('choose a number between 2 - 100')
    if (num === null) {
        return 'cancel'
    }
    num = Number(num)
    if (isNaN(num) || num < MIN_SIZE || num > MAX_SIZE) {
        getValidNumber()
    }
    return num
}

changeSizeButton.addEventListener('click', () => {
    gridNum = getValidNumber()
    if (gridNum === 'cancel') return;
    createGrid(gridNum)
})

clearButton.addEventListener('click', () => {
    createGrid(gridNum)
})

rainbowButton.addEventListener('click', () => {
    if (!toggleRainbow) {
        toggleRainbow = true
        createGrid(gridNum)
    } else {
        toggleRainbow = false
        createGrid(gridNum)
    }
})

createGrid(gridNum)