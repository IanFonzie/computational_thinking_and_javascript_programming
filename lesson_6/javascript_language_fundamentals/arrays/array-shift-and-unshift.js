function shift(array) {
	var shifted = array[0];
	for (var i = 0; i < array.length; i += 1) {
		array[i] = array[i + 1];
	}

	array.length -= 1;
	return shifted;
}

function unshift(array) {
	var unshifted = arguments.length - 1;

	for (var i = array.length + unshifted - 1; i >= 0; i -= 1) {
		array[i] = array[i - unshifted];
	}

	for (var i = 0; i < unshifted; i += 1) {
		array[i] = arguments[i + 1];
	}

	return array.length;
}

// Their Solution:

// function shift(array) {
// 	var result;
// 	if (array.length !== 0) {
// 		result = array.splice(0, 1).pop();
// 	}

// 	return result;
// }

// function unshift(array) {
// 	for (var index = 1; index < arguments.length; ++index) {
// 		array.splice(index - 1, 0, arguments[index]);
// 	}

// 	return array.length;
// }

// I did not think to use splice to implement these methods. Though I see how they are more effective
// than my solution.

// Explanation:

// The shift function starts by declaring a result variable. If the array passed has the length 0, the solution
// returns the value of the result (undefined) as is. If the length is greater than zero it uses the 
// Array.prototype.splice method to remove and return the first element. Since the return value of splice is an
// array, the solution uses Array.prototype.pop() to get the value and consequently store it in the result variable.

// The unshift function loops through the arguments object to incrementally add elements to the front of the array.
// It uses the splice method to add one element at a time. Take note of the deleteCount value passed to the splice 
// method. It's a 0 so that no element gets removed from the original array.

// Array.prototype.splice manipulates an array by removing and/or adding elements to it. For this exercise, the shift
// function uses it to remove an element while splice uses it to add elements.

// The built-in Array.prototype.shift() and Array.prototype.unshift() methods can be called directly from array objects

// Further Exploration:

// My original solution does not use the Array.prototype.splice() method.