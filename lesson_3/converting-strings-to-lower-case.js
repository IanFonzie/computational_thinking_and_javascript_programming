// function toLowerCase(string) {
// 	var lowerCaseString = '';
// 	var charCode;

// 	for (var i = 0; i < string.length; i++) {
// 		charCode = string[i].charCodeAt(0);

// 		if (charCode >= 65 && charCode <= 90  && isNaN(string[i])) {
// 			charCode += 32;
// 			lowerCaseString += String.fromCharCode(charCode);
// 		} else {
// 			lowerCaseString += string[i];
// 		}
// 	}

// 	return lowerCaseString;
// }

// update after solution:

function toLowerCase(string) {
	var lowerCaseString = '';
	var charCode;

	for (var i = 0; i < string.length; i++) {
		charCode = string[i].charCodeAt(0);

		if (charCode >= 65 && charCode <= 90  && isNaN(string[i])) {
			charCode += 32;
		}

		lowerCaseString += String.fromCharCode(charCode);
	}

	return lowerCaseString;
}

// Their solution:

// function toLowerCase(string) {
// 	var CONVERSION_OFFSET = 32;
// 	var newString = '';
// 	var charCode;

// 	for (var i = 0; i < string.length; i++) {
// 		charCode = string.charCodeAt(i);

// 		if (string[i] >= 'A' && string[i] <= 'Z') {
// 			charCode += CONVERSION_OFFSET;
// 		}

// 		newString += String.fromCharCode(charCode);
// 	}

// 	return newString;
// }

// explanation:

// A constant for the character offset is declared (I guess this i good because it indicates to other
// developers what the number signifies). Then we declare a new string that we can append to and 
// eventually return. Then we declare the charCode variable but don't assign it any value. (seems to
// be related to hoisting).

// following this our logic is similar we the charCode from the string at index[i] (I used the 
// individual character at index 0, this was due to an unfamiliarity with the method. Then I checked
// to make sure my number was in the Ascii char code range for uppercase characters whereas they
// checked to see if the character was >= A and <= Z using lexical ordering. If it is within this
// range the offset is added to the character code and the newString has the updated character
// concatenated to it.

// I could have done this in my function since we've already determined the charCode for the character,
// though I'm not sure if this is any less efficient.

// Similar to javascript's built in toLowerCase method that you can call from any JavaScript string. There
// is also a built in toUpperCase method.