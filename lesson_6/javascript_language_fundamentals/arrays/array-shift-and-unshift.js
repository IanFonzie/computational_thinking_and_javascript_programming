// function shift(array) {
// 	var shifted = array[0];
// 	for (var i = 0; i < array.length; i += 1) {
// 		array[i] = array[i + 1];
// 	}

// 	array.splice(array.length - 1);
// 	return shifted;
// }

// function unshift(array) {
// 	var unshifted = arguments.length - 1;

// 	for (var i = array.length + unshifted - 1; i >= 0; i -= 1) {
// 		array[i] = array[i - unshifted];
// 	}

// 	for (var i = 0; i < unshifted; i += 1) {
// 		array[i] = arguments[i + 1];
// 	}

// 	return array.length;
// }

// Their Solution

function shift(array) {
	var result;
	if (array.length !== 0) {
		result = array.splice(0, 1).pop();
	}

	return result;
}

function unshift(array) {
	for (var index = 1; index < arguments.length; ++index) {
		array.splice(index - 1, 0, arguments[index]);
	}

	return array.length;
}