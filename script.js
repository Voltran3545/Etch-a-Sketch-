const container = document.querySelector('.container');
//const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
document.body.appendChild(btnGray);
const btnReset = document.createElement('button');
//document.body.appendChild(btnReset);
const btnSize = document.createElement('button');
document.body.appendChild(btnSize);
//const buttonsContainer = document.querySelector('buttons');

function createDivs(column, rows) {
  for (let i = 0; i < (column * rows); i++) {
    const div = document.createElement('div')
    container.style.gridTemplateColumns = `repeat(${column}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    container.appendChild(div).classList.add('grid')
  }
}

createDivs(16, 16)


function grayColor() {
  const grids = container.querySelectorAll('.grid')
  btnGray.textContent = 'Gray'
  btnGray.addEventListener('click', () => {
    grids.forEach(grid => grid.addEventListener('mouseover', () => {
      let Rnum = Math.floor(Math.random() * 255)
      grid.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
    }))

  })
  //buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function reReset() {
  btnReset.textContent = "Reset"
  const grids = container.querySelectorAll('.grid')
  grids.forEach(grid => grid.remove())
}


function reSize() {
  btnSize.textContent = "Reset"
  btnSize.addEventListener('click', () => {
    let user = prompt('Enter the grid size you want')
    if (user === null || user < 1) {
      reReset()
      createDivs(16, 16)
      grayColor()
    } else {
      reReset()
      createDivs(user, user)
      grayColor()
    }

  })
}


reSize()




















// for (var i = 0; i < 16; i++) {
//     document.write('<div>' + "" + '</div>');
//   }

//var div = document.createElement("div");

//document.getElementById(container).appendChild(div);