var title = 'The Three-Body Problem';

// Style guide recommends using single quotes with Strings, unless the Strings
// contains single quotes

var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;

// use one var declaration per variable, variable names should also be 
// camelCase. I wasn't looking at the variable names.

var completed = lastPageRead === 400;

// definitely need triple equality. possibly avoid confusing arrow syntax
// by adding brackets arround the statement.

if (finishedBook()) {
	console.log('You have finished reading this book');
}

// use brackets around multi-line if statements

function read(pages) {
	var i;
	var message;

	console.log('You started reading.');
	for (i = 0; i < pages; i += 1 ) {
		message = 'You read page' + String(i);
		console.log(message);
	}
}

read(400);

// errors that I can see:

// 1. tabs are four spaces
// 2. operators not set off with spaces
// 3. should use i += 1
// 4. possible hoisting for the message variable
// 5. No explicit coercion on line 4 (missed this. Need to really remember
// it in the future)

// Style guide recommends using two spaces to indent code and surrounding 
// operators with spaces. It also suggests (on the ES5 page) that all
// variables be declare dat the top of the function. This helps new JavaScript
// developers particularly as it clearly shows what happens when JavaScript
// hoists the declarations. Another thing it recommends is to use explicit
// string coercion and as such var i is coerced to a string. Finally, the 
// style guide receommends avoiding the ++ and -- operators.
