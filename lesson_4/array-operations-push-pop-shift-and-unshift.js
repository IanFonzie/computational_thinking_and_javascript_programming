function push(arr, object) {
	arr[arr.length] = object;
	return arr.length;
}

// This method mutates the array because it is appending a new value to the existing array.
// If we try to access the original array, then we see that the object / value specified in 
// push has been added to it.

function pop(arr) {
	var popped = arr[arr.length - 1];
	arr.length = arr.length - 1;
	return popped;
}

// basically have the same solution as these guys, they aliased the arr.length - 1 as newLength.
This method mutates the array because it is altering the length of the existing array. After
// we call the function and try to access the original array we see that the original array is now
// one element shorter than it was before.

// function unshift(arr, object) {
// 	arr.length += 1;

// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		arr[i] = arr[i - 1];
// 	}

// 	arr[0] = object;
// 	return arr.length;
// }

// Essentially had the same solution yet again. I forgot that arr.length is always 1 greater than the
// last index. To compensate for this I added one to the length of the array which would create an
// array that was the original array with an undefined value inserted at the end. then I would start with
// the last value and set the current value to equal the one before it (since we are using negative
// iteration this would be a number that is one less than the current index). I then set the first object
// in the array to equal the object argument. If i removed this and changed the length to equal the array
// length then the solution would still work because we automatically automatically create a new value when
// using the array bracket notation at an index that doesn't exist yet (i.e. one greater than the current
// array.) I'm also looping until i >= 0 which means I will pull an undefined value at arr[i] === 0 but this
// gets over written by the next statement array[0] = value;

// rewrite: 

function unshift(arr, object) {
	for (var i = arr.length; i > 0; i--) {
		arr[i] = arr[i - 1];
	}

	arr[0] = object
	return arr.length;
}

// This method mutates the array because it is shifting all of the elements in the array
// one spot over to the left and inserting a new value into the first index of the array.
// After the user calls unshift and tries to access the original array you will see that 
// the object argument has been added to the first index of the array.

function shift(arr) {
	var shiftValue = arr[0];

	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i + 1]
	}

	arr.length -= 1;
	return shiftValue;
}

// I used almost the exact same solution that they had except they only went until
// array.length - 1. Their solution stops at the second to last element which 
// prevents the method from accessing an array index that hasn't been defined yet/
// is out of bounds

// function shift(array) {
// 	var first = array[0];
// 	for (var i = 0; i < array.length - 1; i++) {
// 		array[i] = array[i + 1];
// 	}

// 	array.length = array.length - 1;
// 	return first;
// }

// This method mutates the array because it is shifting all elements beyond the first
// one to the the array one space to the left and then altering the length of the 
// array to be one less than its current value. If we try to access the array after
// calling the shift argument we will see that these changes have altered the original
// array object.