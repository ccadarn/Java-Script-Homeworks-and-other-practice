//Game logic
// Get Computer move
let getComputerMove  = () => {
let randomNum = Math.random();
    let computerChoice = '';
    
    if(randomNum >= 0 && randomNum < 1/3){
        computerChoice = 'Rock';
    } else if(randomNum >= 1/3 && randomNum < 2/3){
        computerChoice = 'Paper';
    } else{
        computerChoice = 'Scissors';
    }
return computerChoice;
}

//determine winner
let determineWinner = (getHumanMove, getComputerMove) => {

    if(getComputerMove === 'Rock'){
        if(getHumanMove === 'Scissors'){
            return 'Computer wins!';
        } else if(getHumanMove === 'Paper'){
            return 'You win!';
        } else if (getHumanMove === 'Rock'){
            return 'Its a draw!'
        }
    } else if(getComputerMove === 'Paper'){
        if(getHumanMove === 'Rock'){
            return 'Computer wins!';
        } else if(getHumanMove === 'Scissors'){
            return 'You win!';
        } else if (getHumanMove === 'Paper'){
            return 'Its a draw!'
        }
    } else {
        if(getHumanMove === 'Paper'){
            return 'Computer wins!';
        } else if(getHumanMove === 'Rock'){
            return 'You win!';
        } else if (getHumanMove === 'Scissors'){
            return 'Its a draw!'
        }
    }  
}

//result code
let playGame = (playerMove) => {
    let computerMove = getComputerMove();
    let winner = determineWinner(playerMove, computerMove);
    let message = resultsParagraph.innerText = `You picked ${playerMove}, computer picked ${computerMove}, ${winner}`;

    return message; 
}

//getting buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

//event listeners
rockButton.addEventListener('click', () => {playGame('Rock')});
paperButton.addEventListener('click', () => {playGame('Paper')});
scissorsButton.addEventListener('click', () => {playGame('Scissors')});

//result display
const resultsParagraph = document.getElementById('game-result');