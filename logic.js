console.log('hello there')


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



//simplifies user input of three choices to numbers 1 2 and 3
function getHumanChoice() {
    let inputValue=prompt('enter 1 for rock, 2 for paper, and 3 for scissors');
    if (inputValue == 1) {
        return 'rock'
    } else if (inputValue == 2) {
        return 'paper'
    } else if (inputValue == 3) {
        return 'scissors'
    }
}
//rock paper scissors logic
function playRound(playerSelection, computerSelection) {
    //print inputs
    console.log('player chose ' + playerSelection)
    console.log('computer chose '+computerSelection)
    //determine winner for each possibility or tie
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('computer won this round')
        return 'computer'
    }else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log('player won this round')
        return 'player'
    }else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log('computer won this round')
        return 'computer'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('player won this round')
        return 'player'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log('computer won this round')
        return 'computer'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log('player won this round')
        return 'player'
    } else {
        console.log('tie round')
        return 'tie'
    }

}

//game loop
function game() {
    console.log('this is a 5 round majority wins game of rock paper scissors!');
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++){
        let result = playRound(getHumanChoice(),getComputerChoice());
        if (result == 'player') {
            playerScore++;
        } else if (result == 'computer') {
            computerScore++;
        } else {
            //do nothing if theres a tie
        }
    }

    //after 5 rounds annouce final winners
    console.log('game over!')
    console.log('rounds player won ' + playerScore);
    console.log('rounds computer won ' +computerScore);
    if(playerScore>computerScore){
        console.log('player won the match!')
    } else if (playerScore<computerScore){
        console.log('computer won the match!')
    } else {
        console.log('it was a tie!')
    }
}

//run program
game();