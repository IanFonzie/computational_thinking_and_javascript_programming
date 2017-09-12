// function repeatedCharacters(string) {
// 	var repeated = {};
// 	string = string.toLowerCase();

// 	for (var i = 0; i < string.length; i++) {
// 		repeated[string[i]] = !(string[i] in repeated) ? 1 : repeated[string[i]] + 1;
// 	}

// 	for (var letter in repeated) {
// 		if (repeated[letter] < 2) {
// 			delete repeated[letter];
// 		}
// 	}

// 	return repeated;
// }

// No need to convert to lowercase on each iteration. Can just do this once
// at the start of the loop

// actually had a similar soluton to theirs. Chose to use a ternary operator and
// checked if the string was not in the repeated object. also checked if the key's
// value was less than 2 instead of being === to 1. not sure which is more efficient.

// I also reassigned string to its lowerCase equivalent because I knew the operation
// can't mutate its caller though it might be safer to simply assign it to a new value
// altogether.

function repeatedCharacters(string) {
	var repeated = {};
	var lowerCaseString = string.toLowerCase();

	for (var i = 0; i < lowerCaseString.length; i++) {
		if (!(lowerCaseString[i] in repeated)) {
			repeated[lowerCaseString[i]] = 1;
		} else {
			repeated[lowerCaseString[i]] += 1;
		}
	}

	for (var letter in repeated) {
		if (repeated[letter] === 1) {
			delete repeated[letter];
		}
	}

	return repeated;
} 