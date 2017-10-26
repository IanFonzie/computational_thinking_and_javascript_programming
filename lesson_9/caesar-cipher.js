var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(plaintext, key) {
	var charArray = plaintext.split('');
	var encrypted = charArray.map(function(char) {
		if (/[A-Za-z]/.test(char)) {
			var shifted
			var upper = char === char.toUpperCase();
			var formattedChar = upper ? char.toLowerCase() : char;
			shifted = ALPHABET.indexOf(formattedChar) + key;
			if (shifted > ALPHABET.length - 1) {
				shifted %= ALPHABET.length;
			}
			return upper ? ALPHABET[shifted].toUpperCase() : ALPHABET[shifted];
		} else {
			return char;
		}
	});

	return encrypted.join('');
}

// Simple shift
caesarEncrypt('A', 0);       // 'A'
caesarEncrypt('A', 3);       // 'D'

// Wrap around
caesarEncrypt('y', 5);       // 'd'
caesarEncrypt('a', 47);      // 'v'

// All letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// ZABCDEFGHIJKLMNOPQRSTUVWXY
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?

/*

input: 
	- A plaintext string that can consist of uppercase and lowercase letters, as well as non-alphanumeric characters
	- A number key argument indicating the amoount of characters to shift in the alphabet
output: 
	- A string where all alphanumeric characters are shifted n characters, where n is the key argument in the input and both case
	and non-alphanumeric characters are preserved.

Definitions:
	- for each letter in the string, shift the character n positions to the right in the alphabet; n represent the key argument
		- Preserve the case of the letters when shifting
		- If the key argument exceeds the length of the alphabet, wrap around the alphabet
	- Ignore non-alphanumeric characters

Rules:
(Will work though an example below)
(Might describe my answer in plain english below)
- for each character in the plaintext string:
	- if the character is alaphabetical:
		- flag the actual case of the letter and set it to lowercase
		- look for the index + key spaces in the letter array
			- if index plus key are greater than 26, find the modulus of the index plus key divided by 26
	- if the character is not alphabetical skip it

Test Cases: 

abcdefghijklmnopqrstuvwxyz

console.log(caesarEncrypt('', 1)) // ''
console.log(caesarEncrypt('ABC', 1)) // BCD
console.log(caesarEncrypt('abc', 1)) // bcd
console.log(caesarEncrypt('AbC', 1)) // BcD
console.log(caesarEncrypt('xYz', 1)) // yZa
console.log(caesarEncrypt('WxY', 1)) // XyZ
console.log(caesarEncrypt('a,1', 1)) // b,1
console.log(caesarEncrypt('1, 2, 3', 1)) // 1, 2, 3
console.log(caesarEncrypt('ABC', 27)) // BCD
console.log(caesarEncrypt('abc', 53)) // bcd
// console.log(caesarEncrypt('AbC', -1)) // ZaB
console.log(caesarEncrypt('aBc', 0)) // aBc
console.log(caesarEncrypt('aBc', 2)) // cDe

console.log(caesarEncrypt('A', 0)); // 'A'
console.log(caesarEncrypt('A', 3)); // 'D'
console.log(caesarEncrypt('y', 5)); // 'd'
console.log(caesarEncrypt('a', 47)); // 'v'
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25)); 
// ZABCDEFGHIJKLMNOPQRSTUVWXY

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?

console.log(caesarCipher('Hello, world!', 5))
- H is uppercase; flag the upper boolean variable. It's position is 7 so we shift it to the right 5 spaces to get 'M'
- e is lowercase; do not flag the upper variable (get it's index?). It's position is 4 so we shift it to the right 5 spaces to get 'j'
- l is lowercase; do not flag the upper variable. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- l is lowercase; do not flag the upper variable. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- o is lowercase; do not flag the upper variable. It's position is 14 so we shift it to the right 5 spaces to get 't'
- , is non-alphanumeric, skip it
- ' ' is non-alphanumeric, skip it
- w is lowercase; do not flag the upper variable. It's position is 22 so we shift it to the right 5 spaces to get a position of 27
	- Need to wrap this around, since there are 26 letters, how many are left over when you 27 modulus 26
- o is lowercase; do not flag the upper variable. It's position is 14 so we shift it to the right 5 spaces to get 't'
- r is lowercase; do not flag the upper variable. It's position is 17 so we shift it to the right 5 spaces to get 'w'
- l is lowercase; do not flag the upper variable. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- d is lowercase; do not flag the upper variable. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- ! is non-alphanumeric, skip it

Data Structure:
- iterate through our charcters to map out a new array of shifted characters
- data structure that will work best for this is an array of characters

Algorithms:
- To get an an array of characters, split the plaintext on every character string.split('')
- For each character in the array of characters we map:
	- if (/[A-Za-z]/.test(character)) {
			- upper = char === char.toUpperCase() ? true : false;
			- index is alphabet.indexOf(char)
			- shifted is char + alphabet % 26
			- return char = uppper ? char.toUpperCase() : char
		} else {
			- return the char
		}
	}

iteration
filtering / searching
transformation (seems like a good candidate)
reducing
interrogation
sort

*/