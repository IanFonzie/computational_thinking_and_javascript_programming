// function isAllUnique(string) {
//  	return string.split('').every(function(char, index) {
//  		if (char !== ' ') {
//  			return !checkRestOfString(char, string.slice(index + 1));
//  		} else {
//  			return true;
//  		}
//  	});
// }

// function checkRestOfString(char, rest) {
// 	var regex = new RegExp(escape(char), 'i');
// 	return rest.match(regex);
// };

// function escape(char) {
// 	var escaped = char;
// 	if (['$', '^', '*', '(', ')'].includes(char)) {
// 		escaped = '\\' + char;
// 	}

// 	return escaped;
// }

isAllUnique('The quick brown fox jumped over a lazy dog');     // false
isAllUnique('123,456,789');                                    // false
isAllUnique('The big apple');                                  // false
isAllUnique('The big apPlE');                                  // false
isAllUnique('!@#$%^&*()');                                     // true
isAllUnique('abcdefghijklmnopqrstuvwxyz');                     // true\

function isAllUnique(string) {
	var characters = [];

	for (var i = 0; i < string.length; i += 1) {
		if (string[i] === ' ') {
			continue;
		}

		var lowerCase = string[i].toLowerCase();

		if (characters.indexOf(lowerCase) === -1){
			characters.push(lowerCase);
		} else {
			return false;
		}

	}
	return true;
}

// Their solution:

// function isAllUnique(string) {
// 	var seen = {};
// 	var lowerCasedString = string.toLowerCase();

// 	for (var i = 0; i < lowerCasedString.length; i += 1) {
// 		if (lowerCasedString[i] === ' ') {
// 			continue;
// 		};

// 		if (seen[lowerCasedString[i]]) {
// 			return false;
// 		} else {
// 			seen[lowerCasedString[i]] = true;
// 		}
// 	}

// 	return true;
// }

// Some slight differences, they used an object instead of an array, but I would argue a letters presence in an array
// is enough to indicate that it exists and we can safely return false at that point. Storing the true value feels
// redundant. They were smart and made the entire string lowercased instead of doing it letter by letter like I did.
