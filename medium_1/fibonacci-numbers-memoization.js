var fibonacciNums = {}

function fibonacci(nth) {
	if (nth <= 2) {
		return 1;
	} else {
		if (fibonacciNums[nth]) {
			return fibonacciNums[nth];
		} else {
			fibonacciNums[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
			return fibonacciNums[nth];
		}
	}
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

/*

notes:
- each number is the sum of the two previous numbers
- first 2 numbers are 1 and 1
-	recursion:
	- calls itself at least once
	- has an ending condition
	- results of the recursion are used in each step

input: desired nth fibonacci number
output: the nth fibonacci number in the series

definitions:
- each number is the sum of the two previous numbers
- save previously computed results

rules:

var fibonacciNums = {}

recursively:
- call fibonnaci
- if nth <= 2
	- return 1
- otherwise:
	- check if the number exists in fibonacciNums and return its value if it does
	- else:
		determine the fibonacciNumber and save it in fibonacciNums using its
		nth value as the key

*/
