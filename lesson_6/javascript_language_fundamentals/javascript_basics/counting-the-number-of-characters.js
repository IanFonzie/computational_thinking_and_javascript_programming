var phrase = prompt('Please write a phrase:');
// var numberOfCharacters = phrase.replace(/\s/g, '').length;
var numberOfCharacters = phrase.replace(/[^a-z]/gi, '').length;

console.log('There are ' + numberOfCharacters + ' characters in "' + phrase + '".');

// Strings are a primitive and an object. As an object it can use the STring.prototype.length
// property to get the number of characters.