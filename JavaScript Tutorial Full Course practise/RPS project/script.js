// ---- starting variables ----
//Application state

let score;

//Image display map
const moveDisplayMap = {
    'Rock': 'Rock ✊',
    'Paper': 'Paper 📜',
    'Scissors': 'Scissors ✂️'
};

//key mapping
const winnerToKeyMap = {
    'You win!': 'userWin',
    'Computer wins!': 'computerWin',
    'Its a draw!': 'draw',
};

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

//event listeners for browser buttons
rockButton.addEventListener('click', () => {playGame('Rock')});
paperButton.addEventListener('click', () => {playGame('Paper')});
scissorsButton.addEventListener('click', () => {playGame('Scissors')});

resetButton.addEventListener('click', () => {reset()})

//event listeners for keyboard buttons (Left, Down, Right for moves and Up for reset)
document.body.addEventListener('keydown', (event) => {
    if(event.key ==='ArrowLeft'){
        playGame('Rock');
    } else if(event.key === 'ArrowDown'){
        playGame('Paper');
    } else if(event.key === 'ArrowRight'){
        playGame('Scissors');
    } else if(event.key === 'ArrowUp'){
        reset();
    }
});

//message code
let messageDisplay = () => {
    winDisplay.innerText = score.userWin;
    loseDisplay.innerText = score.computerWin;
    drawDisplay.innerText = score.draw;
}

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
    const winConditions = {
    'Rock': 'Scissors',
    'Paper': 'Rock',
    'Scissors': 'Paper'
    };

    if(getHumanMove === getComputerMove){
        return 'Its a draw!'
    } else if (winConditions[getHumanMove] === getComputerMove){
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

//helper function to handle message display in browser and score storage in functions below
let updateScoreAndStorage = () => {
    messageDisplay();
    
    let scoreString = JSON.stringify(score);
    localStorage.setItem('gameScore', scoreString);
};

//helper function to handle message update in DOM
let updateMessageDisplay = (text) => {
        messageParagraph.innerText = text;
};

//result code
let playGame = (playerMove) => {
    let computerMove = getComputerMove();
    let winner = determineWinner(playerMove, computerMove);

    //increment score
    let keyToIncrement = winnerToKeyMap[winner];
    score[keyToIncrement] += 1;

    //displaying new score + store it
    updateScoreAndStorage()    

    //result message
    let resultMessage = `You picked ${moveDisplayMap[playerMove]}, computer picked ${moveDisplayMap[computerMove]}, ${winner}`;

    //using helper function to display result text in browser
    updateMessageDisplay(resultMessage);
}

//reset code
let reset = () => {
    score.userWin = 0;
    score.computerWin = 0;
    score.draw = 0;

    //after score is 0, display it + store
    updateScoreAndStorage()

    //new result message after reset
    let resetMessage = `Score was reset! Choose and click a button to start the game!`;

    //using helper function to display result text in browser
    updateMessageDisplay(resetMessage);
}

//function to initialize starting settings
let gameStart = () => {
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

    //display score after checking object values
    messageDisplay();
}

//running function to start the game
gameStart();