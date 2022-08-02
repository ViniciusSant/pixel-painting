// Adicionando o pixel-board como filho da main

function createPixelBoard(fatherElement) {
  let father = document.querySelector(fatherElement);
  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.display = 'flex';
  pixelBoard.style.flexWrap = 'wrap';
  pixelBoard.style.justifyContent = 'center';
  pixelBoard.style.margin = '20px 550px';

  father.appendChild(pixelBoard);
  return pixelBoard;
}

let pixelBoard = createPixelBoard('main');

function createPixels(fatherElement) {
  for (let i = 1; i <= 25; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = 'solid black 1px';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    fatherElement.appendChild(pixel);
  }
}
createPixels(pixelBoard);
