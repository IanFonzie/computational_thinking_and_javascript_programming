function acronym(string) {
	return string.split(/[ -]/).map(function(word){
		return word[0].toUpperCase();
	}).join('');
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"

// Abstractions, regex will be useful here.

// I think the easiest way to do this is to split the string using spaces or dashes, 
// map the words to a new array and then reduce to get the acronym.

// This problem's shape is transformation. We need to transform each word to its capitalized
// initial letter.

// Our criteria requires us to treat hyphenated words as multiple words. Need to normalize the text
// first (I think this is unnecessary). Use a regex with String.prototype.replace() to do this. Intent
// here is to entsure that when we parse the words into an array we treat the compound words as as separate
// words.

// Their solution:

// function acronym(string) {
// 	var stringArray = string.replace(/-/g, ' ').split(' ');
// 	var initials;

// 	initials = stringArray.map(function(word) {
// 		return word[0].toUpperCase();
// 	});

// 	return initials.join('');
// }

// second solution: (very similar to mine)

// function acronym(string) {
// 	return string.replace(/-/g, ' ').split(' ').map(function(word) {
// 		return word[0].toUpperCase();
// 	}).join('');
// }

// This is less readable.