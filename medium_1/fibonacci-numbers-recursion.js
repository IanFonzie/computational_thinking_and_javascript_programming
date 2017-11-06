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

rules:

recursively:
- call fibonnaci
- if nth <= 2
	- return 1
- otherwise:
	- return fibonacci(n - 1) + fibonacci(n - 2)

1(1st) + 1(2nd) = 2 3rd
1 + 2 = 3 4th
2 + 3 = 5 5th
3 + 5 = 8 6th

4th fibonnaci number
fibonacci(4)
4 >= 2
fibonacci(3) + fibonacci(2) // this returns 1 + the return result of fibonacci(3) // which is 2
fibonacci(3) >= 2
fibonacci(2) + fibonacci(1) // since both are <= 2 we return 1 + 1
this then returns 1 + 1 for fibonacci(3) above

function fibonacci(nth) {
	if (nth <= 2) {
		return 1;
	} else {
		return fibonacci(nth - 1) + fibonacci(nth - 2);
	}
}

*/

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765