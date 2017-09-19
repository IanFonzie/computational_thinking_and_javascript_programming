// function stringToInteger(string) {
// 	var digits = {
// 		'0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
// 		'5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// 	};
// 	var number = 0;
// 	var multiple;

// 	for (var i = 0; i < string.length; i++) {
// 		if (digits[string[i]]) {
// 			if (i !== string.length - 1) {
// 				multiple = 10;
// 				// Check number of remaining digits
// 				for (var j = 0; j < string.length - i - 2; j++) {
// 					multiple *= 10;
// 				}

// 				number += digits[string[i]] * multiple;
// 			} else {
// 				number += digits[string[i]];
// 			}
// 		}
// 	}

// 	return number;
// }

// Their solution:

var DIGITS = {
	'0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
	var value = 0;
	var numbers = stringToNumbers(string);
	for (var i = 0; i < numbers.length; i++) {
		value = 10 * value + numbers[i];
	}

	return value;
}

function stringToNumbers(string) {
	var result = [];
	for (var i = 0; i < string.length; i++) {
		result.push(DIGITS[string[i]]);
	}

	return result;
}

// How it works: they created an object that maps strings to digits. They then declare
// a value variable and initialize it to 0; this value variable will hold the final 
// numerical value. They then create an array of numbers using the string that was passed 
// in by creating a helper method that loops through the string, searches for the numeric value 
// in the object and then pushes this result to a new result array that is returned to the
// string to integer method.

// Here is where their solution gets interesting. They loop through the newly created array of
// numbers and then set the value to be 10 times the current value + the current number in the
// array. For '4321' this sequence would be: 0 * 10 + 4 = 4, 4 * 10 + 3 = 43, 43 * 10 + 2 = 432,
// 432 * 10 + 1 = 4321. I would not have though to do this.

// In my solution I looked to see if the array contained the digits, and if it was not the last
// digit in the string then I would set a multiplier to 10 and count the difference between the
// the string length and the current index - 2, to determine the number of decimal places to the
// right of the base number. For each decimal digit greater than the first digit in the string I 
// would multiply the multiplier by 10. When I reached the maximum of zeros I would then exit the
// for loop and add the number times the multiplier to the return value number.

// Their explanation: The approach uses a DIGITS object as a lookup to convert each of the digit
// characterrs into a digit number. The stringToNumbers function handles this conversion. The
// function iterates over every character and correspondingly gets the digit equivalent. The 
// stringToNumbers function returns an array of digits.

// Using the arraym the solution performs the computation of the value of the digits when put
// together. The actual computation of the numeric string is strictly mechanical. It takes each
// digit and adds it to 10 times the previously calculated value which quickly and easily gives 
// the desired result. See the following for 431:

// 10 * 0 + 4 -> 4
// 10 * 4 + 3 -> 43
// 10 * 43 + 1 -> 431

// There are a number of built in methods that you can use to convert a string to number. For this
// one, lets have a look at parseInt. This built-in functionis called in the global/window context.
// it takes two arguments: a string and a radix

// parseInt('E', 16);		// 14
// parseInt('015', 10);	// 15
// parseInt('F5');				// NaN
// parseInt('F5', 16)		// 245

// compared to the built-in method, the one the solution implements is less robust. The built-in
// function is able to accurately convert from a wider range of string inputs via the radix
// parameter.