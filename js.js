const gridContainerSize = 480;
let randomColor; 
const divContainer = document.getElementById('gridContainer');
divContainer.style.width = `${gridContainerSize}px`;
divContainer.style.height = `${gridContainerSize}px`;

const inputGridRangeText = document.getElementById('gridSizeRangeText'); 
const inputGridRange = document.getElementById('gridSizeRange'); 
//const clearButton = document.getElementById('clear');
//const blackButton = document.getElementById('black');
//const randomButton = document.getElementById('ramdom');



let gridSize = inputGridRange.value;
let gridElemSize = gridContainerSize/gridSize;


function gridSizeRangeHandler() {
    gridSize = inputGridRange.value;
    gridElemSize = gridContainerSize/gridSize;
    inputGridRangeText.innerHTML = `${gridSize} x ${gridSize}`;
    gridCreate();
}

gridSizeRangeHandler();


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function gridCreate() {

    divContainer.innerHTML='';

    let gridArray = [];
    for (let i = 0; i < gridSize*gridSize; i++) {
        gridArray[i] = document.createElement('div'); 
        gridArray[i].className = 'gridItem';
        gridArray[i].style.width = `${gridElemSize}px`;
        gridArray[i].style.height = `${gridElemSize}px`;
        divContainer.appendChild(gridArray[i]);
    }
}

let mouseDown = false;

divContainer.addEventListener('mouseover', mouseoverHandler); 
document.addEventListener('mousedown',  (event) => {mouseDown = true; mouseoverHandler(event)});
document.addEventListener('mouseup',  () => {mouseDown = false});
document.ondragstart = function() {
    return false;
}

function mouseoverHandler(event) {
    
    let color = `black`;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if (randomColor) {
        let red = getRandomInt(255);
        let green = getRandomInt(255);
        let blue = getRandomInt(255);
        color = `rgb(${red}, ${green}, ${blue})`
    } 

    if (mouseDown && event.target.parentNode.id == 'gridContainer') {
        event.target.style.backgroundColor = color; 
    }
}


