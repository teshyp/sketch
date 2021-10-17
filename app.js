const mainArea = document.getElementById("game-container");
const newDiv = document.createElement("div");
const gridInput = document.querySelectorAll("input");
const output = document.getElementById("output");
const gameContainer = document.getElementById("game-container")
const resetBtn = document.getElementById("reset-btn");
const divsToRemove = document.getElementsByClassName("newDivs");
let colorPicker = document.getElementById("colorpicker").value;

// Restart game/clean board 
function resetGrid() {
    for (let i = divsToRemove.length - 1;i >= 0;i--) {
        divsToRemove[i].remove();
    }
};

resetBtn.addEventListener("click", resetGrid);


// Slider bar update and generate grids on board
function displayNoOfGrids() {
    document.getElementById("output").innerText = gridNo.value;
    generateGameBoard()
};

gridInput.forEach(input => input.addEventListener("change", displayNoOfGrids));

// Generate game grids
function generateGameBoard() {

    resetGrid()

    for (let i = 0;i < parseInt(output.value * output.value);i++) {
        gameContainer.style.gridTemplateColumns = `repeat(${output.value}, 1fr)`
        gameContainer.style.gridTemplateRows = `repeat(${output.value}, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDivs");
        document.getElementById("game-container").appendChild(newDiv);
    }
}

// // generate random color
// function randomColor() {
//     const randomColorVal = Math.floor(Math.random() * 16777215).toString(16);
//     return randColor = "#" + randomColorVal;
// }

// function brushMode() {
// select grid

// onhover - change the selected grids color to value of colur picker

//     newDiv.style.backgroundColor = `{colorPicker}`;
// }

// newDiv.addEventListener("mouseover", brushMode())



// create function - for single color // make color picker function // change color of each div to value of color picker
// create function - random color - psychedlic mode // change color of each div to randomColor return value
// create function - eraser

// Create functions first then add event listeners to on:hover on divs

// design CSS at the end
// feedback from TOP
// display the number from range bar - DONE
// create function to reset/reload game - DONE