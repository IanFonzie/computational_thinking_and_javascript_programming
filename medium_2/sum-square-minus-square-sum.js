function sumSquareDifference(number) {
	var sum = constructNumbersArr(number).reduce(function(total, n) {
		return total += n;
	});

	var sumSquared = Math.pow(sum, 2);

	var sumOfSquares = constructNumbersArr(number).reduce(function(total, n) {
		return total += Math.pow(n, 2);
	});

	return sumSquared - sumOfSquares;
}

function constructNumbersArr(number) {
	var numbers = [];
	for (var i = 1; i <= number; i += 1) {
		numbers.push(i);
	}

	return numbers;
}

console.log(sumSquareDifference(3));      // 22
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

/*

input: a positive integer, n
output: the difference between the square of sums and the sum of squares

rules:
	- use reduce to get the sum and square the result
	- use reduce to sum the squares
	-	subtract the sum of squares from the sum square

testcases:
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

algorithm:
	- reduce the sum and square the result
	- reduce the sum by adding Math.pow(number, 2)
	- subtract sumOfSquares from sumSquared

*/
