// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + (counter * rate));

// function counter(count) {
//   // ...
// }

// counter function is hoisted. counter is reassigned to a variable 5.
// This will log the The total value is 15.

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + (counter * rate));

// var counter = 5;
// var rate = 3;

// counter declaration and assignmnet is actually just a reassignment. Will probably get a referenceError
// or simply just the function body * rate which should give us NaN. Since arithmetic operators other than
// + are not defiend for anything other than numbers, JavaScript will try to convert both to numbers and 
// neither is able to convert, so they both both become NaN. Anything * NaN will return NaN. Therefore, 
// this will log 'The total value is NaN'

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + (counter * rate));

// counter function will be hoisted above the variable declaration. counter will be reassigned to 5 and rate
// will be declared and assigned to 3. This should give us 'The total value is 15'.

// Their Solution

// There are two concepts that come into play here; one is hoisting and the second is function declaration.

// With regards to function declaration. The key thing to note is that it is similar to variable declaration.
// A function declaration creates a variable with its name being the name of the function. 

// For hoisting, remember that a function declara

// Finally, while both function adn variable declarations are hoisted, it is functions that are hoisted first
// with the succeeding variable declaration with a similar name (i.e. counter) considered as duplicate.

// After hoisting, the code snippets become the following:

// function counter(count) {
// 	// ...
// }

// var rate;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + (counter * rate));

// got the right answer but when I visualized it I should've moved all declarations to the top, even if they occured
// at the same time, as was the case with rate.

// function counter(count) {
// 	// ...
// }

// var rate;

// console.log('The total value is ' + (counter * rate)); // The total value is NaN

// counter = 5;
// rate = 3;

// function counter(count) {
// 	// ...
// }

// var rate;

// counter = 5;
// rate = 3;

// console.log('The total value is ' + (counter * rate)); // The total value is 15.

// Notice that with hoisting that the first and third code snippets effectively become the same. Notice also,
// that in all three code snippets that the variable declaration for counter is forgone since there is a function
// declaration with the same name. The differentiating factor for the second code snippet is the position of the
// console.log with respect to the "variable assignment". For code snippet 2, the assignment happens after the log
// and as such results in NaN when it evaluates counter * rate.