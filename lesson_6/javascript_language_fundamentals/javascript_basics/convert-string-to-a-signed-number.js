// var DIGITS =	{
// 	'0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
// 	'5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
// };

// function stringToSignedInteger(string) {
// 	var value = 0;
// 	var numbers = stringToNumbers(string);
// 	var sign;
// 	if (!numbers[0]) {
// 		numbers.shift();
// 		sign = string.slice(0, 1);
// 	}

// 	for (var i = 0; i < numbers.length; i += 1) {
// 		value = 10 * value + numbers[i];
// 	}

// 	if (sign) {
// 		value = sign.match(/-/) ? -value : value;
// 	}

// 	return value;
// }

// function stringToNumbers(string) {
// 	var result = [];
// 	for (var i = 0; i < string.length; i += 1) {
// 		result.push(DIGITS[string[i]]);
// 	}

// 	return result;
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

function stringToSignedInteger(string) {
	switch (string[0]) {
		case '-': {
			return -stringToInteger(string.slice(1));
		}
		case '+': {
			return stringToInteger(string.slice(1));
		}
		default: {
			return stringToInteger(string);
		}
	}
}

// My solution tried to modify the existing stringToSignedInteger function, whereas
// they simply reused it. This is something that I need to remember when developing;
// to reuse solutions when we are being asked to modify something instead of completely
// reengineering the original function/problem

// Their explanation: The solution looks at the first character of the string then reuses
// the solution from the previous exercise. If the character is a -, then the solution
// just negates the result of the stringToInteger function. if it's + or if there is no
// sign then it returns the result of the stringToInteger as is.

// An aspect of the function to not eis the use of string.slice(1) to obtain the remainder
// of the string after a leading + or -. This notation simply means to extract the characters
// starting at index 1 of the string until the last character. When there is a second argument 
// (i.e. string.slice(1, 5) ) it will extract the characters starting at index 1 up to but 
// excluding index 5. 

// My solution was still valid.