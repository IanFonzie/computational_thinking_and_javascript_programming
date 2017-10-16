var firstName = 'Ian';
var lastName = 'Fonberg';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

var pi = 22 / 7;
pi = pi.toString();
console.log(pi.lastIndexOf('14'));

// var boxNumber = 356.toString();
// console.log(boxNumber);

// received an error because when you call it directly on a number (i.e. not in a variable), JavaScript
// interprets the period immediately after a number as decimal point, not a method separator.

// one way to avoid this is to use two periods, like so:

// var boxNumber = 356..toString();
// console.log(boxNumber);

// This time, the program works and logs the String '356'. ADding a second period acts as a method separator,
// which lets you call the method directly on a number.

// some linter programs reject this usage and instead suggest that you use parentheses, like so:

var boxNumber = (356).toString();
console.log(boxNumber);

console.log(typeof boxNumber);
boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

var name = prompt('What is your name?');
var message;
if (name.endsWith('!')) {
	var nameOnly = name.slice(0, -1);
	message = 'Hello ' + nameOnly + '. Why are we screaming?';
	message = message.toUpperCase();
} else {
	message = 'Hello ' + name + '.'
}

console.log(message);

// Their solution

var name = prompt('What is your name?');

if (name.endsWith('!')) {
	name = name.slice(0, -1);
	console.log('Hello ' + name.toUpperCase() + '. WHY ARE WE SCREAMING?');
} else {
	console.log('Hello ' + name + '.');
}