let gridSize = 16;
let container = document.querySelector("#container");


function addButtonInput(){
    let clearBtn = document.querySelector('.clear');
    let gridSizeBtn = document.querySelector('.size');
    clearBtn.addEventListener('click', clearGrid);
    gridSizeBtn.addEventListener('click', chooseGridSize);
}

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.className = 'square';
            let width = 958 / parseInt(size);
            square.style.width = `${width}px`;
            let height = 498 / parseInt(size);
            square.style.height = `${height}px`;
            row.appendChild(square);
        }
    }
    addListeners();
}

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSize);
}

function chooseGridSize(){
    let chosenGridSize = +prompt('Enter grid size (1-100): ');
    chosenGridSize = Math.abs(chosenGridSize);
    if (100 >= (chosenGridSize) >= 1){
        gridSize = chosenGridSize;
        clearGrid();
    }
    else{
        chooseGridSize();
    }
}

function addListeners(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(function(e){
        e.addEventListener('mouseover', () => {
            randNum = Math.random() * 255;
            randNum2 = Math.random() * 255;
            randNum3 = Math.random() * 255;
            e.style.backgroundColor = `rgb(${randNum}, ${randNum2}, ${randNum3})`;
        });
    });
}

addButtonInput();
createGrid(gridSize);