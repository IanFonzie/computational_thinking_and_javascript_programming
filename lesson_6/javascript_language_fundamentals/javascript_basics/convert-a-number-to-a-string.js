// var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// function integerToString(number) {
// 	var string = '';
// 	var decimals;
// 	var baseNum;

// 	while (number !== 0) {
// 		decimals = numberToSubtract(number);
// 		baseNum = decimals;
// 		while (baseNum > 9) {
// 			baseNum /= 10;
// 		}

// 		number -= decimals;
// 		string = string.concat(DIGITS[baseNum]);
// 		if (decimals > 9 && number === 0) {
// 			string = string.concat(padZeros(decimals));
// 		}
// 	}

// 	return string || '0';
// }

// function numberToSubtract(number) {
// 	var multiple = 0;
// 	var intNumber = 0;

// 	while (number > 9) {
// 		number /= 10;
// 		multiple += 1;
// 	}

// 	while (number >= 1) {
// 		number -= 1;
// 		intNumber += 1;
// 	}

// 	for (var i = 0; i < multiple; i += 1) {
// 		intNumber *= 10;
// 	}

// 	return intNumber;
// }

// function padZeros(number) {
// 	var zeros = '';

// 	while (number > 9) {
// 		zeros = zeros.concat('0');
// 		number /= 10;
// 	}

// 	return zeros;
// }

var DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
	var result = "";
	var remainder;

	do {
		// Store the last digit
		remainder = number % 10;
		// Trim the last digit
		number = Math.floor(number / 10)

		result = DIGITS[remainder] + result;
	} while (number > 0)

	return result;
}

// This was another case of me not knowing the "trick", I did think to use Math.floor(number / 10)
// and also recognized that number % 10 would trim the last digit though I felt that since we were 
// trying to use minimal built-in methods that I would try to think my way through the problem.

// What they did was what I essentially wanted to do. They used a do while loop to divide the number
// by 10 along with Math.floor to trim the last decimal digit. During this process the final digit
// would be stored to a variable and then append the result to the remainder string digit. The loop
// would terminate when the number was less than or equal 0.

// Their explanation:

// Similar to stringToInteger, the solution also uses a lookup in the form of an array. In building the
// DIGITS lookup, we just need to be mindful to align the string to the array index position so that
// when we do something like DIGITS[5] we get the string representation of the number/index 5.

// The tricky part in the function is the "Math" for getting the numbers piece by piece. The solution
// gerts the rightmsot number (a one's digit) by getting the remainder of diving the number by 10. For
// instance 4321 % 10 retruns 1. The solution then chops the rightmost digit to get the next by 
// reassigning the value of number to the result of Math.floor(number / 10). Consequently, the result
// is incrementally built by prepending the looked up value, using the remainder as index, to the previous
// value of result. This process repeats until the value of number becomes 0.

// For this exercise we looked at the number.prototype.toString(). Compared to its counterpart approach
// of prepending a ' ' to a number, this is more explicit. THe number object can also directly call it.

// Notice that when using the built-in method that parentheses enclose the number. This is necessary so
// that the JS interpreter knows to use the number as a Number object. As an object it can access the
// built-in methods under Number.prototype. JavaScript's built-in method is also more powerful than the
// one the solution implemented. It can, as an argument, have an optional radix value. Using the radix
// value it can convert from base 2 up to base 36 any number input.

// One final note: the AirBnb style guide calls for using the construction function String() in preference
// to toString(). The reason for this is twofold:

// * String() works will all types, including null and undefined, while toString() raises an exception
// in those cases.
// * String() is guaranteed to return a String. This is not the case with toString() - individual objects
// can override toString(), and they don't have to return a String.