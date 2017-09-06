// function substr(string, start, length) {
// 	var substr = '';

// 	if (start < 0) {
// 		start = string.length + start;
// 	}

// 	for (var i = start; i < start + length; i++) {
// 		if (string[i] === undefined) {
// 			break;
// 		}

// 		substr += string[i];
// 	}

// 	return substr;
// }

// needed to retrieve a length character substring from string, starting with the chacracter
// at position index.

// their solution:

function substr(string, start, length) {
	var newString = '';
	var index;

	if (start < 0) {
		start = string.length + start;
	}

	for (var i = 0; i < length; i++) {
		index = start + i;

		if (string[index] === undefined) {
			break;
		}

		newString += string[index];
	}

	return newString;
}

// explanation:

// declare a substring and initialize it to ''. Declare an index variable. if the start
// argument is negative set the argument to be the string length + the negative index.
// which gives a new starting position. Then for as many iterations specified in the 
// length argument an index will be created. This index is equivalent to the start position
// and the current length iteration i.e. if it's the first iteration that starts at 2 then 
// the index will be 2 + 0. This will increase each time the for loop runs. if the character
// at string[index] is undefined we break out of the loop and return the string. Otherwise
// we continue appending the chracter at string[index] to the string until we have iterated
// as many times as specified by the length arugment.

// differences: The major difference between my solution and theirs is that they used an index
// to store the current position and use this calculated value for each iteration, whereas I chose
// to start at the value defined in start and continue until I reached the start value and its
// length offset.

// There is a built-in substr method that you can call from any javascript string that behaves
// similarly to our function:

// var string = 'hello world';

// string.substr(2, 4);     // "llo "
// string.substr(-3, 2);    // "rl"
// string.substr(8, 20);    // "rld"
// string.substr(0, -20);   // ""
// string.substr(0, 0);     // ""
// string.substr(1);        // "ello world"
//                          // goes to the end of the string if the second arg is omitted