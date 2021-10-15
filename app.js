const mainArea = document.getElementById("game-container");
const newDiv = document.createElement("div") //creates new div(s)
const gridInput = document.querySelectorAll("input"); // grabs all the input elements from page
const output = document.getElementById("output");



function changeGrid() {
    document.getElementById("output").innerText = gridNo.value;
};

gridInput.forEach(input => input.addEventListener("change", changeGrid));
gridInput.forEach(input => input.addEventListener("mousemove", changeGrid));


// create function - create number of divs (from html input)
// how do you place the grids in a row - grid
// create function - for each button
// create function - to select mode
// create function to reset/reload game
// color of new div - random - on hover select random colour
// design CSS at the end
// feedback from TOP
// display the number from range bar - DONE