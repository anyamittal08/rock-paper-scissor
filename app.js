const CHOICE_ARR = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * CHOICE_ARR.length);
    return CHOICE_ARR[randomIndex];
}

const playRound = (playerSelection, computerSelection) => {
    let casedPlayerSeleciton = playerSelection.toLowerCase()
    let result;
    if (playerSelection === computerSelection) {
        result = 'It\'s a draw!'
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection==='rock')) {
        result = `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }
    return result;
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

playerSelection = "paper";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));

playerSelection = "scissors";
computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));