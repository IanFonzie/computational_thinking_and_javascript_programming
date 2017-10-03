var arr = ['Apples', 'Peaches', 'Grapes'];

arr[3.4] = 'Oranges';
console.log(arr.length);
console.log(Object.keys(arr).length);

arr[-2] = 'Watermelon';
console.log(arr.length);
console.log(Object.keys(arr).length);

// Line 4 will log: 3 because 3.4 is not a valid index, though it is still considered a proerty of the arr object.
// Because of this, line 5 will log 4.

// Line 5 will log: 3 because -2 is not a valid index, though it is still considered a property of the arr object.
// Because of this, line 5 will log 5.

// Explanation:

// Recall that Arrays are implemented with Objects internally in JavaScript. One thing that differentiates the two
// is that arrays have a length property, but objects don't in a way, you can see arrays as special objects with only
// integer values (from 0 up to 2^32 - 1) as keys and with an extra length property that tracks how many such key/value
// pairs exist in the object.

var arr = ['Apples', 'Peaches', 'Grapes'];
arr[3.4] = 'Oranges';
arr[-2] = 'Watermelon';

console.log(arr);
// logs

// [ 'Apples',
//   'Peaches',
//   'Grapes',
//   '3.4': 'Oranges',
//   '-2': 'Watermelon' ]

console.log(Object.keys(arr));
// ['0', '1', '2', '3.4', '-2']
// 0, 1, and 2 are the indices/properties for
// Apples, Peaches, and Grapes

console.log(arr[0]); // Apples
console.log(arr[1]); // Peaches
console.log(arr[2]); // Grapes

// 3.4 and -2 are keys existing in the "Array Object"
