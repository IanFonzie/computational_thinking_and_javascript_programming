function rotateRightmostDigits(number, n) {
	var numChars = n
	var numberArr = String(number).split('');
	if (numChars > numberArr.length) {
		numChars = numberArr.length;
	}

	var lastDigits = numberArr.splice(numberArr.length - numChars);
	var rotated = rotate(lastDigits);
	numberArr = numberArr.concat(rotated);
	return Number(numberArr.join(''));
}

function rotate(array) {
	return array.slice(1).concat(array[0]);
}

console.log(rotateRightmostDigits(1, 1))					  // 1
// if n > String(number).length; n becomes String(number).length
console.log(rotateRightmostDigits(1, 2))						// 1
console.log(rotateRightmostDigits(1, 0))						// 1
console.log(rotateRightmostDigits(219, 4))					// 192
console.log(rotateRightmostDigits(219, 0))					// 219	 
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917


/*

input: a number, and a rotation amount, n
output: a number with the last n digits rotated one digit to the left

definitions:
- given a rotation amount, n 
- take the last n digits of the number
- Move the first digit to the end of the number

rules: 
- convert numbers to string and the string to an array
- take number.length - 1 - n and slice at that index
- rotate the first number to the last position
- concat the number array up to the slice position and the rotated array
- join them together and convert them to a number

Test cases:
cases for: 1 digit number
rotateRightmostDigits(1, 1)						 // 1
// if n > String(number).length; n becomes String(number).length
rotateRightmostDigits(1, 2)						 // 1
rotateRightmostDigits(1, 0)						 // 1
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


data structure: array of numbers is easiest to work with

algorithm:
- String(number).split('')
- lastDigits = numArray.splice(number.length - n)
- rotate the last digits
	- slice starting from the first index and concat the first value
- concat the first numbers and the rotated numbers
- join and coerce to number

example:

735291, 4
5291 becomes 2915
join 73 and 2915

*/