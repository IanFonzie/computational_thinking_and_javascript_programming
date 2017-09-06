function lastInArray(arr) {
	return arr[arr.length - 1];
}

function rollCall(names) {
	for (var i = 0; i < names.length; i++) {
		console.log(names[i]);
	}
}

// function reverse(arr) {
// 	var reversedArray = [];
// 	var newCounter = 0;

// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		reversedArray[newCounter] = arr[i];
// 		newCounter++;
// 	}

// 	return reversedArray;
// }

// didn't realize we could literally use the push function, will rewrite:

function reverse(arr) {
	var reversedArray = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		reversedArray.push(arr[i]);
	}

	return reversedArray;
}

function firstInstance(arr, val) {
	var firstInstance = -1;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			firstInstance = i;
			break;
		}

	}
	return firstInstance;
}

// function join(arr) {
// 	var joinString = '';
// 	var element;

// 	for (var i = 0; i < arr.length; i++) {
// 		element = String(arr[i]);
// 		joinString += element;
// 	}

// 	return joinString;
// }

// my soluton was a bit verbose, after rewriting:

function join(arr) {
	var joinString = '';

	for (var i = 0; i < arr.length; i++) {
		joinString += String(arr[i]);
	}

	return joinString;
}