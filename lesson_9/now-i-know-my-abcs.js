/*

isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('iest');  // true

Input: String Word
Output: Boolean true or false

Definitions:
- Given a String word as input
	- With any combination of upper or lowercase characters
- Determine if the word is composed of unique members of the 13 spelling blocks
- Return true if it is, return false if it isn't
- Rules:
	- If the word is longer than 13 characters, return false
	- For each letter in the word 
		- If the letter is "available" (not used), use the letter and remove it from the list of available options (Test case for letter available, and not available)
		and move on to the next letter.
		- If the letter is not "available", return false
	- If you get to the end of the word characters and have not returned false, return true

test case for 1 word over, ambidextrously
one at the max length (13 chars) consumptively
test case for empty word
test case where all the letters are available
test case where that only uses the same block ('An')
test case with a mix of available blocks and repeat blocks ('BUTCH')
test case with all uppercase true & false
test case with all lowercase true & false
test case with a mix of upper and lowercase true & false (have these)

console.log(isBlockWord('')) // ?
console.log(isBlockWord('OKdPNgRfWhVYm')) // true
console.log(isBlockWord('OKdPNgRfWhVYmK')) // false
console.log(isBlockWord('BATCH')) // true
console.log(isBlockWord('BUTCH')) // false
console.log(isBlockWord('iest')) // true
console.log(isBlockWord('hurt')) // false
console.log('An') // false

// Work through test cases; looks good

Data structures:
- For input: String of characters
- For rules: Array of Spelling Blocks?

Algorithm:
- return false if the `wordString` is more than thirteen characters check
- start with an array of spellingBlocks
- for loop character in the word
	- look for a match in the array of spelling blocks using regex
		- if there's a match, remove the spelling block from the list of spellingBlock options
		and continue with the next character	
		- if it doesn't exist in the list of spellingBlock options, we return false.
- if we get to the end of the list without finding a match in the list of seen characters
return true



Work through an example (This helps determine the rules):
	- using the word BATCH:
		- moving through the letters of the word
		- The first letter is B, this eliminates the B:O block
			- Available blocks are: 			X:K   D:Q   C:P   N:A
															G:T   R:E   F:S   J:W   H:U
															V:I   L:Y   Z:M
		- THe second letter is A, this eliminates the N:A block
			- Available blocks are: 			X:K   D:Q   C:P   
															G:T   R:E   F:S   J:W   H:U
															V:I   L:Y   Z:M
		- The third letter is T, this eliminates the G:T block
			- Available blocks are: 			X:K   D:Q   C:P   
																    R:E   F:S   J:W   H:U
															V:I   L:Y   Z:M

		- The fourth letter is C, this eliminates the C:P block
			- Available blocks are: 			X:K   D:Q      
																    R:E   F:S   J:W   H:U
															V:I   L:Y   Z:M

		- The fifth letter is H, this eliminates the H:U block
			- Available blocks are: 			X:K   D:Q      
																    R:E   F:S   J:W  
															V:I   L:Y   Z:M

*/

function isBlockWord(wordString) {
	if (wordString.length > 13) {
		return false;
	}

	var spellingBlocks = [
		'B:O', 'X:K', 'D:Q', 'C:P', 
		'N:A', 'G:T', 'R:E', 'F:S', 
		'J:W', 'H:U', 'V:I' ,'L:Y', 
		'Z:M'
	];
	var regex;
	var match;
	var indexInBlockArray;

	for (var i = 0; i < wordString.length; i += 1) {
		regex = new RegExp(wordString[i], 'i');
		match = checkForMatchInBlocks(spellingBlocks, regex);
		indexInBlockArray = spellingBlocks.indexOf(match);

		if (indexInBlockArray !== -1) {
			spellingBlocks.splice(indexInBlockArray, 1);
		} else {
			return false;
		}
	}

	return true;
}

// Should have used a filter here. Demonstrates lack of fluency.
// Just have a list of list processing abstractions ready whenever
// I'm trying to solve a problem
function checkForMatchInBlocks(spellingBlocks, regex) {
	for (var i = 0; i < spellingBlocks.length; i += 1) {
		if (spellingBlocks[i].match(regex)) {
			return spellingBlocks[i];	
		}
	}
}


// console.log(isBlockWord('')) // ?
console.log(isBlockWord('OKdPNgRfWhVYm')) // true
console.log(isBlockWord('OKdPNgRfWhVYmK')) // false
console.log(isBlockWord('BATCH')) // true
console.log(isBlockWord('BUTCH')) // false
console.log(isBlockWord('jest')) // true
console.log(isBlockWord('hurt')) // false
console.log(isBlockWord('An')) // false
console.log(isBlockWord('floW'));  // true
console.log(isBlockWord('APPLE')); // false
console.log(isBlockWord('apple')); // false
console.log(isBlockWord('apPLE')); // false
console.log(isBlockWord('Box'));   // false