let gridContainer = document.querySelector('.container');
createGrid(16);

function createGrid(size) {
  gridContainer.innerHTML = '';
  let squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.style.width = squareSize + 'px';
    gridSquare.style.height = squareSize + 'px';
    gridContainer.append(gridSquare);
  }
}

let addSquaresBtn = document.querySelector('#squares')
addSquaresBtn.addEventListener('click', () => {
  const gridSize = +prompt('Pick your grid size:')
  if ( gridSize < 1 || gridSize > 100) return alert('error, wayyy overboard')
  createGrid(gridSize)
})

gridContainer.addEventListener('mouseover', (event) => { 
  if (isErasing) {
    event.target.style.backgroundColor = 'white';
  } else if (isRandomizing) {
    event.target.style.backgroundColor = getRandomColor();
  } else {
  event.target.style.backgroundColor = currentColor
  }
})

let currentColor = '#800000';
let colorInput = document.querySelector('input')
colorInput.addEventListener('input', (event) => {
  currentColor = event.target.value;
  event.target.style.backgroundColor = currentColor;
})

let isErasing = false;
let eraseBtn = document.querySelector('#eraser');
eraseBtn.addEventListener('click', () => {
  isErasing = !isErasing;
})

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square =>  square.style.backgroundColor = 'white');
})

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let isRandomizing = false

let rgbBtn = document.querySelector('#rgb')
rgbBtn.addEventListener('click', () => {
  isRandomizing = !isRandomizing;
})