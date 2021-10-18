const mainArea = document.getElementById("game-container");
//const newDiv = document.createElement("div");
const gridInput = document.querySelectorAll("input");
const output = document.getElementById("output");
const gameContainer = document.getElementById("game-container")
const resetBtn = document.getElementById("reset-btn");
const divsToRemove = document.getElementsByClassName("newDivs");
// let colorPicker = document.getElementById("colorpicker").value;

// Slider bar update and generate grids on board
// Restart game/clean board 
function resetGrid() {
    for (let i = divsToRemove.length - 1;i >= 0;i--) {
        divsToRemove[i].remove();
    }
};

// Generate game grids
function generateGameBoard() {

    resetGrid()

    for (let i = 0;i < parseInt(output.value * output.value);i++) {
        gameContainer.style.gridTemplateColumns = `repeat(${output.value}, 1fr)`
        gameContainer.style.gridTemplateRows = `repeat(${output.value}, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDivs");
        document.getElementById("game-container").appendChild(newDiv);
        newDiv.addEventListener("mouseover", brushMode);
    }

};

function displayNoOfGrids() {
    document.getElementById("output").innerText = gridNo.value;
    generateGameBoard()
};


// return random color for psychedlic feature
function randomColor() {
    const randomColorVal = Math.floor(Math.random() * 16777215).toString(16);
    return randColor = "#" + randomColorVal;

}



// Brush mode - change color of div
function brushMode() {
    let colorPicker = document.getElementById("colorpicker").value;
    event.target.style.backgroundColor = `${colorPicker}`;
};

// Psychedelic mode
function psychMode() {
    let colorPicker = document.getElementById("colorpicker").value;
    event.target.style.backgroundColor = randomColor();
};

// event listeners
gridInput.forEach(input => input.addEventListener("change", displayNoOfGrids));
resetBtn.addEventListener("click", resetGrid);




// -- TO DO --
// Single Color Mode
// Psychedlic Mode
// Eraser feature