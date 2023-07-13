const DEFAULT_SIZE = 16;
const gridNumber = document.getElementById('sizeValue');
const gridNumberSlider = document.getElementById('gridSize')

gridNumberSlider.onmousemove = (e) => updateSize(e.target.value);
gridNumberSlider.onchange = (e) => changeSize(e.target.value);

function setCurrentSize (newSize) {currentSize = newSize;};
function updateSize (value) {gridNumber.innerHTML = `${value} x ${value}`};


function changeSize (value) {
    setCurrentSize (value);
    createBoard(value);
}

function createBoard (size) {   
    let board = document.querySelector('#etchGrid');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        board.insertAdjacentElement('beforeend', div);
    }
} 

