function vigenereEncrypt(plaintext, keyword) {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
	var keywordIndexArray = constructKeywordIndexArray(keyword, alphabet);
	var i = 0;
	
	var encrypted = plaintext.split('').map(function(char) {
		var shiftValue;
		if (/[A-Za-z]/.test(char)) {
			shiftValue = yieldShiftValue(keywordIndexArray, i);
			i += 1;
			return shiftChar(char, shiftValue, alphabet);
		} else {
			return char
		}
	});
	
	return encrypted.join('');
}

function constructKeywordIndexArray(keyword, alphabet) {
	var lowercase = keyword.toLowerCase();
	return lowercase.split('').map(function(char) {
		return alphabet.indexOf(char);
	});
}

function yieldShiftValue(keywordArray, incrementor) {
	return keywordArray[incrementor % keywordArray.length];
}

function shiftChar(char, shiftValue, alphabet) {
	var upper = char === char.toUpperCase();
	var formattedChar = upper ? char.toLowerCase() : char;
	var shiftedChar = shift(formattedChar, shiftValue, alphabet);
	if (upper) {
		shiftedChar = shiftedChar.toUpperCase();
	}

	return shiftedChar;
}

function shift(character, shift, alphabet) {
	var shiftIndex = shift + alphabet.indexOf(character);
	if (shiftIndex > alphabet.length - 1) {
		shiftIndex %= alphabet.length;
	}

	return alphabet[shiftIndex];
}

console.log(vigenereEncrypt('Pineapples don\'t go on pizzas!', 'meat')) // Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt('abc', 'dog')) // dpi
console.log(vigenereEncrypt('ABC', 'dog')) // DPI
console.log(vigenereEncrypt('aBc', 'dog')) // dPi
console.log(vigenereEncrypt('', 'dog')) // 
console.log(vigenereEncrypt('a', 'dog')) // d
console.log(vigenereEncrypt('1, 2, 3', 'dog')) // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', 'meat')) // Tilea, aokxh!
console.log(vigenereEncrypt('abc', 'DOG')) // dpi
console.log(vigenereEncrypt('ABC', 'DOG')) // DPI
console.log(vigenereEncrypt('aBc', 'DOG')) // dPi
console.log(vigenereEncrypt('', 'DOG')) // 
console.log(vigenereEncrypt('a', 'DOG')) // d
console.log(vigenereEncrypt('1, 2, 3', 'DOG')) // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', 'MEAT')) // Tilea, aokxh!
console.log(vigenereEncrypt('abc', 'Dog')) // dpi
console.log(vigenereEncrypt('ABC', 'Dog')) // DPI
console.log(vigenereEncrypt('aBc', 'Dog')) // dPi
console.log(vigenereEncrypt('', 'Dog')) // 
console.log(vigenereEncrypt('a', 'Dog')) // d
console.log(vigenereEncrypt('1, 2, 3', 'Dog')) // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', 'Meat')) // Tilea, aokxh!
console.log(vigenereEncrypt('abc', 'd')) // def
console.log(vigenereEncrypt('ABC', 'd')) // DEF
console.log(vigenereEncrypt('aBc', 'd')) // dEf
console.log(vigenereEncrypt('', 'd')) // 
console.log(vigenereEncrypt('a', 'd')) // d
console.log(vigenereEncrypt('1, 2, 3', 'd')) // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', 'm')) // Tqxxa, iadxp!

