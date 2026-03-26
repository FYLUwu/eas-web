const container = document.querySelector("#main-container");
const containerSize = 600;

function init() {
  createGrid(32);

  let createButton = document.querySelector("#create-button");

  createButton.addEventListener("click", function (e) {
    let newGridSize = prompt("Enter desired grid size.");
    let gridSizeNumber = Number(newGridSize)

    if (gridSizeNumber > 100 || isNaN(gridSizeNumber) || gridSizeNumber === 0) {
      return
    }

    createGrid(gridSizeNumber);
  });
}

function createCell(cellSize) {
  const cell = document.createElement("div");
  cell.classList.add("square");

  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;

  container.appendChild(cell);

  cell.addEventListener("mouseover", function (e) {
    cell.style.borderColor = getRandomColor();
    cell.style.backgroundColor = getRandomColor();
  });
}

function createGrid(size) {
  container.innerHTML = "";
  const cellSize = containerSize / size;

  for (let i = 0; i < size * size; i++) {
    createCell(cellSize);
  }
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return "#" + randomColor;
}

init();
