const container = document.querySelector('.container')
const startButton = document.querySelector('#startButton')

let gridNum;

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
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createColumns(num)

    const squares = document.querySelectorAll('.square')

    squares.forEach(function (square) {
        square.addEventListener('mouseover', (e) => {
            e.currentTarget.setAttribute('style', 'background: blue;')
        })
    })
}

function getValidNumber() {
    num = prompt('choose a number between 1 - 100')
    if (num === null) {
        return 'cancel'
    }
    num = Number(num)
    if (isNaN(num) || num < 1 || num > 100) {
        getValidNumber()
    }
    return num
}

startButton.addEventListener('click', () => {
    gridNum = getValidNumber()
    if (gridNum === 'cancel') return;
    createGrid(gridNum)
})
