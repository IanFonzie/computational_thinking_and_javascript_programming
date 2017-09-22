// function reverse(inputForReversal) {
// 	if (Array.isArray(inputForReversal)) {
// 		return reverseArray(inputForReversal);
// 	} else {
// 		return reverseString(inputForReversal);
// 	}
// }

// function reverseArray(array) {
// 	var reversed = [];

// 	for (var i = array.length - 1; i >= 0; i -= 1) {
// 		reversed.push(array[i]);
// 	}

// 	return reversed;
// }

// function reverseString(string) {
// 	var stringArray = string.split('');
// 	return reverseArray(stringArray).join('');
// }

// Knew that a method shouldn't be doing two things, will rewrite.

// Buggy Solution:

// function reverse(inputForReversal) {
// 	if (Array.isArray(inputForReversal)) {
// 		return reverseArray(inputForReversal);
// 	} else {
// 		return reverseString(inputForReversal);
// 	}
// }

// function reverseArray(inputForReversal) {
// 	var reversed = [];
// 	for (var i = 0, length = inputForReversal.length; i < length; i++) {
// 		// Will get an off by one bug here, where we length - i will equal
// 		// 4 and we will try to access the reversed index at one above it's 
// 		// actual length (reversed[4]). This will cause the first element to
// 		// be undefined
// 		reversed[length - i] = inputForReversal[i];
// 	}

// 	return reversed;
// }

// function reverseString(inputForReversal) {
// 	// Creates a new global property/variable
// 	stringArray = inputForReversal.split('');
// 	// Buggy reverseArray function is still being called
// 	return reverseArray(stringArray).join('');
// }

function reverse(inputForReversal) {
	if (Array.isArray(inputForReversal)) {
		return reverseArray(inputForReversal);
	} else {
		return reverseString(inputForReversal);
	}
}

function reverseArray(inputForReversal) {
	var reversed = [];
	for (var i = 0, length = inputForReversal.length; i < length; i++) {
		reversed[length - i - 1] = inputForReversal[i];
	}

	return reversed;
}

function reverseString(inputForReversal) {
	stringArray = inputForReversal.split('');
	return reverseArray(stringArray).join('');
}

// The first step in solving the problem is by identifying input. Once identified, the next
// step is to do the reversal based on the input type.

// The solution uses separate functions to reverse the input; one for each with the one for
// strings leveraging the one for arrays. The function for array reversal declares and 
// consequently returns a variable that is incrementally built using a loop that iterates over
// all the characters/elements of the string/array starting from the end. The function for the
// string starts splitting it into characters, then calling the array reversal function and then
// joining the characters at the end.

// The function implemented for this exercise is similar to the built-in Array.prototype.reverse()
// method. The main difference is that the built in method reverses arrays in place and that it is
// called directly from the array object.