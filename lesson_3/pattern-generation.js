// Original Solution w/ n > 9:

// function generatePattern(n) {
// 	var row;

// 	for (var i = 1; i <= n; i++) {
// 		row = '';
		
// 		for (var j = 1; j <= i; j++) {
// 			row += String(j);
// 		}

// 		var remainder = n - i;

// 		for (var k = 0; k < remainder; k++) {
// 			var charCount = String(k + i + 1).length;
// 			for (var l = 0; l < charCount; l++) {
// 				row += '*';
// 			}
// 		}

// 		console.log(row);
// 	}
// }

// What I did was calculate the remainder and used that to terminate my outer loop. 
// Then in order to get the necessary number of characters for each double digit or greater
// number, I would check the length of the string at one greater than the index + the 
// current remainder index and add as many extra '*'s as necessary.

// Their solution + mine for n > 9:

// function generatePattern(n) {
// 	var row;

// 	for (var i = 1; i <= n; i++) {
// 		row = '';
		
// 		for (var j = 1; j <= i; j++) {
// 			row += j;
// 		}

// 		for (var k = i + 1; k <= n; k++) {
// 			var numLength = String(k).length
// 			for (var l = 0; l < numLength; l++) {
// 				row += '*';
// 			}
// 		}

// 		console.log(row);
// 	}
// }

// differences between mine and theres result from how padding is handled. I chose to use 
// the difference between n and i as my break condition whereas they started 1 greater than 
// i and broke at n.

// Their solution n < 9:

// function generatePattern(n) {
// 	var string;

// 	for (var i = 1; i <= n; i++) {
// 		string = '';
// 		for (var j = 1; j <= i; j++) {
// 			string += String(j);
// 		}

// 		for (var k = i + 1; k <= n; k++) {
// 			string += '*';
// 		}

// 		console.log(string);
// 	}
// }

// Their Solution n > 9:

function generatePattern(n) {
	var lastRowString = '';
	var width;
	var string;
	var stars;

	for (var i = 1; i <= n; i++) {
		lastRowString += String(i)
	}

	width = lastRowString.length;

	for (var i = 1; i <= n; i++) {
		string = '';
		for (var j = 1; j <= i; j++) {
			string += String(j);
		}

		stars = width - string.length;

		for (var k = 1; k <= stars; k++) {
			string += '*';
		}

		console.log(string);
	}
}

// Explanation: 
// They construct the lastrow of string by using a for loop to iterate between i 
// and the number argument n. Then they extract the width needed for the rest of
// the rows by using the width of the lastRowString. This entire process is used
// to determine how many stars are needed for padding.

// Now in order to construct the rows a for loop is used that breaks when its
// index is greater than the number argument n. inside this there is a nested
// loop that will set its index (j) equal to 1 and iterate until it is = to i.
// Example: the current iteration of the outer loop is i = 3. j will add 1 on 
// the first iteration, 2 on the second iteration and 3 on the third iteration.

// then it determines the literal amount of missing characters by using the width
// determined earlier and subtracting the string.length from that. it will then
// use another for loop to iterate until its index (k) is greater than the literal
// number of stars, appending a star to the string each time. finally it will log
// the string and conditnue unti the original for loop is greater than its number
// argument n.

// differences:
// Both solutions looked for the remainder. They looked for the literal remainder while 
// I calculated it based on the length of the current string. Their solution was probably
// more efficient.

// My solution using padEnd (not what they were looking for):

// function generatePattern(n) {
// 	var string = '';

// 	for (var i = 1; i <= n; i++) {
// 		string += i.toString();
// 		console.log(string.padEnd(n, '*'));
// 	}
// }