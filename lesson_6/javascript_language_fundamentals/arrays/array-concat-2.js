// function concat(array1) {
// 	var newArray = [];

// 	for (var i = 0, length = array1.length; i < length; i += 1) {
// 		newArray[i] = array1[i];
// 	}

// 	for (var i = 1; i < arguments.length; i += 1) {
// 		if (Array.isArray(arguments[i])) {
// 			for (var j = 0, length = arguments[i].length; j < length; j += 1) {
// 				newArray[newArray.length] = arguments[i][j];
// 			}
// 		} else {
// 			newArray[newArray.length] = arguments[i];
// 		}
// 	}
	

// 	return newArray;
// }

// Their solution:

function concat() {
	var newArray = [];
	var currentArg;

	for (var i = 0; i < arguments.length; i += 1) {
		currentArg = arguments[i];
		if (Array.isArray(currentArg)) {
			for (var j = 0; j < currentArg.length; j += 1) {
				newArray[newArray.length] = currentArg[j];
			}
		} else {
			newArray[newArray.length] = currentArg;
		}
	}

	return newArray;
}

// Differences:

// Solutions were nearly Identical except I built the first array to use as a base and kept it as an argument.
// Instead of iterating over the arguments starting at a var i = 0, I started at var i = 1.

// Explanation:

// The main difference with this solution is the addition of another loop and the removal of the initial iteration;
// given that there is a variable number of arguments the solution just delegates to the outer loop the initial
// iteration. The outer loop iterates over the arguments using the arguments object that is available to all functions.