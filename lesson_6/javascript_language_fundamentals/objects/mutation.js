// var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// var array2 = [];

// for (var i = 0; i < array1.length; i++) {
//   array2.push(array1[i]);
// }

// for (var i = 0; i < array1.length; i++) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);

// array2 is not the same array as array1, we are building it using array1's values
// which are strings and, as such, are immutable.

// Therefore, when logged, array2 will log ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo']

// Explanation: array2 remains unchanged. But why should this be the case if array1 is an object?
// This is because even though the array is an object and is mutable, the values passed to array1
// were strings and, as such, are immutable.

// Further Exploration:

// If an object literal was part of the array1 elements pushed to array2, the changes made to the
// object literal in array1 would be reflected in array2 because objects are mutable and the value
// received when they are passed is a reference. If the two arrays are pointing to the same object,
// changes made in the first array would be reflected in the second array.

// To chang ethe code so that any changes made to array1 in the second for loop get reflected to array 2
// you would simply need to set them to be the same object, like so:

var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = array1;

// for (var i = 0; i < array1.length; i++) {
//   array2.push(array1[i]);
// }

for (var i = 0; i < array1.length; i++) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
