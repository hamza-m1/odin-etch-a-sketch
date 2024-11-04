const container = document.querySelector(".container")

let gridNum = 16

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

createColumns(gridNum)

const squares = document.querySelectorAll('.square')

squares.forEach(function (square) {
    square.addEventListener('mouseover', (e) => {
        e.currentTarget.setAttribute('style', 'background: blue;')
    })
})