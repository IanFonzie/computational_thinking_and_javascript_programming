var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);
console.log(languages.length);

languages.length = 4;
console.log(languages);
console.log(languages.length);

languages.length = 1;
console.log(languages);
console.log(languages.length);

languages.length = 3;
console.log(languages);
console.log(languages.length);

languages.length = 1;
languages[2] = 'Python';
console.log(languages);
console.log(languages[1]);
console.log(languages.length);

// line 2 logs: ['JavaScript', 'Ruby', 'Python']
// line 3 logs: 3

// line 6 logs: ['JavaScript', 'Ruby', 'Python', empty x 1]
// line 7 logs: 4
// This happens because we altered the length of the array object, which will pad any extra
// slots in the array with empty values.

// line 10 logs: ['JavaScript']
// line 11 logs: 1
// This happens because we altered the length of the array object, where shortening the length
// of an array will permanently remove any elements whose index is greater than the set length

// line 14 logs: ['JavaScript', empty x 2]
// line 15 logs: 3
// Similar to lines 6 and 7, the properties that were removed by line 9 are not recovered and 
// instead padded with empty values

// line 19 logs: ['JavaScript', empty, 'Python']
// Elements that are greater than the length of the array will have empty values between it
// and the second greatest element in the array.
// line 20 logs: undefined
// line 21 logs: 3

// Similar to lines 6, 7, 14 and 15, it is trying to access an element that has not been defined but still
// occupies space in the array. 

// Explanation:

// The key takeaway for this exercise is that the length property can be set (remember that arrays are 0-based).
// Setting the length to a value that is shorter than the number of elements stored truncates the array; re-setting
// to a higher value does not bring back the truncated elements. Setting it to a higher value that then current length
// adds indices (indexes?) that hve undefined as the value of the element. Furthermore, since the value of the length
// will always be equal to the last index + 1, adding an element to index 2 of a 1 element array will make the length
// of the array be 3 even if only 2 of 3 positions have a defined value.