// function repeat(string, times) {
// 	if (times < 0 || Number(times) !== times) {
// 		return;
// 	}

// 	var repeatString = '';
// 	for (var i = 0; i < times; i++) {
// 		repeatString += string;
// 	}

// 	return repeatString;
// }

// after looking at the hint:

// function repeat(string, times) {
// 	if (times < 0 || isNaN(times)) {
// 		return;
// 	}

// 	var repeatString = '';
// 	for (var i = 0; i < times; i++) {
// 		repeatString += string;
// 	}

// 	return repeatString;
// }

function repeat(string, times) {
	var repeated = '';

	if (times < 0 || isNaN(times)) {
		return undefined;
	}

	for (var i = 0; i < times; i++) {
		repeated += string;
	}

	return repeated;
}

// explanation:

// declare a repeat string (I personally feel that mine is better because it occurs after the guard clause.
// we don't waste resources setting up the string if it won't be accepted anyway). Then we check if times
// is negative or not a number and return undefined if it is. (seems to implicitly return undefined, so their
// return undefined statement seems redundant.)

// Then you concatenate the string with each iteration of the loop and return the repeat string.

// built in function repeat that you can call with any JS string. built in method is more powerful because it handles
// floating point times parameters and ensure sthat times is a 31-bit integer for optimization.