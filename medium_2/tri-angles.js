/*

Definitions:
- Right: one angle = 90 degrees
- Acute: all angles < 90 degrees
- Obtuse: one angle > 90 degrees
- Invalid if angles don't add up to 180 or any angles <= 0

input: three angles of a triangle
output: one of 'right', 'acute', 'obtuse', or 'invalid' depending on the triangle's
classification

rules:
- check if any of the angles are less than 0 degrees, if they are return invalid
- sum the three angles, if they don't equal 180 return invalid
- after validity check:

- check some angle === 90, return right
- check all angles < 90, return acute
- check some angle > 90 return obtuse

*/

function isInvalidSum(angles) {
	var sum = angles.reduce(function(sum, angle) {
		return sum += angle;
	});	

	return sum !== 180;
}

function isZeroAngle(angles) {
	return angles.some(function(angle) {
		return angle === 0;
	});
}

function triangle(angle1, angle2, angle3) {
	var args = Array.prototype.slice.call(arguments);
	if (isInvalidSum(args) || isZeroAngle(args)) {
		return 'invalid';
	}

	if (args.some(isRight)) {
		return 'right';
	} else if (args.every(isLessThan90)) {
		return 'acute';
	} else if (args.some(isObtuse)) {
		return 'obtuse';
	}
}

function isRight(angle) {
	return angle === 90;
}

function isLessThan90(angle) {
	return angle < 90;
}

function isObtuse(angle) {
	return angle > 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
