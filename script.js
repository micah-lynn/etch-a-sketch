function createDivItem(number) {
    multiNum = number * number;
    for (let i = 0; i < multiNum; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-box');
        div.style.width = `${100/number}%`;
        div.style.height =`${100/number}%`;
        gridContain.appendChild(div);
    };
};

function removeGrid() {
    squares = document.querySelectorAll('.grid-box');
    squares.forEach((square) => {
        square.remove();
    });
}

function addListenerToGrid() {
    const boxes = document.querySelectorAll('.grid-box');
    boxes.forEach((box) => {
      box.addEventListener('mouseover', changeColor)
    })
  };

function changeColor() {
    this.classList.add('hover');
};


const gridContain = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.new-grid');

createDivItem(16);
addListenerToGrid();

resetBtn.addEventListener('click', () => {
    let number = prompt("Specify new number of tiles (your number multiplied by itself).");
    removeGrid();
    createDivItem(number);
    addListenerToGrid();
});