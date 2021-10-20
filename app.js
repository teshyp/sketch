const mainArea = document.getElementById("game-container");
//const newDiv = document.createElement("div");
const gridInput = document.querySelectorAll("input");
const output = document.getElementById("output");
const gameContainer = document.getElementById("game-container")
const resetBtn = document.getElementById("reset-btn");
const divsToRemove = document.getElementsByClassName("newDivs");
const eraserBtn = document.getElementById("eraser-btn");
const psyBtn = document.getElementById("psy-btn");
const brushBtn = document.getElementById("clr-btn");
//let colorPicker = document.getElementById("colorpicker").value;

// Restart game/clean board - Brush mode
function resetGrid() {
    for (let i = divsToRemove.length - 1;i >= 0;i--) {
        divsToRemove[i].remove();
    }
};

// Generate game grids
function generateGameBoard() {

    resetGrid()
    document.getElementById("output").innerText = gridNo.value;

    for (let i = 0;i < parseInt(output.value * output.value);i++) {

        gameContainer.style.gridTemplateColumns = `repeat(${output.value}, 1fr)`
        gameContainer.style.gridTemplateRows = `repeat(${output.value}, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDivs");
        document.getElementById("game-container").appendChild(newDiv);
        newDiv.addEventListener("mouseover", clrPickermMode);
        //newDiv.addEventListener("mouseover", psychMode);
    }
};


// Eraser mode 
function eraser() {
    event.target.style.backgroundColor = "#FFFFFF";
};


// Brush mode - change color of div
function clrPickermMode() {
    let colorPicker = document.getElementById("colorpicker").value;
    eraserBtn.addEventListener("mouseover", eraser);
    event.target.style.backgroundColor = `${colorPicker}`;
};


// Psychedelic mode
function psychMode() {
    document.getElementsByClassName("newDivs").addEventListener("mouseover", psyDiv);
    function psyDiv() {
        randomColorVal = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = `${"#" + randomColorVal}`;
    }
};


// event listeners
gridInput.forEach(input => input.addEventListener("change", generateGameBoard));


resetBtn.addEventListener("click", resetGrid);


// -- TO DO --
// Single Color Mode
// Psychedlic Mode
// Eraser feature

// Load page
// reset grid 
// Default mode - paint with color picker
// 