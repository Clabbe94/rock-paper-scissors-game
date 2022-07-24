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

// get all buttons and add eventlistener for each
// at each click we call the function playRound
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", playRound));

//result div's
const resultDiv = document.querySelector(".result");
const choiceDiv = document.createElement("div");
const scoreDiv = document.createElement("div");
const resultText = document.createElement("div");
choiceDiv.classList.add("choice-container");
resultDiv.appendChild(choiceDiv);
resultText.classList.add("result-text");
resultDiv.appendChild(resultText);
scoreDiv.classList.add("score-container");
resultDiv.appendChild(scoreDiv);

// Evaluates a round of play
function playRound() {
    const playerSelection = this.classList.value;
    const computerSelection = getComputerChoice();

    // display our & computers selection
    console.log("playerSelection: " + playerSelection);
    console.log("computerSelection: " + computerSelection);
    
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
         //increment the score of CPU
         computerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
       scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        //result text
        resultText.textContent = "You Lose! Paper beats Rock";
    }

    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        //increment playerScore
        playerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore;         
        //result text
        resultText.textContent = "You Won! Paper beats Rock";
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        //increment playerScore
        playerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        //result text
        resultText.textContent = "You Won! Rock beats Scissors";
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        //increment computerScore
        computerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        //result text
        resultText.textContent = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        //increment playerScore
        playerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        //result text
        resultText.textContent = "You Won! Scissors beats Paper";
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        //increment computerScore
        computerScore++;
        //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        //result text
        resultText.textContent = "You Lose! Scissors beats Paper";
    }
    else { 
         //Choice presentation
        choiceDiv.textContent = "Player: " + playerSelection + " Vs " + "Computer: " + computerSelection;
        //Score presentation
        scoreDiv.textContent = "Player Score: " + playerScore + "\n" + "Computer Score: " + computerScore; 
        resultText.textContent = "Tie"
    }

    //Display the winner and disable the buttons
    if (playerScore == 5) {
        resultText.textContent = "Player Won!";
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
    if (computerScore == 5) { 
        resultText.textContent = "Computer Won!";
        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}



