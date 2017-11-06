// input: string with number words in input
// output: string with punctuation preserved and number words replaced with digit characters

// definitions:
// - replace every number word in a sentence with its equivalent digit character

// rules:
// (will work through an example below.)
// - if the string matches any of the number words:
// 	- replace the instance of the word with its character equivalent
// 		- look up the string in an object and use its corresponding value

function wordToDigit(inputString) {
	var words = {
		'zero': 	0,
		'one': 		1,
		'two': 		2,
		'three': 	3,
		'four': 	4,
		'five': 	5,
		'six': 		6,
		'seven': 	7,
		'eight': 	8,
		'nine': 	9,
	}

	var regex = new RegExp(/(zero|one|two|three|four|five|six|seven|eight|nine)/, 'gi');
	return inputString.replace(regex, function(capturingGroup) {
		return words[capturingGroup.toLowerCase()];
	});
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

// Please call me at five five five one two three four. Thanks.
// Please call me at 5 5 5 1 2 3 4. Thanks.
