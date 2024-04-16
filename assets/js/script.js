// Define the number of rows and cards in each row
const numRows = 4;
const numCards = [2, 3, 4, 5];

let currentStage = 0;
let correctCardIndices = [];
let selectableRows = 1;

// Function to show the start modal
function showStartModal() {
    document.getElementById("start-modal").style.display = "block";
}

// Function to hide the start modal
function hideStartModal() {
    document.getElementById("start-modal").style.display = "none";
}

// Function to show the rules modal
function showRulesModal() {
    document.getElementById("rules").style.display = "block";
}

// Function to hide the rules modal
function hideRulesModal() {
    document.getElementById("rules").style.display = "none";
}

// Get all elements with the class name 'start-game-btn'
let elements = document.querySelectorAll('.start-game-btn');
// event listener to class name 'start-game-btn'
elements.forEach(function(element) {
    element.addEventListener("click", function() {
        hideStartModal();
        hideRulesModal();
        startGame(); 
    }); 
});

//event listener for 'read-rules-btn' id 
document.getElementById("read-rules-btn").addEventListener("click", function() {
    hideStartModal();
    showRulesModal();
});

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
        selectableRows++;
        enableNextStage();
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

// Function to enable cards in the next selectable row
function enableNextStage() {
    let rows = document.getElementsByClassName('row');
    for (let i = 0; i < numRows; i++) {
        let cards = rows[i].getElementsByClassName('card');
        if (i === selectableRows - 1) {
            for (let j = 0; j < cards.length; j++) {
                cards[j].style.pointerEvents = 'auto';
            }
        } else {
            for (let j = 0; j < cards.length; j++) {
                cards[j].style.pointerEvents = 'none';
            }
        }
    }
}

// Start the game function
function startGame() {
    createAllRows();
}

// Show the start modal when the page is loaded
window.onload = function() {
    showStartModal();
}
