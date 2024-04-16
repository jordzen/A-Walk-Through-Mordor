// Define the number of rows and cards in each row
const numRows = 4;
const numCards = [2, 3, 4, 5];

let correctCardIndices = [];
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

// Generate a random index for the correct card
let correctIndex = Math.floor(Math.random() * num);

for (let i = 0; i < num; i++) {
    let card = document.createElement('div');
    card.classList.add('card');
    // Set the correct card style
    if (i === correctIndex) {
    card.dataset.correct = true;
    }
    //Click function to show if card sleected was correct or incorrect
    card.addEventListener('click', function() {
        if (stage === currentStage && card.dataset.correct === 'true') {
        card.style.backgroundColor = 'green';
        currentStage++;
        } else {
            card.style.backgroundColor = '#ab2828';
        }
    });
        row.appendChild(card);
    }
    document.getElementById('game').appendChild(row);
        if (stage !== 0) {
        row.style.pointerEvents = 'none'; // Disable card selection for rows after the first one
    }
}

// Start the game function
function startGame() {
    createAllRows();
}

// Show the start modal when the page is loaded
window.onload = function() {
    startGame();
}
