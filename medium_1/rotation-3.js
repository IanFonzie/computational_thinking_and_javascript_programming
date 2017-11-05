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

function maxRotation(number) {
	var stringNum = String(number);
	var currentRotation = number;
	for (var i = 0; i < stringNum.length - 1; i += 1) {
		currentRotation = rotateRightmostDigits(currentRotation, stringNum.length - i);
	}

	return currentRotation;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

/*

input: integer
output: maximum rotation of the integer

defintions:
- starting from the first digit in the number
- rotate the remaining right most digits
- move on to the next digit and repeat the process until there are no more digits to rotate

rules:
- for i less than number.length - 2:
	- convert the number to string
	- currentRotation = rotateRightmostDigits(number, String(number).length - i)
	- increment i

// We have enough testcases
// 735291 we're at position 0, 6 digits remaining
// 352917 we're at position 1, 5 digits remaining
// 329175 we're at postiion 2, 4 digits remaining
// 321759 we're at position 3, 3 digits remaining
// 321597 we're at position 4, 2 digits remaining
// 321579 we're at position 5, 1 digit remaining
// Rotating the last digit makes no difference

*/