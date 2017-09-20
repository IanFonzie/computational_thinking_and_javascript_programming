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

// function signedIntegerToString(number) {
// 	switch(true) {
// 		case (number < 0): {
// 			return '-' + integerToString(Math.abs(number));
// 		}
// 		case (number > 0): {
// 			return '+' + integerToString(number);
// 		}
// 		default: {
// 			return '0';
// 		}
// 	}
// }

// I used a switch case instead of an if statment. Instead of using double negation I used Math.abs(number)
// to call the integerToString() function with a positive argument. I returned the string '0' if the number
// was actually zero. They just called the function again without prepending a sign.

// Their solution:

function signedIntegerToString(number) {
	if (number < 0) {
		return ('-' + integerToString(-number));
	} else if (number > 0) {
		return ('+' + integerToString(number));
	} else {
		return integerToString(number);
	}
}

// Explanation:
// Checks the sign of the number, and passes control to integerToString for the heavy lifting. One thing to notice
// is the number that it passes to the integerToString function when the value is negative; it's the number multiplied
// by -1. It does this so that the math performed by integerToString  function will work as expected (why we don't need
// a guard clause)