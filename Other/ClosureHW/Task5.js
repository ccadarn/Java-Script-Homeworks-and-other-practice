/*
Callback with Closure:
Write a function delayedGreet that takes a greeting and a delay time. It should return a closure that, when called after the specified delay, logs the greeting.
*/

let delayedGreet = (delayTimer) => {
    return (greet) => {
      setTimeout(() => {
        console.log(greet);
      }, delayTimer);
    };
  }
  
  let delayByFive = delayedGreet(5000); // Set delay to 5000 milliseconds (5 seconds)
  
  delayByFive('Happy Birthday!');
  