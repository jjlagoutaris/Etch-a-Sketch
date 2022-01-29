let gridSize = 16;
let randomColor = false;
let currentColor = '#000000';
let container = document.querySelector("#container");


function addButtonInput(){
    let clearBtn = document.querySelector('.clear');
    let gridSizeBtn = document.querySelector('.size');
    let colorSelector = document.querySelector('#colorpicker');
    let randomBtn = document.querySelector('.randomized');
    clearBtn.addEventListener('click', clearGrid);
    gridSizeBtn.addEventListener('click', chooseGridSize);
    colorSelector.addEventListener('input', changeColor);
    randomBtn.addEventListener('click', randomize);
}

function createGrid(size){
    for(let i = 0; i < size; i++){
        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < size; j++){
            const square = document.createElement('div');
            square.className = 'square';
            square.style.width = `${958 / parseInt(size)}px`;
            square.style.height = `${498 / parseInt(size)}px`;
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

function changeColor(){
    let chosenColor = document.getElementById('colorpicker').value;
    randomColor = false;
    currentColor = chosenColor;
    addListeners();
}

function randomize(){
    randomColor = true;
    addListeners();
}

function addListeners(){
    let squares = document.querySelectorAll('.square');
    if (randomColor === true){
        squares.forEach(function(e){
            e.addEventListener('mouseover', () => {
                randNum = Math.random() * 255;
                randNum2 = Math.random() * 255;
                randNum3 = Math.random() * 255;
                e.style.backgroundColor = `rgb(${randNum}, ${randNum2}, ${randNum3})`;
            });
        });
    }
    else{
        squares.forEach(function(e){
            e.addEventListener('mouseover', () => {
                e.style.backgroundColor = currentColor;
            });
        });
    } 
}

addButtonInput();
createGrid(gridSize);