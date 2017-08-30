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

// logs every pair of primes that sums to the number suppleid as an argument
// can express every even integer greater than 2 as the sum of two primes
// logs ALL combinations of two prime numbers whose sum is n
// log the prime pairs with the smaller numbers first

// loop through numbers and see which are prime.

function checkGoldbach(num) {
	if (num % 2 === 1 || num < 4) {
		console.log('null');
	} else {
		var max;
		var i = 0;

		do {
			// if (i >= max) {
			// 	break;
			// }

			if (isPrime(i) && isPrime(num - i)) {
				console.log(i, num - i);
				max = num - i;
			}

			i++;
		} while (i !== max);
	}
}

// function checkGoldbach(n) {
// 	if (n % 2 === 1 || n < 4) {
// 		console.log('null');
// 	} else {
// 		for (var i = 2; i < n / 2; i++) {
// 		  // for (var j = 2; j < n; j++) {
// 		  //   if (i + j === n) {
// 		  //     console.log(i + ' ' + j);
// 		  //   }
// 		  // }
// 		  var j = n - i;
// 		  if (isPrime(i) && isPrime(j)) {
// 		  	console.log(i + ' ' + j);
// 		  }
// 		}
// 	}
// }

// so instead of having an if else statement they have a guard clause that will log
// null and return if the input is odd or less than 4.

// otherwise they use a solution similar to what I did where they have a number
// initialized to 1 (num1 = 1) and declare a second number (num2) before the loop. 

// then they have a do loop that increments the first number and and gets the remainder
// of subtracting that number from the input. it then checks to see if both are prime
// using the previously defined function and logs both numbers. this happens until the 
// first number equals the second number

// function checkGoldbach(n) {
// 	if (n < 4 || n % 2 === 1) {
// 		console.log(null);
// 		return;
// 	}

// 	var num1 = 1;
// 	var num2;

// 	do {
// 		num1++;
// 		num2 = n - num1;
// 		if (isPrime(num1) && isPrime(num2)) {
// 			console.log(num1, num2);
// 		}

// 	} while (num1 !== num2);
// }

// difference between mine and theirs. they seem to only break when i === max. will try retooling
// mine.