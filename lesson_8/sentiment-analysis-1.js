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

var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  var wordList = text.toLowerCase().replace(/\n/g, ' ').replace(/[-:\.\!\,\?]/g, '').split(' ');

  var positive = wordList.filter(function(word) {
    return positiveWords.includes(word);
  });

  var negative = wordList.filter(function(word) {
    return negativeWords.includes(word);
  });

  logSentiment(positive, negative);
}

function logSentiment(positiveMatches, negativeMatches) {
  var positiveLength = positiveMatches.length;
  var negativeLength = negativeMatches.length;

  console.log('There are ' + positiveLength + ' positive words in the text.')
  console.log('Positive sentiments: ' + negativeMatches.join(', '));
  console.log('');
  console.log('There are ' + negativeLength + ' negative words in the text.');
  console.log('Negative sentiments: ' + negativeMatches.join(', '));
  console.log('');
  console.log('The sentiment of the text is ' + determineSentimentality(positiveLength, negativeLength) + '.');
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

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.

// abstractions: 
// Need to filter the list for words that are positive.
// we then take the count of this and the join of the words.

// we repeat this for the negative words.

// We have a function that formats our responses and a function that checks
// whether the overall text is positive or negative.

// Their Abstractions:

// Our solution should take the shape of a filter: we need to filter the text into two lists, one that contains positive words, 
// and one that contains negative words. Once we have these lists, an output summary is easy

// var wordList = text.toLowerCase().replace(/\n/g, ' ').replace(/[-:\.\!\,\?]/g, '').split(' ');

// This statement converts all characters to lowercase, replaces all the newline characters with spaces, removes special characters (-:.,!?),
// then splits the text into an array of words which it stores in wordList.

// I got pretty close, except I forgot to include the global keyword and escape a few of the special characters, though I don't know if this was
// 100% necessary for the ones they selected

// Their solution:

// function sentiment(text) {
//   var wordList = text.toLowerCase().replace(/\n/g, ' ').replace(/[\.\!\,\?]/g, '').split(' ');
//   var textSentiment;

//   var positives = wordList.filter(function(word) {
//     return positiveWords.indexOf(word) >= 0;
//   });

//   var negatives = wordList.filter(function(word) {
//     return negativeWords.indexOf(word) >= 0;
//   });

//   console.log('There are ' + positives.length + ' positive words in the text.');
//   console.log('Positive sentiments: ' + positives.join(', '));
//   console.log('');
//   console.log('There are ' + negatives.length + ' negative words in the text.');
//   console.log('Negative sentiments: ' + negatives.join(', '));
//   console.log('');

//   if (positives.length > negatives.length) {
//     textSentiment = 'Positive';
//   } else if (positives.length < negatives.length) {
//     textSentiment = 'Negative';
//   } else {
//     textSentiment = 'Neutral';
//   }

//   console.log('The sentinment of the text is ' + textSentiment + '.');
// }

// Solutions were actually quite similar. I felt my soluton was slightly more abstracted, their function was doing
// quite a bit. They also stored the sentiment in a variable whereas I moved that logic to the function and had it
// return a value that could be placed into the text. They also used indexOf >= 0, whereas I used includes.
