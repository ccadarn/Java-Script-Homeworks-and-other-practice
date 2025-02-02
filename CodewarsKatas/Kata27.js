/*
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. 
It should have a toString method that returns a human readable string indicating the argument information passed in. 
It should also allow the name property to be set.
*/

class Animal {
    constructor(name, type) {
      // Use a backing property for name
      this._name = name;
      this.type = type;
    }
    
    // Getter for name
    get name() {
      return this._name;
    }
    
    // Setter for name
    set name(newName) {
      if (typeof newName !== 'string') {
        throw new Error('Name must be a string.');
      }
      this._name = newName;
    }
    
    // Define the toString() method
    toString() {
      return `${this.name} is a ${this.type}`;
    }
  }

  const animal = new Animal("Charlie", "dog");
console.log(animal.toString()); // "Charlie is a dog"

animal.name = "Max";  // Using the setter to update the name
console.log(animal.toString()); // "Max is a dog"    