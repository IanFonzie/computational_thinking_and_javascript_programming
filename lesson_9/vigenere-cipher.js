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

vigenereCipher('Hello, world!', 'meat') 

First letter is 'H', 

*/