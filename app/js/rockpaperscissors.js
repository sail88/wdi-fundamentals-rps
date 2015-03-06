////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return (move || getInput());
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove) {
        winner = "tie";
    } else if (playerMove == 'rock') {
            if (computerMove == 'paper') {
                winner = "computer"; 
            } else {
                    winner = "player" ;}
            }
        else if (playerMove == 'paper') {
            if (computerMove == 'scissors') {
                winner = "computer";}
                else {
                    winner = "player";}
            }
            // Here we know playerMove must be 'scissors'
            else if (computerMove == 'rock') {
                winner = "computer";
            }    else {
                    winner = "player";}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var victoryLevel = 5;
    var looper;
    var thisTurnScore = 0;
    var thisTurnWinner = "";
    for (looper = 1; looper < victoryLevel;) {
       thisTurnWinner = getWinner(getPlayerMove(), getComputerMove());
       console.log((thisTurnWinner=="tie") ? "tie. Try again..." : thisTurnWinner+" wins!");
       if (thisTurnWinner == "player") {
           playerWins = playerWins + 1;
           console.log("player now has");
           console.log(playerWins);
       }
       if (thisTurnWinner == "computer") {
           computerWins = computerWins + 1;
           console.log("computer now has");
           console.log(computerWins);
       }
       if (thisTurnWinner == "tie") {
           thisTurnScore = 0;
           continue;
       }
        (playerWins<computerWins ? looper = computerWins : looper = playerWins);
        //console.log("looper "+looper);
    }
    return [playerWins, computerWins];
}

playToFive();


 /*   var victoryLevel = 5;
    while ((playerWins < victoryLevel) || (computerWins < victoryLevel)) {
        if (getWinner(playerMove, computerMove) = "player") {
            playerWins += 1;
        } else if (getWinner(playerMove, computerMove) = "computer") {
            computerWins += 1;}
    }
    return [playerWins, computerWins];
} */

