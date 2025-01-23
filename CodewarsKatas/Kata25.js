/*
Write a class Block that creates a block (Duh..)

Requirements
The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
*/

class Block {
    constructor(data) {
      this.width = data[0];
      this.length = data[1];
      this.height = data[2];
    }
  
    getWidth = () => this.width;
    getLength = () => this.length;
    getHeight = () => this.height;
    getVolume = () => this.width * this.length * this.height;
    getSurfaceArea = () => 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
  }
  
  // Example usage:
  const block = new Block([2, 4, 6]);
  
  console.log("Width:", block.getWidth()); // Output: 2
  console.log("Length:", block.getLength()); // Output: 4
  console.log("Height:", block.getHeight()); // Output: 6
  console.log("Volume:", block.getVolume()); // Output: 48
  console.log("Surface Area:", block.getSurfaceArea()); // Output: 88