var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|d)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(nobler?)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or('s)?)?)/gi;

// function sentiment(text) {
// 	var wordList = text.toLowerCase().replace(/\n/g, ' ').replace(/[-:\.\!\,\?]/g, '').split(' ');

// 	var positives = wordList.filter(function(word) {
// 		return word.match(positiveRegex);
// 	});

// 	var negatives = wordList.filter(function(word) {
// 		return word.match(negativeRegex);
// 	});

// 	logSentiment(positives, negatives);
// }

// function logSentiment(positiveMatches, negativeMatches) {
//   console.log('There are ' + positiveMatches.length + ' positive words in the text.')
//   console.log('Positive sentiments: ' + negativeMatches.join(', '));
//   console.log('');
//   console.log('There are ' + negativeMatches.length + ' negative words in the text.');
//   console.log('Negative sentiments: ' + negativeMatches.join(', '));
//   console.log('');

//   var textSentiment = determineSentimentality(positiveMatches.length, negativeMatches.length);
//   console.log('The sentiment of the text is ' + textSentiment + '.');
// }

// function determineSentimentality(positiveLength, negativeLength) {
//   if (positiveLength > negativeLength) {
//     return 'Positive';
//   } else if (positiveLength < negativeLength) {
//     return 'Negative';
//   } else {
//     return 'Neutral';
//   }
// }

sentiment(textExcerpt);

// console output

// There are 9 positive type words in the text.
// Positive sentiments: nobler, fortune, devoutly, dream, dreams, respect, love, patient, resolution

// There are 10 negative type words in the text.
// Negative sentiments: troubles, die, heartache, die, death, scorns, oppressor's, despised, weary, death

// The sentiment of the text is Negative.

// Okay they wanted us to do this without sanitizing the text, another attempt.

function sentiment(text) {
	var positives = text.match(positiveRegex).map(toLowerCaseWord);
	var negatives = text.match(negativeRegex).map(toLowerCaseWord);
	logSentiment(positives, negatives);
}

function toLowerCaseWord(word) {
	return word.toLowerCase();
}

function logSentiment(positiveMatches, negativeMatches) {
  console.log('There are ' + positiveMatches.length + ' positive words in the text.')
  console.log('Positive sentiments: ' + negativeMatches.join(', '));
  console.log('');
  console.log('There are ' + negativeMatches.length + ' negative words in the text.');
  console.log('Negative sentiments: ' + negativeMatches.join(', '));
  console.log('');

  var textSentiment = determineSentimentality(positiveMatches.length, negativeMatches.length);
  console.log('The sentiment of the text is ' + textSentiment + '.');
}

function determineSentimentality(positiveLength, negativeLength) {
  if (positiveLength > negativeLength) {
    return 'Positive';
  } else if (positiveLength < negativeLength) {
    return 'Negative';
  } else {
    return 'Neutral';
  }
}

// Their solution: 

// function sentiment(text) {
// 	var positives = text.match(positiveRegex).map(toLowerCaseWord);
// 	var negatives = text.match(negativeRegex).map(toLowerCaseWord);
// 	var textSentiment;

// 	console.log('There are ' + positives.length + ' positive words in the text.');
// 	console.log('Positive sentiments: ' + positives.join(', '));
// 	console.log('');
// 	console.log('There are ' + negatives.length + ' negative words in the text.');
//   console.log('Negative sentiments: ' + negatives.join(', '));
//   console.log('');

//   if (positives.length > negatives.length) {
//   	textSentiment = 'Positive';
//   } else if (positives.length < negatives.length) {
//   	textSentiment = 'Negative';
//   } else {
//   	textSentiment = 'Neutral';
//   }

//   console.log('The sentiment of the text is ' + textSentiment + '.');
// }

// function toLowerCaseWord(word) {
// 	return word.toLowerCase();
// }

// I didn't realize that match would return an array of all the regexMatches at once, so looping through the array
// in my original solution was unnecessary. This happened because we used the global option on the regex. To make 
// the formatting more consistent they added a function that would map the collected array to a new array of 
// lowercase words. If there were duplicates in this paragrpah, they would show up multiple times in the result.