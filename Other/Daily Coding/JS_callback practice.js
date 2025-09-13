/*
Practice Exercise
Here is a simple exercise to help you grasp the concept. Don't worry, we'll use only the JavaScript knowledge you already have.

Your Goal: Write a function that greets a user. This function will take two arguments: the user's name (a string) and a callback function.

Create a function called greetUser. It should accept two parameters: name and callback.

Inside greetUser, use console.log() to print a greeting message, like "Hello, [name]!".

After the greeting, call the callback function.

Now, create a separate function called sayGoodbye. Inside it, use console.log() to print a message like "It was nice talking to you. Goodbye!".

Finally, call greetUser, passing in your name ('John') and sayGoodbye as the callback.

By doing this, you're telling JavaScript: "First, run greetUser with my name, and once you're done with that, run sayGoodbye."

Give it a shot, and if you get stuck, we can work through it together.
*/

// -------- Practice ---------callbacks (1)

const sayGoodbye = () => console.log('It was nice talking to you. Goodbye!');


const greetUser = (name, callback) => {
  console.log(`Hello ${name}!`);
  callback();
};

greetUser('John', sayGoodbye);

/*
Practice Exercise 2: The Delayed Callback
We're going to modify the code you just perfected.

Your Goal: Change the greetUser function so that it waits 2 seconds before it says goodbye.

Start with the correct code from our last session.

Inside your greetUser function, remove the direct callback(); line.

Replace it with setTimeout(). The setTimeout function takes two arguments:

The callback function to run.

The time to wait in milliseconds (for 2 seconds, use 2000).

Place your callback function inside the setTimeout.

Take a look at your existing greetUser function. How would you change it to use setTimeout? Give it a try, and if you get stuck, we'll work through it together.
*/

// -------- Practice ---------callbacks (2)

const sayGoodbye2 = () => console.log('It was nice talking to you. Goodbye!');


const greetUser2 = (name, callback) => {
  console.log(`Hello ${name}!`);
  setTimeout(callback, 2000)
};

greetUser2('John', sayGoodbye2);

// -------- Practice ---------callbacks (3)

processData = (data, callback) => {
  setTimeout(() => {
    let upperCase = data.toUpperCase();
    setTimeout(() => {
      let result = `${upperCase} - PROCESSED`;
      callback(result);
    }, 1000)
  }, 1000)
}

let displayResult = string => console.log(string);

processData('hello world', displayResult)



//----------Practice ------ Promises

let processDataPromise2 = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data){
      let upperCase = data.toUpperCase();
      setTimeout(() => {
        let result = `${upperCase} - PROCESSED`;
        return resolve(result);
    }, 1000);
      } else {
        let error = `No data to process`;
        return reject(error);
      }
    },1000);
  })
}

processDataPromise2('Hello World')
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


//----------- refactor code ----------
let processDataPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data){
        return reject(`No data to process`);
      }
    let upperCase = data.toUpperCase();
      setTimeout(() => {
        resolve(`${upperCase} - PROCESSED`);
    }, 1000);
    },1000);
  })
}

processDataPromise('Hello World')
  .then((success) => console.log(success))
  .catch((error) => console.log(error))

//------------ practice ------------
let capitalize = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!string){
        return reject('Please input a string');
      }
      let upperCase = string.toUpperCase();
      resolve(upperCase)
    }, 1000);
  })
}

  // --------- add processed ------------

let addProcessed = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!string){
        return reject('Please input a string');
      }
      resolve(`${string} - PROCESSED`)
    }, 1000);
  })
}

capitalize('Hello World')
  .then((success) => addProcessed(success))
  .then((success) => console.log(success))
  .catch((error) => console.log(error))

capitalize()
  .then((success) => addProcessed(success))
  .then((success) => console.log(success))
  .catch((error) => console.log(error))