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
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf-8')
      .then(result => resolve(result))
      .catch(error => reject(new Error(`Unable to read ${filePath} or write ${content}: ${error.message}`)));
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
const inputFilePath = 'D:\\Projects\\Homeworks\\PromisePracticeFiles\\input.txt';
const outputFilePath = 'D:\\Projects\\Homeworks\\PromisePracticeFiles\\output.txt';

// Call the function
toUpperCase(inputFilePath, outputFilePath);
