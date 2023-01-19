// Adicionando o pixel-board como filho da main

function createPixelBoard(fatherElement) {
  let father = document.querySelector(fatherElement);
  let pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  pixelBoard.style.display = 'flex';
  pixelBoard.style.flexWrap = 'wrap';
  pixelBoard.style.justifyContent = 'center';
  pixelBoard.style.margin = '20px auto';
  pixelBoard.style.width = '220px';
  pixelBoard.style.height = '210px';

  father.appendChild(pixelBoard);
  return pixelBoard;
}

let pixelBoard = createPixelBoard('main');
let buttomVQV = document.querySelector('#generate-board');

function createPixels(fatherElement) {
  for (let i = 1; i <= 25; i++) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixel.style.border = 'solid black 1px';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    fatherElement.appendChild(pixel);
    return pixel;
  }
}
createPixels(pixelBoard);

let palette = document.querySelector('#color-palette');
/* palette.classList.add('frufru');
palette.classList.add('frifri');
palette.classList.remove('frufru'); */

let colorPalette = document.querySelector('.color');
palette.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
  selected = event.target;
});

pixelBoard.addEventListener('click', function (event) {
  let cor = document.querySelector('.selected').classList[1];
  let target = event.target;
  target.style.backgroundColor = cor;
});

let bottom = document.querySelector('#clear-board');

bottom.addEventListener('click', function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = 'white';
  }
});
