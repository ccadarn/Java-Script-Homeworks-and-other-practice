// ---- starting variables ----
//Application state

let score;

//retrieve score from local storage
let storedScoreString = localStorage.getItem('gameScore');
let parsedScore = JSON.parse(storedScoreString); 

//checking if there is a saved data locally to use
if (parsedScore) {
    score = parsedScore;
} else {
    score = {
        userWin: 0,
        computerWin: 0,
        draw: 0,
    }
}

//display score after checking object value
messageDisplay();

//DOM elements
//getting starting results from browser, assigning them to variables
const winDisplay = document.getElementById('win-score');
const loseDisplay = document.getElementById('lose-score');
const drawDisplay = document.getElementById('draw-score');

//getting message paragraph from browser, assigning it to variable
const messageParagraph = document.getElementById('game-message');

//getting buttons from browser
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const resetButton = document.getElementById('reset');

//event listeners for buttons
rockButton.addEventListener('click', () => {playGame('Rock')});
paperButton.addEventListener('click', () => {playGame('Paper')});
scissorsButton.addEventListener('click', () => {playGame('Scissors')});

resetButton.addEventListener('click', () => {reset()})

//key mapping
const winnerToKeyMap = {
    'You win!': 'userWin',
    'Computer wins!': 'computerWin',
    'Its a draw!': 'draw',
};


//Game logic
// Get Computer move code
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

//determine winner code
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

//message code
let messageDisplay = () => {
    winDisplay.innerText = score.userWin;
    loseDisplay.innerText = score.computerWin;
    drawDisplay.innerText = score.draw;
}

//result code
let playGame = (playerMove) => {
    let computerMove = getComputerMove();
    let winner = determineWinner(playerMove, computerMove);

    //display result message in browser
    let resultMessage = messageParagraph.innerText = `You picked ${playerMove}, computer picked ${computerMove}, ${winner}`;

    //increment score
    let keyToIncrement = winnerToKeyMap[winner];
    score[keyToIncrement] += 1;

    //after score was incremented display new score in browser
    messageDisplay()

    //stringify score and store to local storage
    let scoreString = JSON.stringify(score);
    localStorage.setItem('gameScore', scoreString);

    return resultMessage;
}

//reset code
let reset = () => {
    score.userWin = 0;
    score.computerWin = 0;
    score.draw = 0;

    //after score = 0, display it in browser
    messageDisplay()

    //stringify score and store to local storage
    let scoreString = JSON.stringify(score);
    localStorage.setItem('gameScore', scoreString);

    //new message after reset
    let resetMessage = messageParagraph.innerText = `Score was reset! Choose and click a button to start the game!`;

    return resetMessage;
}