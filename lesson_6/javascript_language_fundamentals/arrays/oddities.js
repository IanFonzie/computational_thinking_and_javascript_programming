function oddities(array) {
  var oddElements = [];
  for (var i = 0; i < array.length; i += 2) {
    oddElements.push(array[i]);
  }
  return oddElements;
}

oddities([2, 3, 4, 5, 6]) === [2, 4, 6]   // false
oddities(['abc', 'def']) === ['def']      // false

// JavaScript only considers arrays to be equal if they point to the same array object,
// not if they contain the same values. This can be demonstrated with the following code.

// [2, 4, 6] === [2, 4, 6]; // false
// var arr = [2, 4, 6];
// var arr2 = arr;
// arr === arr2; // True

// IN the case of the second instance, even if the values were being compared this still wouldn't
// be true because the first element in the array is 'abc'.

// Their explanation:

// The result for the comparison will always be false unless it is the actual objects that are being
// comapred. Recall that Arrays are Objects and that the only way for the === comparison operator to
// return true for array comparison is if its the exact same object or a comparison is done between
// the contents of the array and not the array itself.