//Decisions
//Width will be 500px x 500px
//Each div will be width / numDivs wide and height/numdivs tall

const WIDTH = 500;
const HEIGHT = 500;

const resetBtn = document.querySelector('#resetBtn');
const divContainer = document.querySelector('#divContainer');


function createDivCells(numDivs) {
    let divCells = []
    for(let i = 0; i < numDivs * numDivs; i++) {
        let temp = document.createElement('div');
        temp.setAttribute('style', 'background-color: white');
        temp.addEventListener('mouseenter', e => {temp.setAttribute('style', 'background-color: black');});
        divCells.push(temp);
    }
    return divCells;
}

function clearDivContainer() {
    let firstChild = divContainer.firstElementChild;
    while(firstChild) {
        firstChild.remove();
        firstChild = divContainer.firstElementChild;
    }
}

//Need to learn more about grid and setup divContainer grid here
function formatDivContainer(numDivs) {
    divContainer.setAttribute('style',
             `display: grid; 
              grid-template-columns: repeat(${numDivs}, ${WIDTH/numDivs}px);
              grid-template-rows: repeat(${numDivs}, ${HEIGHT/numDivs}px);
              `)
}

function attachDivChildren(divCells) {
    for(const cell of divCells) {
        divContainer.appendChild(cell);
    }
}

function reset() {
    //Need to put what will happen when you push the reset button
    let newNumDivs = prompt('Please enter the number of cells per side', '50');
    clearDivContainer();
    formatDivContainer(newNumDivs);
    attachDivChildren(createDivCells(newNumDivs));

}

function initialize(numDivs) {
    //Need to setup the page using default values numDivs = 50
    formatDivContainer(numDivs);
    attachDivChildren(createDivCells(numDivs));
}

resetBtn.addEventListener('click', reset);
initialize(50);

