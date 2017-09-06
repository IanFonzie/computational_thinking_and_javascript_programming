function startsWith(string, searchString) {
	// if (searchString.length > string.length) {
	// 	return false;
	// }

	var i = 0;
	var startsWith = false;

	do {
		if (string[i] === searchString[i] || searchString.length === 0) {
			startsWith = true;
		} else {
			startsWith = false;
		}

		i++;
	} while (startsWith && i < searchString.length);

	return startsWith;
}

// Their solution:

// function startsWith(string, searchString) {
// 	for (var i = 0; i < searchString.length; i++) {
// 		if (string[i] !== searchString[i]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// differences: The solution seemed to imply a guard clause but they let theirs run
// until string[i] was undefined and searchString[i] wasn't which would mean they
// were not equal and the condition that returns false would trigger. I could remove
// the clause from mine and it would work the same way (if i added a condition that
// set it to false).

// in their case the solution is clever when the length is empty because the loop that
// could potentially return false will not be called because i is < searchString.length
// to begin with and will therefore return true.

// built in startsWith method that can be called from any javascript string. The built in
// method takes an optional second argument to begin the comparison with a different index.

// var str = 'We put comprehension and mastery above all else';

// str.startsWith('We');       // true
// str.startsWith('We put');   // true
// str.startsWith('put');      // false
// str.startsWith('Put');      // false
// str.startsWith('put', 3);   // true