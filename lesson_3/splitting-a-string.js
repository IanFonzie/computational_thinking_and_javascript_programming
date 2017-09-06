// function splitString(string, delimiter) {
// 	if (delimiter === undefined) {
// 		console.log('ERROR: No delimiter');
// 		return;
// 	}

// 	var splitString = '';
// 	for (var i = 0; i < string.length; i++) {
// 		if (delimiter === '') {
// 			console.log(string[i]);
// 		} else if (string[i] === delimiter || i === string.length - 1) {
// 			if (i === string.length - 1 && string[string.length - 1] !== delimiter) {
// 				console.log(splitString + string[string.length - 1])
// 			} else {
// 				console.log(splitString);
// 			}

// 			splitString = '';
// 		} else if (string[i] !== delimiter) {
// 			splitString += string[i];
// 		} 

// 	}
// }

// Refactored Solution (the way I actually wanted to do it):
// I forgot that when you check the truthiness of strings, the empty string
// evaluates to false, so the second empty string in splitString(';hello;', ';')
// would not have gotten logged like I thought it would.

// function splitString(string, delimiter) {
// 	if (delimiter === undefined) {
// 		console.log('ERROR: No delimiter');
// 		return;
// 	}

// 	var splitString = '';
// 	for (var i = 0; i < string.length; i++) {
// 		if (delimiter === '') {
// 			console.log(string[i]);
// 		} else if (string[i] === delimiter) {
// 			console.log(splitString);
// 			splitString = '';
// 		} else {
// 			splitString += string[i];
// 		} 
// 	}

// 	if (splitString) {
// 			console.log(splitString);
// 	}
// }

function splitString(string, delimiter) {
	if (delimiter === undefined) {
		console.log('ERROR: No delimiter');
		return;
	}

	var tempString = '';
	for (var i = 0; i < string.length; i++) {
		if (string[i] === delimiter) {
			console.log(tempString);
			tempString = '';
		} else if (delimiter === '') {
			console.log(string[i]);
		} else {
			tempString += string[i];
		}
	}

	if (tempString) {
		console.log(tempString);
	}
}

// Checks to see if the delimiter exists as a guard clause. if it is then we initialize the tempString
// (wouldn't make sense to do this before if the function is going to exit anyway). for each character
// in string (string.length), we check to see if the current character is equal to the delimiter. if it
// is we log the tempString and reset its value. if the delimiter is equal to nothing then we log each 
// character of the string separatly and if the current character is not the delimiter we add it to the
// string. When it gets to the length of the string it will check if there are any values left in the
// tempString and if there are it will log them. 

// One other mistake I would have made is that I did not know where to place the remainder tempString logic.
// I initially wanted to put it in the loop but this would have simply printed out the content of the tempString
// at the end of each loop. Probably could have figured this out with trial and error.

// There is a built in function for this called split that you can call with any string in javascript. This method
// does not log results to the console but instead returns an array of split strings. Also possible to use regular
// expressions with this.