logValue();

function logValue() {
  console.log('Hello, world!');
}

// Function delcarations, including the entire function body, are hoisted to the top of their scope.
// The equivalent code in this situation would be:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue();

// Therefore this code will log 'Hello, world!'.

// Explanation: hoisting is the process of finding and associating variable declarations with their
// respective scope prior to the execution of all other code. Just like it hoists variables, the JS
// interpreter also hoists function declarations. However, ulike the way it hoists variables, it hoists
// entire function declarations including the code blocks. This means that the program can execute 
// functions even before declaring it.

// code after hoisting:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue();

// Further Exploration:

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// logValue will be a string. The reason for this is that the function is hoisted before
// the variable. Since logValue is already defined, logValue is reassigned to the string
// 'foo', i.e. no separate declaration is made for it. We can see evidence of this if we
// try to call logValue as a function and we receive a TypeError: log value is not a 
// function

// Hoisted equivalent:

// function logValue() {
//   console.log('Hello, world!');
// }

// logValue = 'foo';

// console.log(typeof logValue);
