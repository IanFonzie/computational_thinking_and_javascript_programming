/*

definitions:
- Equilateral: 3 sides are equal
- isosceles: 2 sides are equal 1 is different
- Scalene: 3 sides are different
- to be valid:
	- sum of shortest sides are greater than the longest 
	- every side must have a length > 0

rules:
- determine if triangle is valid
	- any side === 0 ? return false
	- Find the max side and filter it out of the array of sides
	- need to check if side (1 and 2)


input: 3 sides of a triangle as arguments
output: 'equilateral', 'isosceles', 'scalene', or 'invalid'

example: 3, 4, 5
5 is the max
3 + 4 > max and no sides are 0. it's valid
starting with side1
	- side1 (3) !== side2 (4)
	- side1 (3) !== side3 (5)
	- side2 (4) !== side3 (5)

*/

function triangle(side1, side2, side3) {
	var matchCount = 0;
	var args = Array.prototype.slice.call(arguments);
	if (isInvalidLength(args) || isZeroSided(args)) {
		return 'invalid';
	}

	if (side1 === side2 && side1 === side3) {
		return 'equilateral'
	} else if (side1 === side2 || side2 === side3) {
		return 'isosceles'
	} else {
		return 'scalene';
	}
}

function isInvalidLength(lengthsArr) {
	var sortedLengths = lengthsArr.slice().sort(function(side1, side2) {
		return side1 - side2;
	});

	return sortedLengths[0] + sortedLengths[1] < sortedLengths[2];
}

function isZeroSided(lengthsArr) {
	return lengthsArr.some(function(length) {
		return length === 0;
	});
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"