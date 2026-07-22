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

let btn = document.querySelector('button')
btn.addEventListener('click', () => {
  const gridSize = +prompt('Pick your grid size:')
  if ( gridSize < 1 || gridSize > 100) return alert('error, wayyy overboard')
  createGrid(gridSize)
})

gridContainer.addEventListener('mouseover', (event) => { 
  if (event.target.classList.contains('grid-square')) {
  event.target.classList.add('hovered')    
  }
})
