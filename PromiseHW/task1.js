/*
Task: File Read and Write
Create a JavaScript program that reads the content of a file asynchronously, processes the content (e.g., convert to uppercase), and then writes the processed content back to another file. Use promises to handle the asynchronous operations.

Create two text files, input.txt and output.txt, with some sample content.

Write a function readFileAsync(filePath) that takes a file path as an argument and returns a promise. The promise should resolve with the content of the file.

Write a function processContent(content) that takes the content of the file and performs some processing (e.g., convert to uppercase). This function should return the processed content.

Write a function writeFileAsync(filePath, content) that takes a file path and content as arguments and returns a promise. The promise should resolve when the content is successfully written to the file.

Use the promises from steps 2, 3, and 4 to read the content of input.txt, process it, and write the processed content to output.txt.

Handle errors appropriately, and ensure that the program gracefully handles situations such as missing files or read/write errors.

*/

const fs = require('fs').promises;

// Function to read a file asynchronously
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then(result => resolve(result))
      .catch(error => reject(new Error(`There is an error in ${filePath}: ${error.message}`)));
  });
}

// Function to process content (example: convert to uppercase)
function processContent(content) {
  return new Promise((resolve,reject) => {
    if(content.length > 0){
      const processedContent = content.toUpperCase();
      resolve(processedContent);
    } else {
        reject(new Error (`File is empty`))
    }
    }) 
  }


// Function to write to a file asynchronously
function writeFileAsync(filePath, content) {
  return new Promise(async (resolve, reject) => {
    try {
      // Read the file to check if it's empty
      const existingContent = await fs.readFile(filePath, 'utf-8');

      if (existingContent.length === 0) {
        // File is empty, proceed with the write operation
        await fs.writeFile(filePath, content, 'utf-8');
        resolve(`File successfully written to: ${filePath}`);
      } else {
        // File is not empty, reject with an error
        reject(new Error(`Unable to write to ${filePath}, file is not empty`));
      }
    } catch (error) {
      // Handle read or write errors
      reject(new Error(`Unable to write to file: ${error.message}`));
    }
  });
}

async function toUpperCase(inputFilePath, outputFilePath) {
  try {
    const content = await readFileAsync(inputFilePath);
    const processedContent = await processContent(content);
    await writeFileAsync(outputFilePath, processedContent);
    console.log(`Content from ${inputFilePath} was successfully changed to Upper Case and written to ${outputFilePath}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

//Example
const inputFilePath = 'task1 files\\input.txt';
const outputFilePath = 'task1 files\\output.txt';

// Call the function
toUpperCase(inputFilePath, outputFilePath);
