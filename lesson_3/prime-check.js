// function isPrime(number) {
// 	if (number <= 1) {
// 		return false;
// 	}

// 	for (var i = 2; i < number; i++) {
// 		if (number % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// further exploration:
// -even numbers greater than 2 can't be prime (they'll be divisible by 2)
// -can add this to the guard clause and immediately return for even numbers
// greater than 2.
// -now we only need to test odd divisors; odd divisors are never divisible by even numbers

// walkthrough:
// first block is the guard clause that checks if the number is less than or equal to 1
// and that if the number is greater than 2 and divisible by 2 then it will return false

// next we only check for odd divisors so we set our divisor (or index) to 3 and enter a
// while loop that checks to see if the divisor is still smaller than the number. at the
// end of this loop the divisor increments by two so that it continues checking only for 
// odd divisors

// within the loop if the number is divisble by the divisor we return false. if the code exits
// the loop then we return true, because it has passed all the conditions for a prime number.

function isPrime(number) {
	if (number <= 1 || (number > 2 && number % 2 === 0)) {
		return false;
	}

	var divisor = 3;

	while (divisor < number) {
		if (number % divisor === 0) {
			return false;
		}

		divisor += 2;
	}

	return true;
}

isPrime(1);  // false
isPrime(2);  // true
isPrime(3);  // true
isPrime(43); // true
isPrime(55); // false
isPrime(0);  // false