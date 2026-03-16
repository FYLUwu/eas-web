const container = document.querySelector('#main-container');
const containerSize = 600;

console.log(container);

function createGrid(size) {
  container.innerHTML = '';

  const cellSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('square');

    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    container.appendChild(cell);
  }
}

createGrid(16);
