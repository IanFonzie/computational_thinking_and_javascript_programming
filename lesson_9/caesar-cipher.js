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

['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

console.log(caesarCipher('Hello, world', 5))
- H is uppercase; look for it in the upper table. It's position is 7 so we shift it to the right 5 spaces to get 'M'
- e is lowercase; look for it in the lower table (get it's index?). It's position is 4 so we shift it to the right 5 spaces to get 'j'
- l is lowercase; look for it in the lower table. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- l is lowercase; look for it in the lower table. It's position is 11 so we shift it to the right 5 spaces to get 'q'
- o is lowercase; look for it in the lower table. It's position is 14 so we shift it to the right 5 spaces to get 't'
- , is non-alphanumeric, skip it
- ' ' is non-alphanumeric, skip it
- w is lowercase; look for it in the lower table. It's position is 22 so we shift it to the right 5 spaces to get a position of 27
	- Need to wrap this around, since there are 26 letters, how many are left over when you divide 26 by 27


iteration
filtering / searching
transformation (seems like a good candidate)
reducing
interrogation
sort