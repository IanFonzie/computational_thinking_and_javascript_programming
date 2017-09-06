// function rot13(string) {
// 	var rotatedString = '';
// 	var charCode;
// 	var rotateCode;

// 	for (var i = 0; i < string.length; i++) {
// 		charCode = string.charCodeAt(i);

// 		// Rotate 13 ASCII characters
// 		rotateCode = charCode + 13;

// 		// Checks if the rotation is greater than the upper bound using its ASCII code. 
// 		// If it is we take the difference and add it to the beginning of the range and
// 		// assign this value to charCode. If not, we take the current rotateCode instead. 
// 		if (string[i] >= 'a' && string[i] <= 'z') { 
// 			charCode = rotateCode > 122 ? rotateCode - 122 + 96 : rotateCode; 
// 		} else if (string[i] >= 'A' && string[i] <= 'Z') {
// 			charCode = rotateCode > 90 ? rotateCode - 90 + 64 : rotateCode;
// 		}

// 		rotatedString += String.fromCharCode(charCode);
// 	}

// 	return rotatedString;
// }

// Their solution:

function rot13(text) {
	var transformed = '';

	for (i = 0; i < text.length; i++) {
		transformed += rot13Character(text[i]);
	}

	return transformed;
}

function rot13Character(char) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var upperCase = false;
	var initialIndex = alphabet.indexOf(char); // returns -1 if false?
	var char, initialIndex, shiftedIndex, transformed; // Can declare variables for all of these at once

	// no match might mean that we are dealing with an uppercase letter
	if (initialIndex === -1) {
		initialIndex = alphabet.indexOf(char.toLowerCase());
		upperCase = true;
	}
	
	// if there is still no match, it's not a character between a-z.
	if (initialIndex === -1) {
		return char;	
	}

	shiftedIndex = (initialIndex + 13) % 26;
	transformed = alphabet[shiftedIndex];

	if (upperCase) {
		transformed = transformed.toUpperCase();
	}

	return transformed;
}

// Explanation:

// pretty clever solution on their part. They rotated for each character in the string using a
// separate function. 

// This rot13Character(char) function declares an alphabet as a string (I forgot that you could
// index a string like an array and opted to use the ASCII characters instead). This is used
// for comparison purposes. Then they declare an upperCase boolean flag and determine the 
// initialIndex of the character, which will return -1 if false. Then the char, initialIndex,
// shiftedIndex and transformed variables are declared (I don't know why char and initialIndex
// are declared as char is an argument and initalIndex was declared and initialized on the line
// above this one.

// if the initialIndex is equal to -1 we check to see if the lower case character is in the string
// instead using alphabet.indexOf(char.toLowerCase()). If it is present then initialIndex is set to
// that position in the string and the uppercase flag is set to true.if it's not found then the 
// initialIndex is not a letter and we return the character.

// After we've determined that it is an alphabetical character we shift the index 13 characters and 
// take the modulus of 26. if it is greater than 26 it will return the remainder, which we can use 
// as the new index. if it is less than 26 the shifted index will remain the same because the result
// does not go into 26 and will have a remainder of the original number. then we fetch the transformed
// character from the alphabet using its shifted index.

// Finally, if the upperCase flag is set to true we use the toUpperCase() method to set the character
// to its uppercase equivalent and ultimately return the character.

// differences: we had similar ideas but our implementation was different. I forgot that you could 
// access the index of a string like an array and opted to use ASCII codes instead, which would have made
// the modulus logic difficult. 

// I also used initial and shifted indexes, albeit with different names. If the characters were alphabetical
// I checked to see if their index was greater than their upperbound and assigned a new value based on that,
// if not I would keep the shifted value.

// if the character was not alphabetical then I would return the original charCode and the updated codes otherwise.
// My soluton was concise but not the most clear because I used 'Magic Numbers', because I might forget what they mean
// in the future and other readers of my code might not be familiar with what they represent. Probably would have
// been a good solution if I used constants

