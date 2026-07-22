let size = 16
let gridContainer = document.querySelector('.container')
for (let i = 0; i < size * size; i++) {
  let divSquare = document.createElement('div');
  divSquare.classList.add('grid-square');
  gridContainer.append(divSquare);
}

