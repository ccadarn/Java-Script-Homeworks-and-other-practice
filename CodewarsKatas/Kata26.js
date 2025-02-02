/*
Color Ghost
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

let Ghost = function() {
    const colors = ['white', 'yellow', 'purple', 'red'];
    
    this.color = colors[Math.floor(Math.random() * colors.length)];
  };
  
const ghost1 = new Ghost();
console.log(ghost1.color);  // Random color like 'yellow', 'red', etc.

const ghost2 = new Ghost();
console.log(ghost2.color);  // Another random color