function letterPercentages(inputString) {
	var percentages = {};
	var totalCount = inputString.length;
	var upperCount = inputString.match(/[A-Z]/g) ? inputString.match(/[A-Z]/g).length : 0;
	var lowerCount = inputString.match(/[a-z]/g) ? inputString.match(/[a-z]/g).length : 0;
	var neitherCount = inputString.match(/[^A-Za-z]/g) ? inputString.match(/[^A-Za-z]/g).length : 0;

	percentages['lowercase'] = determinePercentage(lowerCount, totalCount);
	percentages['uppercase'] = determinePercentage(upperCount, totalCount);
	percentages['neither'] = determinePercentage(neitherCount, totalCount);

	return percentages;
}

function determinePercentage(count, total) {
	return (count / total * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

console.log(letterPercentages('a'));
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

console.log(letterPercentages('A'));
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

console.log(letterPercentages('aA1'));
// { lowercase: "33.33", uppercase: "33.33", neither: "33.33" }

/*

input: String with upper and lowercase characters as well as other non-alphabetical characters.
output:
	- an object containing:
		- percentage of lowercase letters in the String
		- percentage of uppercase letters in the String
		- percentage of characters that are neither:

definitions:
	- the string will always contain one or more characters
	- percentages are the the count of something divided by the total * 100
rules:
	- Determine the total count of all characters string.split('').length
	- Determine the total count of all uppercase characters (string.match(/[A-Z]/g).length)
		- set percentages['uppercase'] = (upperCount / totalCount).toFixed(2);
	- Determine the total count of all lowercase characters (string.match(/[a-z]/g).length)
		- set percentages['lowercase'] = (lowerCount / totalCount).toFixed(2);
	- Determine the total count of all non-alphabetical characters (string.match(/[^A-Za-z]/g).length)
		- set percentages['neither'] = (neitherCount / totalCount).toFixed(2);

	return the percentages object

testcases:
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages('a')
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }

letterPercentages('A')
// { lowercase: "0.00", uppercase: "100.00", neither: "0.00" }

letterPercentages('aA1')
// { lowercase: "33.33", uppercase: "33.33", neither: "33.33" }

data structure: String should work fine, as we are working mostly with lengths

algorithm:
- Initialize percentages object var percentages = {}
- get totalCount using String.prototype.length property
- get upperCount using string.match(/[A-Z]/g).length
	- percentages['uppercase'] = determinePercentage(upperCount, totalCount)
- get lowerCount using string.match(/[a-z]/g).length
	- percentages['lowercase'] = determinePercentage(lowerCount, totalCount)
- get neitherCount using string.match(/[^A-Za-z]/g).length
	- percentages['neither'] = determinePercentage(lowerCount, totalCount) (loop these?)

return percentages

*/
