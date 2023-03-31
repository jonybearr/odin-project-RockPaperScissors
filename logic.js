console.log('hello there')

//helper functions

//randomly generates a rock, paper or scissors for the computer's move
function getComputerChoice() {
    let random = Math.random();
    if (random < 0.33) {
        //console.log('return rock')
        return 'rock'
    } else if (random < 0.66) {
        //console.log('return paper')
        return 'paper'
    } else {
        //console.log('return scissors')
        return 'scissors'
    }
}

//determines winner based on string input of player and computer moves
function playRound(playerSelection, computerSelection) {
    //convert to lowercase
    playerSelection = playerSelection.toLowerCase();
    //print inputs
    console.log('player chose ' + playerSelection)
    console.log('computer chose '+computerSelection)
    //determine winner for each possibility or tie
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('computer won this round')
        computerScore++;
    }else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('player won this round')
        playerScore++;
    }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('computer won this round')
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('player won this round')
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('computer won this round')
        computerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('player won this round')
        playerScore++;
    } else {
        //do nothing if it is a tie
    }

    console.log('the current score is ');
    console.log('player ', playerScore);
    console.log('computer ',computerScore);

}


function finish() {
    console.log('the game has finished! here are the results')
    console.log('player score: ',playerScore);
    console.log('computer score: ',computerScore);
    if(playerScore>computerScore){
        console.log("player won!")
    } else if (computerScore>playerScore){
        console.log("oof computer won")
    }else{
        console.log("it was a tie!")
    
    }
    //reset scores
    playerScore=0;
    computerScore=0;
}

//user input upgraded to use GUI instead of prompt

//establish counter variables
let playerScore = 0;
let computerScore = 0;


//establish js variables from DOM
const rockButton=document.querySelector("#rock");
const paperButton=document.querySelector("#paper");
const scissorsButton=document.querySelector("#scissors");
const finishButton=document.querySelector("#finish");

//add function reactions to them
rockButton.addEventListener("click", function(){playRound('rock',getComputerChoice())});
paperButton.addEventListener("click", function(){playRound('paper',getComputerChoice())});
scissorsButton.addEventListener("click", function(){playRound('scissors',getComputerChoice())});
finishButton.addEventListener('click', function(){finish()});