/*

Input: 
- plaintext consisting of any characters 
- keyword where each letter represents the number of letters to the right to shift in the alphabet
based on it's 0 indexed numerical position in the alphabet

Output: an encrypted string with non-alphabetical characters and case are preserved.

Definitions:
- Each letter of the keyword is a shift value
	- a-z === 0-25
	- case doesn't matter
- For each character in plaintext:
	- apply the current shift value to a caesar cipher
	- if the current character is not alphabetical, the current value in the keyword is not applied to it
		- moves to the next alphabetical character instead.

Rules:
(Will work though an example below)
(Might describe my answer in plain english below)
for each letter in the plaintext:
	- if the character is alphabetical
	- determine the character is uppercase
		- set a boolean to true if char is equal to char.toUpperCase()
		and convert the character to lowerCase()
		- convert the keyword to lowercase
		- yield the next character in the keyword
			- to yield the next character start with a incrementor variable initialized to 0
			- then modulus the incrementor by the length of the keyword to get the current position in the key word
			- take the character at the current position in the keyword and find the index of that character in the alphabet
			- use the character's alphabet index as the shift value in the keyword
		- add current character's index an the keyword character's alphabetical index together
		- if this number exceeds alphabet.length - 1
			- take the modulus of the (character's index + the key word character's alphabetical index) by alphabet.length
		- find the value of the new index in the alphabet array
		- if the upper boolean set to true, convert the character toUpperCase()
		- return the character
	- else 
			return the character

Data Structure:
- since we have to iterate and will be manipulating each character, 
an array of characters will be our data structure
- we will store the keyword as an array of number indexes in the alphabet.

Algorithm:
- two parts:
	- create the keyword array by splitting the keyword, converting the character to lowercase and
	mapping the index in the alphabet for the character
- map each letter in the plaintext:
	- if (/[a-z]/i.test(char))
		- initialize incrementor var i = 0
		- if (char === char.toUpperCase())
			- set var upper = true;
			- create a formattedChar and set it to char.toLowerCase()
		-	yieldShiftValue(incrementor, keywordIndexArray)
		- yieldShiftValue(incrementor, keywordIndexArray)
			- return keywordIndexArray[incrementor % keywordIndexArray.length];
		- shiftIndex = shiftValue + charIndex
		shiftChar() {
			- if (shiftIndex > alphabet.length - 1) {
				shiftIndex %= 26;
			}
			- return alphabet[shiftIndex]
		}
		if (upper) {
			formattedChar = formattedChar.toUpperCase()
		}
		i += 1;
		return formattedChar;
	else {
		return char;
	}

test cases (for plaintext)			(for keyword)
- covering all uppercase 				all uppercase
- all lower case 								all lowercase
- mixed case                    mixed case
- '' empty string               one char
- 1 char
- all non-alpha
- mix of alpha and non-alpha

console.log(vigenereEncrypt('abc', 'dog')) // dpi
console.log(vigenereEncrypt('ABC', 'dog')) // DPI
console.log(vigenereEncrypt('aBc', 'dog')) // dPi
console.log(vigenereEncrypt('', 'dog')) // 
console.log(vigenereEncrypt('a', 'dog')) // d
console.log(vigenereEncrypt('1, 2, 3'), 'dog') // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', meat)) // Tilea, aokxh!!
console.log(vigenereEncrypt('abc', 'DOG')) // dpi
console.log(vigenereEncrypt('ABC', 'DOG')) // DPI
console.log(vigenereEncrypt('aBc', 'DOG')) // dPi
console.log(vigenereEncrypt('', 'DOG')) // 
console.log(vigenereEncrypt('a', 'DOG')) // d
console.log(vigenereEncrypt('1, 2, 3'), 'DOG') // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', MEAT)) // Tilea, aokxh!
console.log(vigenereEncrypt('abc', 'Dog')) // dpi
console.log(vigenereEncrypt('ABC', 'Dog')) // DPI
console.log(vigenereEncrypt('aBc', 'Dog')) // dPi
console.log(vigenereEncrypt('', 'Dog')) // 
console.log(vigenereEncrypt('a', 'Dog')) // d
console.log(vigenereEncrypt('1, 2, 3'), 'Dog') // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', Meat)) // Tilea, aokxh!
console.log(vigenereEncrypt('abc', 'd')) // def
console.log(vigenereEncrypt('ABC', 'd')) // DEF
console.log(vigenereEncrypt('aBc', 'd')) // dEf
console.log(vigenereEncrypt('', 'd')) // 
console.log(vigenereEncrypt('a', 'd')) // d
console.log(vigenereEncrypt('1, 2, 3'), 'd') // 1, 2, 3
console.log(vigenereEncrypt('Hello, world!', 'm')) // Tqxxa, iadxp!

vigenereEncrypt('Hello, world!', 'meat') 

First letter is 'H', I'm looking at the keyword, it's letter is m. 
	- m's position in 'abcdefghijklmnopqrstuvwxyz' is 13, we shift 'H' by thirteen characters to get 'T'
Move on to the next character, 'e'
	-move to the next letter in the keyword since it's alphabetical: e
	- e's position in the alphabet is 4, so we shifted the original e by 4 characters to get i
Move on to the next character , 'l'.
	- move to the next letter in the keyword since it's alphabetical: a
	- a's position in the alphabet is 0, so we shift l by 0 characters to get l
Move on to the next character, 'l'.
	- move on to the next character in the keyword sine it's alphabetical: t
	- t's position in the alphabet is 19, so we shift l by 19 characters
		- since l (11) + t (19) > 25 we do the modulo of ( 11 + 19 ) by 26 ( length of the alphabet )
			- this gives us 'e'
- move on to the next character, 'o'.
	- Since there are no more keywords in the letter we return back to the beginning, 'm'
	- m's position in 'abcdefghijklmnopqrstuvwxyz' is 13, so we shift 'o' by 13
		- o (14) + 13 > 25 so we do the modulo of (14 + 13) by 26
			- this gives us 'a'
- move on to the next character, ','
	- ',' is not alphabetical so move to the next character and do not INCREMENT the keyword
- move on to the next character, ' '
	- ' ' is not alphabetical so move to the next character and do not INCREMENT the keyword
- move on to the next character, 'w'
	- increment the keyword by 1 to the next value in the keyword, e
	- e's position in the alphabet is 4, so we shift w (22 + 4)
		- since 22 + 4 > 25 we take the modulus of (22 + 4) % 26 to get 'a'
- move on to the next character, 'o'
	- increment the keyword by 1 to the next value in the keyword, a
	- a's position in th ealphabet is 0, so we shift o's position (14) by 0 characters to get 'o'
- move on to the enxt character 'r'
	- increment the keyword by 1 to the next value in the keyword, t
	- t's position in the alphabet is 19, so we shift 'r' (17) by 19 characters
		- since r (17) + t (19) > 25 we do the modulo of (17 + 19) by 26 to get k
- move on to the next character 'l'
	- 'Since we there are no more keywords we reset the counter to 0 and begin at the start of the keyword: m
	- m's position in th ealphabet is 12, so we shift l (11) by 12 to get x
- move on to the next character 'd'
	- increment the keyword by 1 to the next value in the keyword: e
	- e's position in the alphabet is 4, so we shift, d (3) by 4 to get h
- move on the the next character '!'
	'!' is not alphanumeric so move to the next character and do not increment the keyword

*/
