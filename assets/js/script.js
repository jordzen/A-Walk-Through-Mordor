// Define the number of rows and cards in each row
const numRows = 4;
const numCards = [2, 3, 4, 5];

let currentStage = 0;
let selectableRows = 1;

// Images to be displayed
const incorrectImages = [
    { image: "assets/images/ork-guard.webp", threshold: 7, message: "A patrolling Ork Guard has spotted you! \n Roll the dice to fight back!" },
    { image: "assets/images/sauron.webp", threshold: 14, message: "You Have been tempted by the ring and put it on. \n You are now in the enemy's gaze! roll to overpower temptation" },
    { image: "assets/images/gollum.webp", threshold: 10, message: "Gollum has followed you through. \n Roll to finish him off!" },
    { image: "assets/images/nasgul.webp", threshold: 12, message: "A Ring Wraith has caught your scent. \n Roll to avoid him" },
    { image: "assets/images/ork-captain.webp", threshold: 9, message: "A patrolling Ork Captain has spotted you! \n Roll the dice to fight back!" }
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

//function to show the dice roll result
function showDiceResult() {
    document.getElementById("dice-result").style.display = "block";
}

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

/**
 * Function to create cards for a given row
 * Create a label to display the stage number
 * Generate a random index for the correct card
 * set the correct card to true
 * Disable card selection for rows after the first one
 */ 
function createRow(stage, num) {
    let row = document.createElement('div');
    row.classList.add('row');

    let stageLabel = document.createElement('h2');
    stageLabel.textContent = `Stage ${stage + 1}`;
    row.appendChild(stageLabel);

    let correctIndex = Math.floor(Math.random() * num);

    for (let i = 0; i < num; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        if (i === correctIndex) {
            card.dataset.correct = 'true';
        }
        card.addEventListener('click', cardClickHandler.bind(card, stage, i, correctIndex));
        row.appendChild(card);
    }

    let gameContainer = document.getElementById('game');
    gameContainer.appendChild(stageLabel);
    gameContainer.appendChild(row);
    if (stage !== 0) {
        row.style.pointerEvents = 'none';
    }
}

/**
 * Turn the card green if the user selects the correct card
 * Turn the card red if the user selects a wrong card and display the modal pop-up with enemy image
 * Allow the user to select cards on the next stage if they selected the correct card on their current stage.
 * If the user selects the correct card on the final stage, show the Finish modal pop-up.
 */ 
function cardClickHandler(stage, cardIndex, correctIndex, event) {
    let card = event.currentTarget;
    if (stage === currentStage && cardIndex === correctIndex) {
        card.style.backgroundColor = 'green';
        if (currentStage === numRows - 1) {
            showFinishModal();
        } else {
            currentStage++;
            selectableRows++;
            enableNextStage();
        }
    } else {
        card.style.backgroundColor = '#ab2828';
        showModal();
    }
}

// Function to roll a d20 dice and recieve a random result
function rollD20() {
    return Math.floor(Math.random() * 20) + 1;
}

/**
 * Show modal with message and image
 * Randomly select an image when the user selects an incorrect card
 * show the required dice roll to continue the game
 */ 
function showModal() {
    let modal = document.getElementById("incorrect-card-modal");
    let modalMessage = document.getElementById("modal-message");
    let modalImage = document.getElementById("modal-image");
    let modalThreshold = document.getElementById("modal-threshold");

    let randomIncorrectImage = incorrectImages[Math.floor(Math.random() * incorrectImages.length)];

    modalMessage.textContent = randomIncorrectImage.message;
    modalImage.innerHTML = `<img src="${randomIncorrectImage.image}" alt="Image of an enemy you have encountered">`;
    modalThreshold.textContent = `Required dice roll: ${randomIncorrectImage.threshold}+`;
    
    /**
     * Function to show the dice result modal pop-up when the user clicks on the roll dice button
     * Recieve and display the result from the rollD20 function.
     * display a message to show if the user has passed or failed the dice roll challenge
     * reload the page if the user clicks on the X, after losing the dice roll.
     */
    let rollDiceBtn = document.getElementById("roll-dice-btn");
        rollDiceBtn.onclick = function() {
        modal.style.display = "none";
        showDiceResult();
        let diceResult = rollD20();
        document.getElementById("result").textContent = "You rolled the dice! Result: " + diceResult;
        
    if (diceResult < randomIncorrectImage.threshold) {
        // User loses
        document.getElementById("result-lose").textContent = "Darkness takes you. YOU LOSE.";
        document.getElementById("result-win").style.display = "none"; // Hide win result
        document.getElementById("dice-close").onclick = function() {
            location.reload(); // Reload the page to play again   
            };
        } else {
            // User wins
            if (diceResult === 20) {
                document.getElementById("result-win").textContent = "You rolled a natural 20! The Ilúvatar smiles upon you.";
            } else {
                document.getElementById("result-win").textContent = "You overcome the obstacle, gather yourself, and carry on.";
            }
        }
    };
    modal.style.display = "block";
}

// When the user clicks on <span>(x) on the dice result modal, close the modal
document.getElementById("dice-close").onclick = function() {
document.getElementById("dice-result").style.display = "none";
};

// When the user clicks on <span>(x) on the finish modal, close the modal and reload the page
document.getElementById("reload-close").onclick = function() {
document.getElementById("finish-modal").style.display = "none";
location.reload(); 
};

/**
 * Function to enable cards in the next selectable row to be clicked
 */
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
    enableNextStage();
}

// Show the start modal when the page is loaded
window.onload = function() {
    showStartModal();
};