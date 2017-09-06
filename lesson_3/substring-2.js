// function substring(string, start, end) {
// 	var substring = '';
// 	var temp;

// 	if (end === undefined) {
// 		end = string.length;
// 	} 

// 	if (isNaN(start) || start < 0) {
// 		start = 0;
// 	}

// 	if (isNaN(end) || end < 0) {
// 		end = 0;
// 	}

// 	if (start > end) {
// 		temp = start;
// 		start = end;
// 		end = temp;
// 	}

// 	for (var i = start; i < end; i++) {
// 		if (string[i] === undefined) {
// 			break;
// 		}

// 		substring += string[i];
// 	}

// 	return substring;
// }

// Their solution:

function substring(string, start, end) {
	var newString = '';
	var temp;

	if (end === undefined) {
		end = string.length;
	}

	if (start < 0 || isNaN(start)) {
		start = 0;
	}

	if (end < 0 || isNaN(end)) {
		end = 0;
	}

	if (start > end) {
		temp = start;
		start = end;
		end = temp;
	}

	if (start > string.length) {
		start = string.length;
	}

	if (end > string.length) {
		end = string.length;
	}

	for (var i = start; i < end; i++) {
		newString += string[i];
	}

	return newString;
}

// explanation:

// first a newString varaible is declared that is meant to store the substring. A variable temp
// is also declared. Then several guard clauses follow, the first being if the end argument is 
// missing AKA undefined then the end argument is set to the end of the strength. Then if the
// start or end arguments are less than 0 or not a number, they are initialized to 0 (I didn't
// see the requirement for the end to be set to 0 so I added that in to my solution; all my
// tests pass otherwise). Then if the start is greater than the end we swap the values. Finally,
// if the start and end are greater than the length of the string then we set the respective 
// arguments to be the end of the string.

// Once all those conditions have passed then we can append characters to the string in between
// the start and end values. We finish by returning the new string.

// Differences:

// My soluton was almost identical except that I opted to not have the start and end conditions 
// that were greater than the string length. I figured this was unnecessary because if the start
// was greater than the string length, the for loop would not execute because of the break
// condition being false. if the end was greater than I set up a condition for the loop to break
// when the string index (string[i]) was undefined.

// There is a built in method substring that you can call from any javascript string, that behaves
// similar to our function. 

// Note that substr and substring are different methods. substr returns a substring from an index that
// is length characters long whereas substring returns a substring between the start and end arguments.