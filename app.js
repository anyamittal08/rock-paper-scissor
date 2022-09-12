const MOVES = ['rock', 'paper', 'scissors'];

// // random move generator
const getComputerChoice = () => {
    let randomMove = MOVES[Math.floor(Math.random() * MOVES.length)];
    return randomMove;
}

// // one round of game
const playRound = (playerSelection, computerSelection) => {
    let winner;
    if (playerSelection === computerSelection) {
        $('.round-result').text(`This round is a tie. Both players picked ${computerSelection}`)
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection==='rock')) {
        winner = 'computer';
        $('.round-result').text(`You lose this round! ${computerSelection} beats ${playerSelection}`);
    } else {
        winner = 'player';
        $('.round-result').text(`You win this round! ${playerSelection} beats ${computerSelection}`);
    }
    return winner;
};

const game = () => {
    let result;
    
    computerSelection = getComputerChoice();
    let currentRoundWinner = playRound(playerSelection, computerSelection);
    if (currentRoundWinner) {
        if (currentRoundWinner === 'player') {
            playerScore++;
            $('.player-score').text(`You: ${playerScore}`);
        }
        else if (currentRoundWinner === 'computer') {
            computerScore++;
            $('.computer-score').text(`Computer: ${computerScore}`);

        }
    }

    if (playerScore > computerScore) result = 'player wins the game!'
    else if (playerScore < computerScore) result = 'computer wins the game!'
    else result = 'it\'s a draw!'

    return result;
}

let playerSelection;
let computerSelection;

let playerScore = 0;
let computerScore = 0;

// add click handler
$("button").click(function() {
    playerSelection = this.id;
    game();
});


