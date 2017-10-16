// High level:

// function reverse(string) {
//   var reverseArr = []; 

//   string.split('').forEach(function(char) {
//   	reverseArr.unshift(char);
//   });

//   return reverseArr.join('');
// }

// Ultra High Level:

// function reverse(string) {
// 	var stringArr = string.split('');
// 	stringArr.reverse();
// 	return stringArr.join('');
// }

// Low level:

function reverse(string) {
	var reversed = '';

	for (var i = string.length - 1; i >= 0; i -= 1) {
		reversed += string[i];
	}

	return reversed;
}

reverse('hello');               // returns "olleh"
reverse('The quick brown fox'); // returns "xof nworb kciuq ehT"

// Thinking in abstractions
// What do we want to do?
// iteration only works going forward
// forEach element in the array we can shift to the current letter to the result array,
// this should build the string in reverse. Then we join the result together.

// Alternatively just start in reverse and set the new array equal to the current element
// and decrement.

// Their abstractions:

// Youc an either use an iterative loop through the string (from the back) and build a new string,
// or use a higher level solution to splitthe string to an array, use the array's reverse method, then
// join the array elements back into a string.

// solution 1:

// function reverse(string) {
//   var newString = '';

//   for (var i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }

//   return newString;
// }

// solution 2:

// function reverse(string) {
// 	return string.split('').reverse().join('');
// }