function anagram(word, list) {
  return list.filter(function(candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.split('').sort();
  var targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
  	return false;
  }

  return array1.every(function(character, index) {
  	return character === array2[index];
  });
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']); // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);  // [ "enlist", "inlets" ]

// Thinking in abstractions, split the word and sort it
// Filter each word depending on whether or not they are the same.

// You should see that the general "shape" of the solution is a filter - we want a subset of a list of words:
// those that are anagrams of the main word.

// areAnagrams is a natural abstration that tells whether two words are anagrams of each other. How do we decide whether
// they are though? one approach we can take is to split the words into arrays of letters, sort those arrays, and then
// compare the two arrays: they need to have the same length with identically valued elements.