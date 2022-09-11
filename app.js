const CHOICE_ARR = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * CHOICE_ARR.length);
    return CHOICE_ARR[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    let casedPlayerSelection = playerSelection.toLowerCase();
    let winner;
    if (playerSelection === computerSelection) {
        console.log("This round is a draw")
    } else if ((casedPlayerSelection === 'rock' && computerSelection === 'paper') || (casedPlayerSelection === 'paper' && computerSelection === 'scissors') || (casedPlayerSelection === 'scissors' && computerSelection==='rock')) {
        winner = 'computer';
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`);
    } else {
        winner = 'player';
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    }

    return winner;
};

const game = () => {
    let playerSelection;
    let computerSelection;
    let playerPoints = 0;
    let computerPoints = 0;
    let result;

    for (let i=0; i<5; i++) {
        playerSelection = prompt('rock, paper, scissors?');
        computerSelection = getComputerChoice();
        let currentRoundWinner = playRound(playerSelection, computerSelection);
        if (currentRoundWinner) {
            if (currentRoundWinner === 'player') playerPoints++;
            else if (currentRoundWinner === 'computer') computerPoints++
        }
    }

    if (playerPoints > computerPoints) result = 'player wins the game!'
    else if (playerPoints < computerPoints) result = 'computer wins the game!'
    else result = 'it\'s a draw!'

    return result;
}

console.log(game());