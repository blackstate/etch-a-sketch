const container = document.querySelector('div.container');
const size = 475;
const resetLink = document.querySelector('p');
const init = 16;
const colored = "#81d8d0"

function createGrid(grid) {
    
    let squareSize = ((size) / (grid)).toFixed(4);
    for (i = 0; i < grid; i++) {
        let gridRow = document.createElement('div')
        gridRow.classList.add('row');
    
        for (k=0; k< grid; k++) {
            
            let square = document.createElement('div');
    
            square.classList.add('square');
            square.style.height = `${squareSize}px`;
            square.style.width = `${squareSize}px`;
    
            square.onmouseover = function() {
                square.style.backgroundColor = colored;
            }
    
            gridRow.appendChild(square);
            container.appendChild(gridRow);
    
        }
    }
}

function resetGrid() {

    container.innerHTML = "";

}
function isNumber(value) {

    var numberPattern = /^[0-9]+$/; 
    return numberPattern.test(value);

}

resetLink.onclick = function() {

    let input;

    do {
        input = prompt("Enter grid size: ");
    } while (!isNumber(input));

    resetGrid();
    createGrid(input);
}

createGrid(init);