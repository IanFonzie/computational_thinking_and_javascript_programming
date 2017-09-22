// function pop(array) {
// 	if (array.length === 0) {
// 		return;
// 	}

// 	var popped = array[array.length - 1];
// 	// Try to keep things functional. Splice
// 	// is probably better than manipulating the
// 	// length property.
// 	array.length -= 1; 

// 	return popped;
// }

function pop(array) {
	var popped = array.splice(array.length - 1)[0];

	return popped;
}

function push(array) {
	var currentArg;

	for (var i = 1; i < arguments.length; i += 1) {
		currentArg = arguments[i];
		array[array.length] = currentArg;
	}

	return array.length;
}

// Buggy Solution:

// function pop(array) {
// 	// Grabs an element beyond the end of the array that is undefined.
//   var poppedElement = array[array.length];
//   // uses square brackets with the splice method and again attempts to
//   // remove an element that is greater than the last index of the array
//   array.splice[array.length];

//   return poppedElement;
// }

// function push(array) {
//   for (var i = 1, length = arguments.length; i < length; i++) {
//   	// Sets the array at index[i] to be arguments[i]
//   	// This will most likely overwrite elements in the array
//   	// if there is more than one element.
//     array[i] = arguments[i];
//   }

//   return array.length;
// }

// function pop(array) {
// 	var poppedElement = array[array.length - 1];
// 	array.splice(array.length - 1);

// 	return poppedElement;
// }

// function push(array) {
// 	for (var i = 1, length = arguments.length; i < length; i += 1)  {
// 		array[array.length] = arguments[i];
// 	}

// 	return array.length;
// }

// Explanation: 

// Returning the last element of an array is straight forward. The key is finding out what the value
// of the last index is. On the other hand removing the lement will involve using Array.prototype.splice().

// The logic for the push function function is similar to the concat functon. It also uses the arguments
// object that is available to functions. The difference between the two is that the array arguments 
// are already treated as one element.

// In this exercise, the solution implemented a similar push and pop function to the built-in methods.
// These methods can be called directly from arrays, like so:

// [1, 2, 3].pop();       // 3
// [1, 2, 3].push('a');   // 4

// Main difference of the built-in bmethods are that both are intentionally generic, meaning the methods
// can be called or applied to objects resembling an array (i.e. the "argument" object that is available
// to functions)

// function pop(arr) {
// 	var arrCopy = [];
// 	var poppedElement;

// 	for (var i = 0; i < arr.length; i++) {
// 		arrCopy[i] = arr[i];
// 	}

// 	poppedElement = arr[arr.length - 1];
// 	arr.length = 0;
// 	for (var i = 0; i < arrCopy.length - 1; i++) {
// 		arr.push(arrCopy[i]);
// 	}

// 	return poppedElement;
// }

// Comment: If we're already manipulating the length anyway, why not just trim the last element like I did?
// i.e. array.length -= 1; Maybe so that we avoid trying to access an index that doesn't exist?