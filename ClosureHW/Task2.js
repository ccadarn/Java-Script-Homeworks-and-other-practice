/*
Private Variables:
Implement a function createPerson that takes a name as an argument and returns an object with a method getName. The getName method, when called, should return the person's name.
*/

let createPerson = (name) => {
    return {
        firstName: name,
        getName() {
        return `${this.firstName}`;
      }
    }
}

let john = createPerson('John');
console.log(john.getName()); // Output: John