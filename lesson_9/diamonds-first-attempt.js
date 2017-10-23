// input: an odd integer that represents the size of the diamond
// represent the total number of rows and the width of widest row

// output: 4 pointed diamond in an n x n grid
// return value is not important

// Requirements: A big part of this exercise is to translate the implicit requirements of "diamond shapes"
// to precise an explicit requirements that can be used to solve the problem. This can be done in a few
// different ways, and here's one that we're going to use:

// using 5 as an example:

// each row is a string of asterisks prepended by spaces
// the 5 rows will have 1 3 5 3 1 asterisks
// the 5 row swill have 2 1 0 1 2 spaces prepended

// Given the above, we can come up with a general model, for a diamond of size n:
// each row is a string of asterisks, prepended by spaces
// the n rows will have 1, 3,... n, ..3, 1 asterisks
// each row will have (n - countOfAsterisks)/2 spaces

// There may be other ways to model diamonds; for example, by breaking a diamond into two parts (a
// top triangle and a reverse triangle) The way you mentally model the diamond shape will dictate your
// algorithm and your code solution

// diamond(1)   *
// diamond(3)   * 
// 						 ***
// 							*

// start with a single asterisk, that's your first line
// *
// then progressively ad asterisks in increments of two
// determine the number of spaces by subtracting the diamondDimensions - the currentCountOfAsterisks / 2
// now we have: two sets of spaces and one of asterisks

// if (diamondDimensions < 1) {
// 	console.log('');
// 	return;
// }

// for i = 1 to diamondDimensions, increment by 1
// 	spaces are diamondDimensions - asterisks / 2
// 	build each row by setting the string to string.concat

function diamond(diamondDimensions) {
	var asteriskCount = 1;
	var reverse = false;
	var row;
	for (var i = 1; i <= diamondDimensions; i += 1) {
		row = buildDiamondRow(diamondDimensions, asteriskCount);
		console.log(row);
		if (asteriskCount === diamondDimensions) {
			reverse = true;
		} 

		asteriskCount = reverse ? asteriskCount - 2 : asteriskCount + 2; 
	}
}

function buildDiamondRow(rowLength, asterisks) {
	var spaceCount = (rowLength - asterisks) / 2;
	var asteriskString = '*'.repeat(asterisks);
	var spaceString = ' '.repeat(spaceCount);
	return spaceString + asteriskString + spaceString;
}