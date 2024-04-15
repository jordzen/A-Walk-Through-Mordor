// Define the number of rows and cards in each row
const numRows = 4;
const numCards = [2, 3, 4, 5];

let currentStage = 0;

// Function to create cards for all rows
function createAllRows() {
    for (let i = 0; i < numRows; i++) {
        createRow(i, numCards[i]);
    }
}

// Function to create cards for a given row
function createRow(stage, num) {
    let row = document.createElement('div');
    row.classList.add('row');

for (let i = 0; i < num; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    row.appendChild(card);
}
document.getElementById('game').appendChild(row);
}

// Start the game function
function startGame() {
    createAllRows();
}

// Show the start modal when the page is loaded
window.onload = function() {
    startGame();
}
