// var number1 = prompt('Enter the first number:');
// var number2 = prompt('Enter the second number:');

// console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
// console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
// console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
// console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
// console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
// console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// I was not paying attention to the fact that the program did not explicitly coerce the numbers.
// The program did not work the way I expected because + method is defined for the string object
// and treated both numbers as strings that it would then concatenate. The other methods did work 
// as expected because they are not defined for strings and therefore JavaScript tried to coerce
// them in to numbers.

// You can fix this by explciitly coercing the input strings into numbers using the Number(string)
// or parseInt(string, radix) functions.

var number1 = parseInt(prompt('Enter the first number:'), 10);
var number2 = parseInt(prompt('Enter the second number:'), 10);

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));

// Solution uses explicit primitive type coercions, via parseInt, so that we have better
// control of the outcome.