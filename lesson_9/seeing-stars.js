function star(starDimensions) {
	var totalSpaces;
	var outerSpaces;
	var row;
	
	if (starDimensions < 7 || starDimensions % 2 === 0) {
		console.log("Please enter an odd-numbered star greater than 7.");
	}

	outerSpaces = 0;
	totalSpaces = starDimensions - 3;
	for (var i = outerSpaces; i < starDimensions; i += 1) {
		row = buildRow(i, starDimensions, outerSpaces, totalSpaces);
		console.log(row);
		outerSpaces += i >= Math.floor(starDimensions / 2) ? -1 : 1;	
	}
}

function buildRow(rowNumber, starDimensions, outerSpaces, totalSpaces) {
	var currentRow;
	var innerSpaces;
	if (rowNumber !== Math.floor(starDimensions / 2)) {
		innerSpaces = totalSpaces - outerSpaces * 2;
		currentRow = ' '.repeat(outerSpaces) + ('*' + ' '.repeat(innerSpaces / 2)).repeat(2) + '*';
	} else {
		currentRow = '*'.repeat(starDimensions);
	}
	
	return currentRow;
}

/*

input: An odd integer that is >= 7
output: an 8-pointed star in an n x n grid, i.e. if n was 7, the grid would be 7 x 7

definitions:
- The smallest star we need to deal with is 7
- Stars must be odd
- The grid that contains the star will be as wide as the star itself; if the star's dimensions are
7 then the grid will be 7 x 7

- rules:
(Will work though an example below)
- each row will have three stars, separated by a certain about of inner and outer spaces
- start with 0 outer spaces
- get the number of total spaces by subtracting 3 from n
- for each row:
	- subtract the number of outerSpaces * 2 from the number of totalSpaces to get the number of inner spaces
	build the row:
		if (row !== Math.floor(n / 2))
			- append the number of outerSpaces + ('*' + ' '.repeat(innerSpaces)).repeat(2) + '*'
		else 
			- row of n `*`s
		- log the row
	- outerSpace += row >= Math.floor(n / 2)) ? -1 : 1;

Data Structure:

we will be working with rows of strings that will be logged to the console. Since we are progressively logging to
the console with each iteration, we can maintain our data in string format.

Algorithm:
if (n < 7 or n % 2 === 0) {
	log "Please enter an odd-numbered star greater than 7."
}

initialize outerSpaces to 0
totalSpaces = starDimensions - 3
for (var i = outerSpaces; i < starDimensions; i += 1) {
	subtract outerSpaces * 2 from totalSpaces;
	if (row !== Math.floor(n / 2)) {
		build the row by concatenating outerSpaces + ('*' + ' '.repeat(innerSpaces)).repeat(2) + '*';
	} else {
		build the row by repeating n stars
	}
	console.log(row);
	if (row > Math.floor(n / 2)) outerSpace -= 1 otherwise outerSpace += 1
}


testcases: 
star(7)
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

star(9)
// logs
*   *   *
 *  *  *
  * * *
   ***
********* 
   ***
  * * *
 *  *  *
*   *   *

star(11)
// logs
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
		***
	 * * *
  *  *  *
 *   *   * 
*    *    *


- example:

star(7):
- for the first row we add a `*`, two spaces, another `*`, two spaces and another `*`
	- n = 0, totalSpaces = 4, innerSpaces = 4, outerSpaces = 0
-	for the second row we now have an outside spaces, a `*`, an inner space, another `*`, 
another inner space, another `*` and an outer space
	- n = 1, totalSpaces = 4, innerSpaces = 2, outerSpaces = 2
- for the third row we three outer spaces, three `*`s, and three more outer spaces
	- n = 2, totalSpaces = 4, innerSpaces = 0, outerSpaces = 4
- for the fourth row we have all `*`s; this feels like a special case
	- n = 3, totalSpaces = 0, innerSpaces = 0, outerSpaces = 0
- for the fifth row we three outer spaces, three `*`s, and three more outer spaces
	- n = 4, totalSpaces = 4, innerSpaces = 0, outerSpaces = 4
-	for the sixth row we now have an outside spaces, a `*`, an inner space, another `*`, 
another inner space, another `*` and an outer space
	- n = 5 totalSpaces = 4, innerSpaces = 2, outerSpaces = 2;
- for the last row we add a `*`, two spaces, another `*`, two spaces and another `*`
	- n = 0, totalSpaces = 4, innerSpaces = 4, outerSpaces = 0

iteration
filtering / searching
transformation
reducing
interrogation
sort

*/