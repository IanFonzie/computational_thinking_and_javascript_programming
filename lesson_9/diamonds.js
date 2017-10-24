function diamond(diamondDimensions) {
	var start = 1;
	var starCount = start;
	var reverse = false;
	var currentRow;
	var spaceCount;
	for (var i = start; i <= diamondDimensions; i += 1) {
		spaceCount = (diamondDimensions - starCount) / 2;
		currentRow = ' '.repeat(spaceCount) + '*'.repeat(starCount)
		console.log(currentRow);
		if (starCount === diamondDimensions) {
			reverse = true;
		}
		starCount += reverse ? -2 : 2;
	}
}

/*

Input: Odd integer representing the width and height of the diamond
Output: Console output of a diamond that is n characters wide and n characters high in an n x n grid

Definitions:
- All inputs are odd integers
- The console will log a diamond that is n `*`s high and n `*`s wide in an n x n grid.
- Rules (How do I determine how diamonds are drawn?)
(Will work though an example below)
(Might describe my answer in plain english below)
start at 1 to n rows
set the starCount equal to start
for 1 - n rows:
- construct a string
	- add starCount - diamondDimensions / 2 spaces to the string
	- add the starCount to the string
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
***
 *

diamond (5) 
// logs
  *
 ***
*****
 ***
  *

 diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

Data Structure:

- string of characters

- to convert the input data to our datastructure, we use the current index and diamond count to determine how many characters
need to be added to the string

Algorithm:
set start = 1
set the starCount equal to start
for start - diamondDimension rows:
- construct a string, ''
	- add starCount - diamondDimensions / 2 spaces to the string
	- add the starCount to the string
	- log the current string to the console
	- increment the starCount by 2
- when startCount === diamondDimensions, set reverse flag
		- when reverse flag is set, decrement the starCount by 2


assuming we have diamondDimensions of 3:

The grid will be 5 x 5:
- The first row will have 2 ` `s, 1 `*`, followed by 2 ` `s
- The second row will have 1 ` `, 3 `*`s, and 1 ` `
- The third row will have 5 `*`s
- The fourth row will have 1 ` `, 3 `*`s, and 1 ` `
- The fifth row will have 2 ` `s, 1 `*`, followed by 2 ` `s

plain english:

so Joe, building a diamond is pretty easy. For the first row start at the middle of the grid by adding 
an equal amount of spaces on both sides of the `*`. To get the number of spaces you need on either side, 
subtract 1 from 5 and divide by 2. This'll give you 2 spaces on either side. To keep the diamond even we're
going to need to add two additional `*`s to the first one. Since we have three stars this time, our padding 
will be different this time. To determine the padding we can just use the same formula. We subtract 3 from 5
and divide by 2, which gives us a total of 1 ` ` on either side of the row. Again we increase the rows by 2,
giving us a total of 5 diamonds. Since we have 5 diamonds we don't need any spaces. Now that we've reached the
edges of the diamond we need to start moving backwards. Instead of incrementing by 2, we start taking `*`s off
of our diamond, so on this row we decrease our `*`s by two and determine the number of spaces. we continue with
this process until we reach the end of the rows.


iteration
filtering / searching
transformation
reducing
interrogation
sort

*/
