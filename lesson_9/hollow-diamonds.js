// Algorithm:
// set start = 1
// set the starCount equal to start
// for start - diamondDimension rows:
// - construct a string, ''
// 	- add starCount - diamondDimensions / 2 spaces to the string
// 		- if (starCount !== 1) {
// 				concatenate a `*` to the string
// 				concatenate starCount - 2 spaces to the string
// 				concatenate a `*` to the string
// 			} else {
// 				concatenate a `*` to the string
// 			}	
// 	- add the starCount to the string
// 	- log the current string to the console
// 	- increment the starCount by 2
// - when startCount === diamondDimensions, set reverse flag
// 		- when reverse flag is set, decrement the starCount by 2

function hollowDiamond(diamondDimensions) {
	var start = 1;
	var starCount = start;
	var reverse = false;
	var currentRow;
	var spaceCount;
	for (var i = start; i <= diamondDimensions; i += 1) {
		spaceCount = (diamondDimensions - starCount) / 2;
		currentRow = ' '.repeat(spaceCount) + buildStars(starCount);
		console.log(currentRow);
		if (starCount === diamondDimensions) {
			reverse = true;
		}
		starCount += reverse ? -2 : 2;
	}
}

function buildStars(numStars) {
	var row = '*'
	if (numStars !== 1) {
		row += ' '.repeat(numStars - 2) + '*';
	}

	return row;
}

/*

Input: Odd integer representing the width and height of the diamond
Output: Console output of a hollow diamond that is n characters wide and n characters high in an n x n grid

Definitions:
- All inputs are odd integers
- The console will log a hollow diamond that is n `*`s high and n `*`s wide in an n x n grid.
- Rules (How do I determine how hollow diamonds are drawn?):
(Will work though an example below)
(Might describe my answer in plain english below)
start at 1 to n rows
set the starCount equal to start
for 1 - n rows:
- construct a string
	- add starCount - diamondDimensions / 2 spaces to the string
	  - if starCount is not equal to 1, add a `*`, starCount - 2 innerSpaces and another `*`
	  - else add a `*`
	- log the current string to the console
	- increment the starCount by 2
	- Repeat until you get to the nth row
		- Once you get to the nth row, start decrementing the starCount by 2


Test Cases:

diamond(0) // logs ''

diamond(-1) // logs ''

diamond(2) // logs ''

diamond(1);
// logs
*

diamond(3);
// logs
 *
* *
 *

diamond (5) 
// logs
  *
 * *
*   *
 * *
  *

 diamond(9);
// logs
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

Data Structure:

- string of characters

- to convert the input data to our data structure, we use the current index, starCount and diamondDimensions
to determine how many characters need to be added to the string

Algorithm:
set start = 1
set the starCount equal to start
for start - diamondDimension rows:
- construct a string, ''
	- add starCount - diamondDimensions / 2 spaces to the string
		- if (starCount !== 1) {
				concatenate a `*` to the string
				concatenate starCount - 2 spaces to the string
				concatenate a `*` to the string
			} else {
				concatenate a `*` to the string
			}	
	- add the starCount to the string
	- log the current string to the console
	- increment the starCount by 2
- when startCount === diamondDimensions, set reverse flag
		- when reverse flag is set, decrement the starCount by 2


assuming we have hollow diamondDimensions of 5:

- The first row will have 2 ` `s, 1 `*`, followed by 2 ` `					starWidth  = 1; innerSpaces = 0
- The second row will have 1 ` `, 1 `*`, 1 ` `, 1 `*` and 1 ` `			starWidth = 3; innerSpaces = 1
- The third row will have 1 `*`, 3 ` `s, and 1 `*`									starWidth = 5; innerSpaces = 3
- The fourth row will have 1 ` `, 1 `*`, 1 ` `, 1 `*` and 1 ` `			starWidth = 3; innerSpaces = 1
- The fifth row will have 2 ` `s, 1 `*`, followed by 2 ` `s 				starWidth = 1; innerSpaces = 0

iteration
filtering / searching
transformation
reducing
interrogation
sort

*/
