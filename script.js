const DEFAULT_SIZE = 16;
const gridNumber = document.getElementById('sizeValue');
const gridSlider = document.getElementById('gridSize')
const clearButton = document.getElementById('clear');
const rainbowButton = document.getElementById('rainbow');

gridSlider.onmousemove = (e) => updateSize(e.target.value);
gridSlider.onchange = (e) => changeSize(e.target.value);
clearButton.onclick = () => clearGrid();
rainbowButton.onclick = () => rainbowColor();

function setCurrentSize (newSize) {currentSize = newSize;};
function updateSize (value) {gridNumber.innerHTML = `${value} x ${value}`};
function clearGrid () {
    let squares = document.querySelectorAll('div.square');
    squares.forEach(box => {
        box.style.backgroundColor = 'white';
    })
}

function changeSize (value) {
    setCurrentSize (value);
    createBoard(value);
    clearGrid();
} 

function createBoard (size) {   
    let board = document.querySelector('#etchGrid');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size*size;
    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', function () {
            div.style.backgroundColor = 'black'
        })
        board.insertAdjacentElement('beforeend', div);
    }
    clearGrid();
}

document.addEventListener('DOMContentLoaded', function () {createBoard(gridSlider.value)});
