function toDegrees(rad) {
	return (rad * 180) / Math.PI;
}

var value = -180;
console.log(Math.abs(value));

console.log(Math.sqrt(16777216));

console.log(Math.pow(16, 6));

var a = 50.72;
var b = 49.2;
var c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// function randomBetween(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }

// They didn't even mention edge cases for this problem yet their solution included them.
// Very frustrating.

// function randomBetween(min, max) {
// 	var temp;

// 	if (min === max) {
// 		return min;
// 	} else if (min > max) {
// 		temp = min;
// 		min = max;
// 		max = temp;
// 	}

// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// What this code is doing is finding a number between a of 0 to the maximum - the minimum. We
// then shift the value to the desired range by adding the minimum value at the end of the
// statement. In order to keep the range inclusive of both the maximum and minimum values we add
// one to the max - min value.

// The code at the beginning performs validation that wasn't mentioned in the problem statement. it
// will return the min value if the maximum and minimum value are the same and it will swap the max
// and min if the min is greater than the max.

// In their solution they decided to create a difference variable that stores the difference of the max
// minus the min that will determine the range of our random numbers

// Their solution:

function randomInt(min, max) {
	var difference;
	var swap;

	if (min === max) {
		return min;
	} else if (min > max) {
		swap = min;
		min = max;
		max = swap;
	}

	difference = max - min + 1;
	return Math.floor(Math.random() * difference) + min;
}