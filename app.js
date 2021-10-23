const mainArea = document.getElementById("game-container");
const gridInput = document.getElementById("gridNo");
const gameContainer = document.getElementById("game-container")
const resetBtn = document.getElementById("reset-btn");
const divsToRemove = document.getElementsByClassName("newDivs");
const eraserBtn = document.getElementById("eraser-btn");
const psyBtn = document.getElementById("psy-btn");
const brushBtn = document.getElementById("clr-btn");
//let colorPicker = document.getElementById("colorpicker").value;
let playerName = prompt("Hello, please enter your name", "Player")
document.getElementById("playerName").innerHTML = `${playerName}`

// Restart game/clean board - Brush mode
function resetGrid() {
    for (let i = divsToRemove.length - 1;i >= 0;i--) {
        divsToRemove[i].remove();
    }
};



// Generate game grids
function generateGameBoardBrushMode() {

    resetGrid()
    document.getElementById("output").innerText = gridNo.value;

    for (let i = 0;i < parseInt(output.value * output.value);i++) {

        gameContainer.style.gridTemplateColumns = `repeat(${output.value}, 1fr)`
        gameContainer.style.gridTemplateRows = `repeat(${output.value}, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDivs");
        document.getElementById("game-container").appendChild(newDiv);
        newDiv.addEventListener("mouseover", clrPickermMode);
        eraserBtn.addEventListener("click", eraser)
        function eraser() {
            newDiv.addEventListener("mouseover", function () {
                this.style.backgroundColor = "rgba(175, 255, 207, 0.954)";
            });
        };
    }
};

// Generate game grids - psych mode
function generateGameBoardPsychMode() {

    resetGrid()
    document.getElementById("output").innerText = gridNo.value;

    for (let i = 0;i < parseInt(output.value * output.value);i++) {

        gameContainer.style.gridTemplateColumns = `repeat(${output.value}, 1fr)`
        gameContainer.style.gridTemplateRows = `repeat(${output.value}, 1fr)`
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDivs");
        document.getElementById("game-container").appendChild(newDiv);
        newDiv.addEventListener("mouseover", psychMode);
        eraserBtn.addEventListener("click", eraser)
        function eraser() {
            newDiv.addEventListener("mouseover", function () {
                this.style.backgroundColor = " rgba(175, 255, 207, 0.954)";
            });
        };
    };
};


// Eraser mode 


// Brush mode - change color of div
function clrPickermMode() {
    let colorPicker = document.getElementById("colorpicker").value;
    event.target.style.backgroundColor = `${colorPicker}`;
};


// Psychedelic mode
function psychMode() {
    randomColorVal = Math.floor(Math.random() * 16777215).toString(16);
    event.target.style.backgroundColor = `${"#" + randomColorVal}`;
};


// event listeners
//gridInput.forEach(input => input.addEventListener("change", generateGameBoard));

gridInput.addEventListener("change", generateGameBoardBrushMode);
psyBtn.addEventListener("click", generateGameBoardPsychMode);
brushBtn.addEventListener("click", generateGameBoardBrushMode)
resetBtn.addEventListener("click", resetGrid);


// -- TO DO --
// Eraser feature

