let container = document.querySelector("#container");
function createGrid(){
    for(let i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < 16; j++){
            const square = document.createElement('div');
            square.setAttribute('id', 'innerSquare');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
}
createGrid();