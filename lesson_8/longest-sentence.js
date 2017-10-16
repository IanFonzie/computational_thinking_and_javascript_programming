// Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), 
// exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or 
// sentence-ending characters as a word. Log the longest sentence and its word count to the console.

var longText = 'Four score and seven years ago our fathers brought forth' +
' on this continent a new nation, conceived in liberty, and' +
' dedicated to the proposition that all men are created' +
' equal.' +
' Now we are engaged in a great civil war, testing whether' +
' that nation, or any nation so conceived and so dedicated,' +
' can long endure. We are met on a great battlefield of that' +
' war. We have come to dedicate a portion of that field, as' +
' a final resting place for those who here gave their lives' +
' that that nation might live. It is altogether fitting and' +
' proper that we should do this.' +
' But, in a larger sense, we can not dedicate, we can not' +
' consecrate, we can not hallow this ground. The brave' +
' men, living and dead, who struggled here, have' +
' consecrated it, far above our poor power to add or' +
' detract. The world will little note, nor long remember' +
' what we say here, but it can never forget what they' +
' did here. It is for us the living, rather, to be dedicated' +
' here to the unfinished work which they who fought' +
' here have thus far so nobly advanced. It is rather for' +
' us to be here dedicated to the great task remaining' +
' before us -- that from these honored dead we take' +
' increased devotion to that cause for which they gave' +
' the last full measure of devotion -- that we here highly' +
' resolve that these dead shall not have died in vain' +
' -- that this nation, under God, shall have a new birth' +
' of freedom -- and that government of the people, by' +
' the people, for the people, shall not perish from the' +
' earth.';

function longestSentence(text) {
	var sentences = text.match(/\b.+?[\.\!\?]/g);
	var longest = sentences.reduce(lengthCompare);
	var longestLength = sentenceLength(longest);

	logLongest(longest, longestLength);
}

function sentenceLength(sentence) {
	return sentence.split(' ').length;
}

function lengthCompare(longest, current) {
	return sentenceLength(current) > sentenceLength(longest) ? current : longest;
}

function logLongest(longest, longestLength) {
	console.log(longest);
	console.log('');
	console.log('The longest sentence has ' + longestLength + ' words.');
}

longestSentence(longText);

// console output

// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.

// abstractions:

// Make an array of sentences. These end with ., ? or ! and start with any number of words do this using a global regex.
// I lose out on the ending punctuation if I try to split.
// reduce the sentences to see which one has the longest length

// Their solution:

// function longestSentence(text) {
// 	var sentenceArray = text.match(/\w.*?[.!?]/g);

// 	var longest = sentenceArray.reduce(function(longest, currentSentence) {
// 		return wordCount(longest) > wordCount(currentSentence) ? longest : currentSentence;
// 	});

// 	console.log(longest);
// 	console.log('The longest sentence has ' + wordCount(longest) + ' words');
// }

// function wordCount(sentence) {
// 	return sentence.split(' ').length;
// }

// Basically had the same solution that they did. I accidentally compared the literal sentence length
// instead of the count of words, which did work because the sentence had more characters however this
// could have just been one really long word that still wouldn't have been as long in terms of length.
// My regex was also slightly different. I logged mine separately and called my lengthCompare function
// from the reduce method.

// Their explanation:

// The point of interest in this solution is this statement:

// var sentenceArray = text.match(/\w.*?[.!?]/g);

// Note the use of String.prototype.match. Some people try to solve this problem with String.prototype.split,
// but split loses punctuation.

// Match, on the other hand, doesn't lose the punctuation. The challenge, though, is describing a regex pattern
// that matches each sentence.

// The solution leverages the lazy quantifier (*?) to restrict the match to the shortest possible string: a
// single sentence. Givern the pattern, a match:

// \w - starts with any word character.
// .*? may contain any number of characters in the middle (even zero characters).
// [.!?] - ends when the first ., !, or ? after the starting word character is reached.

// \w guarantees that it starts with at least one word character while .* lets there be anything in between the two.
// ?[.!?] guarantees that it will stop at the first ., !, or ?.

