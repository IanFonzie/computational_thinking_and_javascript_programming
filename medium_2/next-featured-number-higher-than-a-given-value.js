function featured(number) {
	var n = number + 1;
	var featured;
	var digits;
	while (!featured) {
		digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

		while (n % 7 !== 0) {
			n += 1;
		}

		while (n % 2 !== 1) {
			n += 7;
		}

		if (isUnique(n, digits)) {
			featured = n;
		} else {
			n += 14;
		}

		if (digits.length === 0 && !featured) {
			return 'ERROR: no next featured number'
		}
	}

	return featured;
}

function isUnique(n, digits) {
	var numArray = String(n).split('');
	var idx;
	for (var i = 0; i < numArray.length; i += 1) {
		idx = digits.indexOf(numArray[i])
		if (idx !== -1) {
			digits.splice(idx, 1);
		} else {
			return false;
		}
	}

	return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987

/*

input: integer
output: featured number > than the integer

definition:
- featured number:
	- odd
	- multiple of 7
	- all digits unique
- issue an error if there is no next featured number
	- no featured number when all digits have been used.


rules:
(will work through an example)
start from one greater than the input
-while n is not divisible by 7 add one
once n is divisble by 7, check if it's odd
-if it's not odd, add 7 until it is
-convert number to string
- check if digits are unique in the string
	- have a bucket of available digits
	- for each digit in the potential number
	- remove the digit from the bucket after you've used it.
		- if you reuse a digit, try the whole process again
		- if the bucket is empty return false and there's no featured value,
		return false.

*/
