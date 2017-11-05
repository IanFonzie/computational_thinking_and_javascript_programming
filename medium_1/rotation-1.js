function rotateArray(array) {
	if (!Array.isArray(array)) {
		return
	}

	if (array.length === 0) {
		return [];
	}

	var copy = array.slice();
	var first = copy.splice(0, 1);
	return copy.concat(first);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{a: 2}, [1, 2], 3]));      // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

/*

input: An array containing anything
output: An new array that has the first element in the original array moved to the last

definitions:
- if the input is not an array, return nothing
- if the input is an empty array return an empty array
- take the first element and move it to the last position in the new array

Rules:
(will work through an example below)
- check if the input is an array
- copy the array
- remove 7 from the array and store it
- conatenate the copied array with the stored value

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{a: 2}, [1, 2], 3]);      // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined

algorithm:
- if the input isn't an array, return undefined
- if input.length is 0, return an empty array
- slice the original array to make a copy
- splice the copied array at index (0) and store the result
- concatenate the copied array witht he stored result

7, 3, 5, 2, 9, 1
stored = 7
3, 5, 2, 9, 1
3, 5, 2, 9, 1, 7

*/
