function indexOf(firstString, secondString) {
	var match;

  for (var i = 0; i <= firstString.length; i++) {
  	if (firstString[i] === secondString[0]) {
  		for (var j = 0; j < secondString.length; j++) {
  			match = firstString[i + j] === secondString[j];
  		}

  		if (match) {
  			return i;
  		}	
  	}
  }

  return -1;
}

// function lastIndexOf(firstString, secondString) {
//   var match;

//   for (var i = firstString.length; i >= 0; i--) {
//   	if (firstString[i] === secondString[0]) {
//   		for (var j = 0; j < secondString.length; j++) {
//   			match = firstString[i + j] === secondString[j];
//   		}

//   		if (match) {
//   			return i;
//   		}	
//   	}
// 	}

// 	return -1;
// }

function lastIndexOf(firstString, secondString) {
	var lastMatch;
	var removed = 0;

	while (true) {
		lastMatch = indexOf(firstString, secondString);

		if ((firstString.length - lastMatch) <= secondString.length) {
			break;
		} else if (lastMatch < 0) {
			return -1;
		} else {
			removed += lastMatch + secondString.length;
			firstString = firstString.slice(lastMatch + secondString.length);
		}

	}

	return removed + lastMatch;
}

// My solution was similar to theirs, I used a match boolean instead of a matchCount variable.
// I would check to see if there was a match at the first index and then proceed to check the
// reset of the values whereas they would check the values for each character and break if 
// there was no match. we then had identical solutions for when a match commenced, but i would
// store the value as a boolean that would be set with each iteration. if the boolean was ever 
// set to false then the condition at the end of the outer loop would not trigger. otherwise it
// would return the index and we would exit the function.

// Their solution:

// function indexOf(firstString, secondString) {
// 	var limit = firstString.length - secondString.length;
// 	var matchCount;

// 	for (var i = 0; i <= limit; i++) {
// 		matchCount = 0;

// 		for (var j = 0; j < secondString.length; j++) {
// 			if (firstString[i + j] === secondString[j]) {
// 				matchCount++;
// 			} else {
// 				break;
// 			}
// 		}

// 		if (matchCount === secondString.length) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

// function lastIndexOf(firstString, secondString) {
// 	var limit = firstString.length - secondString.length;
// 	var matchCount;

// 	for (var i = limit; i >= 0; i--) {
// 		matchCount = 0;

// 		for (var j = 0; j < secondString.length; j++) {
// 			if (firstString[i + j] === secondString[j]) {
// 				matchCount++;
// 			} else {
// 				break;
// 			}
// 		}
		
// 		if (matchCount === secondString.length) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

// explanation: determine the limit for the number of times the outer loop will
// need to iterate by subtracting the second string's length from the first string's.
// This limit reduces the amount of looping because anything after this limit will be too
// short to contain the secondstring.

// for the outer loop initialize its index to 0 and set it's break condition to break when 
// it is greater than the limit. set the counter to 0. for each letter represented by i we 
// check to see if the character at outer index i + j (j being the offset from the current
// position) is the same as the character of the secondString at index j. if it is, we have 
// a match in that position and increment the matchCount variable, otherwise we break and 
// reset the matchCount variable.

// if the matchCount variable is === to the secondString.length then we can return the index
// i.

// for the second function we again determine the limit for the number of times the outer
// loop will need to iterate by subtracting the second string's length fromt the first string's.

// This time we initialize the outer loop's index i to = the limit (aka as far as we can search
// while still having the second string be included in the first one) and set the break 
// condition to be i >= 0. so this loop will start as far back as possible and loop until it
// reaches 0 (aka the beginning of the first string). for each letter represented by i in the 
// outer loop we check to see if the characgter at outer index i + j (j being the offset from
// the current position) is equal to the same character of the second string at index j. if it
// is we have a match and increment the matchCount variable and break out of the loop otherwise.
// if we break out of the loop and there's no match we break out of the loop and reset the 
// counter or we return the outer index i if the matchCount is equal to the secondString.length.

// there are built in methods for these in javascript: indexOf and lastIndexOf. they return 
// similar values to the ones that we designed but they are more powerful. there is an optional
// argument that specifies the starting position for the search. 

// 'Blue Whale'.indexOf('e', 4);      returns 9
// 'canal'.lastIndexOf('a', 2);       returns 1
// 'canal'.lastIndexOf('a', 0);       returns -1