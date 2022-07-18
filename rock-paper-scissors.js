// Normalize the text so only first letter is capitalized (Helper function)
function normalizeText(playerSelection) { 
    let normalizedChoice = playerSelection.toLowerCase();
    let refinedChoice    = normalizedChoice.replace(normalizedChoice[0], normalizedChoice[0].toUpperCase());

    return refinedChoice;
}

// Random choice made by the computer
function getComputerChoice() { 
    var choices       = ['Rock', 'Paper', 'Scissors'];
    var randomChoice  = choices[Math.floor(Math.random() * choices.length)];
    
    return randomChoice;
}

// Variables
let playerScore = 0;
let computerScore = 0;

// Evaluates a round of play
function playRound() { 
    let playerSelection = prompt("Type in your choice", '');
    let computerSelection = getComputerChoice();
    
    let playerSelectionRefined = normalizeText(playerSelection);

    // print out each choice
    console.log("Players Choice: " + playerSelectionRefined);
    console.log("Computers Choice: " + computerSelection);


    if (playerSelectionRefined == 'Rock' && computerSelection == 'Paper') {
        computerScore++;
        //console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelectionRefined == 'Paper' && computerSelection == 'Rock') {
        playerScore++;
        //console.log("You Won! Paper beats Rock");
    }
    else if (playerSelectionRefined == 'Rock' && computerSelection == 'Scissors') {
        playerScore++;
        //console.log("You Won! Rock beats Scissors");
    }
    else if (playerSelectionRefined == 'Scissors' && computerSelection == 'Rock') {
        computerScore++;
        //console.log("You Lose! Rock beats Scissors");
    }
    else if (playerSelectionRefined == 'Scissors' && computerSelection == 'Paper') { 
        playerScore++;
        //console.log("You Won! Scissors beats Paper");
    }
    else if(playerSelectionRefined == 'Paper' && computerSelection == 'Scissors'){ 
        computerScore++;
        //console.log("You Lose! Scissors beats Paper");
    }
}

function game() { 
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Players Score: " + playerScore);
        console.log("Computers Score: " + computerScore);
    }
    
    if (playerScore > computerScore) {
        console.log("Player Won!")
    }
    else if (computerScore > playerScore) { 
        console.log("The Computer Won!")
    }
}

//run the game
console.log(game());