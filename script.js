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
        dicCells.push(document.createElement('div'));
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

function formatDivs(numDivs) {
    for(const cell in divCells) {
        //Will need to set more attributes later and attach eventListeners here too
        cell.setAttribute('style', `width: ${WIDTH/numDivs}; height: ${HEIGHT/numDivs}`);
    }
}

//Need to learn more about grid and setup divContainer grid here
function formatDivContainer(numDivs) {
    //divContainer.setAttribute()
}

function attachDivChildren(divCells) {
    for(const cell of divCells) {
        divContainer.appendChild(cell);
    }
}

function reset() {
    //Need to put what will happen when you push the reset button
}

resetBtn.addEventListener('click', reset);
