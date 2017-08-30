// function logMultiples(number) {
// 	for (var i = 100; i >= 0; i--) {
// 		if (i * number <= 100 && i % 2 === 1) {
// 			console.log(i * number);
// 		}
// 	}
// }

// function logMultiples(number) {
// 	for (var i = 100; i >= number; i--) {
// 		if (i % 2 === 1 && i % number === 0) {
// 			console.log(i);
// 		}
// 	}
// }

// Their solution checks to see if the index divided by the number is equal to 0 and logs it.

// Mine checked to see would check for explicit multiples and only log them if they were less
// than 100

// function logMultiples(number) {
// 	var largestMultiple = Math.floor(100 / number) * number;

// 	for (var i = largestMultiple; i > 0; i -= number) {
// 		if (i % 2 === 1) {
// 			console.log(i);
// 		}
// 	}
// }

// I effectively used the same solution as their second one but replaced the dense logic with a variable.
// I was also considering refactoring to have a separate function that calculated the largest multiple, which
// they seemed to suggest.

// rewrite using while loop:

function logMultiples(number) {
	var multiple = Math.floor(100 / number) * number;

	while (multiple > 0) {
		if (multiple % 2 === 1) {
			console.log(multiple);
		}

		multiple -= number;
	}
}

logMultiples(17);
logMultiples(21);