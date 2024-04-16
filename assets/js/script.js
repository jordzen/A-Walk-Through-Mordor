// Define the number of rows and cards in each row
const numRows = 4;
const numCards = [2, 3, 4, 5];

let currentStage = 0;
let correctCardIndices = [];
let selectableRows = 1;

// Images to be displayed
    
const incorrectImages = [
    { image: "/assets/images/ork-guard.webp", threshold: 7, message: "A patrolling Ork Guard has spotted you! \n Roll the dice to fight back!" },
    { image: "/assets/images/sauron.webp", threshold: 14, message: "You Have been tempted by the ring and put it on. \n You are now in the enemys gaze! roll to overpower temptaion" },
    { image: "/assets/images/gollum.webp", threshold: 10, message: "Gollum has followed you through. \n Roll to finish him off!" },
    { image: "/assets/images/nasgul.webp", threshold: 12, message: "A Ring Wraith has caught your scent. \n Roll to avoid him" },
    { image: "/assets/images/ork-captain.webp", threshold: 9, message: "A patrolling Ork Captain has spotted you! \n Roll the dice to fight back!" }
];

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

//function to show the finish modal 
function showFinishModal() {
    document.getElementById("finish-modal").style.display = "block";
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
            if (currentStage === numRows - 1) {
                showFinishModal()
            } else {
                currentStage++;
                selectableRows++;
                enableNextStage();
            }
        } else {
            card.style.backgroundColor = '#ab2828';
            // Show the modal with the message and image
            showModal();
        }
    });
        row.appendChild(card);
    }
    document.getElementById('game').appendChild(row);
        if (stage !== 0) {
        row.style.pointerEvents = 'none'; // Disable card selection for rows after the first one
    }
}

// Function to roll a d20 dice
function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

// Show modal with message and image
function showModal() {
    let modal = document.getElementById("incorrect-card-modal");
    let modalMessage = document.getElementById("modal-message");
    let modalImage = document.getElementById("modal-image");
    let modalThreshold = document.getElementById("modal-threshold");

    // Get a random incorrect image
    let randomIncorrectImage = incorrectImages[Math.floor(Math.random() * incorrectImages.length)];

    modalMessage.textContent = randomIncorrectImage.message;
    modalImage.innerHTML = `<img src="${randomIncorrectImage.image}" alt="Incorrect Image">`;
    modalThreshold.textContent = `Required dice roll: ${randomIncorrectImage.threshold}+`;

    // Roll dice button
    let rollDiceBtn = document.getElementById("roll-dice-btn");
    rollDiceBtn.onclick = function() {
        let diceResult = rollD20();
        alert("You rolled the dice! Result: " + diceResult);
        if (diceResult < randomIncorrectImage.threshold) {
            alert("Darkness takes you. YOU LOSE.");
            location.reload(); // Reload the page to play again   
            } else {
            if (diceResult === 20) {
                alert("You rolled a natural 20! The Ilúvatar smiles upon you.");
            } else {
                alert("You overcome the obstacle, you gather yourself and carry on.");
            }
            modal.style.display = "none";
        }
    }

    modal.style.display = "block";
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
    enableNextStage()
}

// Show the start modal when the page is loaded
window.onload = function() {
    showStartModal();
}
