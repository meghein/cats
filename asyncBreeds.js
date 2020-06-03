const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackFunction) {
  // First readFile looks for file in database... which could take a while:
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    /* Instead of using return data, we would have to modify our
      breedDetailsFromFile function to give back the data without using return.
      Since the breedDetailsFromFile function has already finished executing before we get our data back from the file system, it is not possible to return data in the synchronous way that we are attempting here. */
    if (!error) {
      callbackFunction(data)
    } else {
      callbackFunction(undefined)
    }
  });
};

// THIS callback function will run in place of a return:
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed) 
};

// Now passing two arguments into breedDetailsFromFile: 'breed string' and a callback function declaration.
// breedDetailsFromFile('Bombay', printOutCatBreed);

module.exports = breedDetailsFromFile;