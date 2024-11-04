const container = document.querySelector(".container")

let gridNum = 16

function createRows(num) {
    const row = document.createElement('row')
    row.classList.add('row')
    for (let i = 0; i < num; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        row.appendChild(square)
    }
    container.appendChild(row)
}

createRows(10)




// get amount of rows
// for loop to create divs for amount of rows
// then you can add divs to each row

// flexbot to make them fill out the space evenly