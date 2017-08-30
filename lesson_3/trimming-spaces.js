// function trim(string) {
// 	var current;
// 	var next;
// 	var start = 0;
// 	var end = string.length - 1;
// 	var trimmed = '';

// 	for (var i = start; i < end; i++) {
// 		current = string[i];
// 		next = string[i + 1];
// 		if (current === ' ' && next !== ' ' && next !== undefined) {
// 			start = i + 1;
// 			break;
// 		} else if (current !== ' ' && next === ' ') {
// 			break;
// 		} else if (current === ' ') {
// 			start = end;
// 		}
// 	}

// 	for (var j = end; j > start; j--) {
// 		current = string[j];
// 		next = string[j - 1];
// 		if (current === ' ' && next !== ' ') {
// 			end = j - 1;
// 			break;
// 		} else if (current !== ' ' && next === ' ') {
// 			break;
// 		}
// 	}

// 	for (var k = start; k <= end; k++) {
// 		if (end - start === 0) {
// 			trimmed = '';
// 		} else {
// 			trimmed += string[k];
// 		}
// 	}

// 	return trimmed;
// }

// function lTrim(string) {
// 	var copy = false;
// 	var i = 0;
// 	var copyString = ''

// 	do {
// 		if (string[i] !== ' ') {
// 			copy = true;
// 			break;
// 		}

// 		i++;
// 	} while (i < string.length);
	
// 	for (var j = i; j < string.length; j++) {
// 		copyString += string[j];
// 	}

// 	return copyString;
// }

// function rTrim(string) {
// 	var copy = false;
// 	var i = string.length - 1;
// 	var copyString = ''

// 	do {
// 		if (string[i] !== ' ') {
// 			copy = true;
// 			break;
// 		}

// 		i--;
// 	} while (i >= 0);
	
// 	for (var j = 0; j <= i; j++) {
// 		copyString += string[j];
// 	}

// 	return copyString;
// }

// function trim(string) {
// 	var trimmed = lTrim(string);
// 	trimmed = rTrim(trimmed);

// 	return trimmed;
// }

// Their Solution:

function trim(string) {
	var trimmed = trimLeft(string);
	trimmed = trimRight(trimmed);

	return trimmed;
}

function trimLeft(string) {
	var newString = '';
	var copyMode = false;

	for (var i = 0; i < string.length; i++) {
		if (string[i] !== ' ') {
			copyMode = true;
		}

		if (copyMode) {
			newString += string[i];
		}
	}

	return newString;
}

function trimRight(string) {
	var newString = '';
	var copyMode = false;

	for (var i = string.length - 1; i >= 0; i--) {
		if (string[i] !== ' ') {
			copyMode = true;
		}

		if (copyMode) {
			newString = string[i] + newString;
		}
	}

	return newString;
}

// explanation: first the left side of the string is trimmed, when it encounters a character that 
// is not a space, it permanently sets the copyMode to true and writes to the newString variable by
// concatenating the character to it.

// Right side concatenation is similar, except it scans from the end of the trimmed string and sets the
// copyMode to true when it encounters a character that isn't a space. if copyMode is true then it will
// assign newString = string[i] + newString, which places the current string at the front of the new 
// string instead of just concatenating it.

// This was similar to what I did, except I coneptualized it slightly differently. I for some reason figured
// that the copyMode variable would be set to false, if it encountered a character that was not a space. This
// wasn't the case but because I assumed that it was I saved the position in the current do loop and used
// a form loop with the position obtained earlier to start copying the string at the given position.

// Similar process for the rightTrim except I set that index as the point to stop copying instead of continuing
// to iterate backwards.

// There is also a built in trim method() that trims spaces as well as other white space characters like tabs and
// line spaces.
