function fibonacci(nth) {
	var firstPrevious;
	var secondPrevious;
	var result;
	
	if (nth <= 2) {
		return 1;
	}

	firstPrevious = 1;
	secondPrevious = 1;
	for (var i = 2; i < nth; i += 1) {
		result = firstPrevious + secondPrevious;
		firstPrevious = secondPrevious;
		secondPrevious = result;
	}

	return result;
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));      // 12586269025
console.log(fibonacci(100));     // 354224848179261915075

/*

input: desired nth fibonacci number
output: the nth fibonacci number in the series

definitions:
- each number is the sum of the two previous numbers, starting with 1(1st) and 1(2nd)

rules:
if (nth <= 2) {
	return 1;
}
- declare firstPrevious = 1
- declare secondPrevious = 1
- declare result;
from i = 2 to nth:
	- result = firstPrevious + secondPrevious
	- set firstPrevious to secondPrevious
	- set secondPrevious to result

return the result


(Will work through an example below)
1 (1st previous) + 1(2nd previous) = 2 (result) (3)
1 (1st previous) + 2(2nd previous) = 3 (result) (4)
2 (1st previous) + 3(2nd previous) = 5 (result) (5)

1 
1

1st previous = 1, second previous = 1
	i = 2
	result = 1 + 1
	1st previous = 1
	2nd previous = 2

	i = 3
	result = 1 + 2
	1st previous = 2
	2nd previous = 3

	return result
	
*/
