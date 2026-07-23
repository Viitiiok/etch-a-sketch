// ===== DOM References =====
const gridContainer = document.querySelector('.container');
const applyBtn = document.querySelector('#applyGrid');
const colorInput = document.querySelector('#colorPicker');
const eraseBtn = document.querySelector('#eraser');
const clearBtn = document.querySelector('#clear');
const rgbBtn = document.querySelector('#rgb');
const gridSlider = document.querySelector('#gridSlider');
const sizeDisplay = document.querySelector('#sizeDisplay');

// ===== State =====
let currentColor = '#800000';
let isErasing = false;
let isRandomizing = false;

// ===== Functions =====
function createGrid(size) {
  gridContainer.innerHTML = '';
  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.style.width = squareSize + 'px';
    gridSquare.style.height = squareSize + 'px';
    gridContainer.append(gridSquare);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function paintSquare(square) {
  if (isErasing) {
    square.style.backgroundColor = 'white';
  } else if (isRandomizing) {
    square.style.backgroundColor = getRandomColor();
  } else {
    square.style.backgroundColor = currentColor;
  }
}

// ===== Event Listeners =====
applyBtn.addEventListener('click', () => {
  const gridSize = +gridSlider.value;
  if (gridSize < 1 || gridSize > 100) {
    return alert('Error: Grid size must be between 1 and 100');
  }
  createGrid(gridSize);
});

gridContainer.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('grid-square')) {
    paintSquare(event.target);
  }
});

colorInput.addEventListener('input', (event) => {
  currentColor = event.target.value;
  event.target.style.backgroundColor = currentColor;
});

eraseBtn.addEventListener('click', () => {
  isErasing = !isErasing;
});

clearBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach((square) => {
    square.style.backgroundColor = 'white';
  });
});

rgbBtn.addEventListener('click', () => {
  isRandomizing = !isRandomizing;
});

gridSlider.addEventListener('input', (event) => {
  sizeDisplay.textContent = event.target.value;
});

// ===== Init =====
createGrid(16);