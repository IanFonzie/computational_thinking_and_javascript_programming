penultimate('last word')               // 'last'
penultimate('Launch School is great!') // 'is'

// function penultimate(string) {
//   return string.split(' ')[-2];
// }

// This problem is being caused by trying to access an array index the same way
// that we would with Ruby. The caveat here is that only positive integers are
// array indexes and since arrays are objects, we are trying to access a property
// of the array object that happens to be labeled '-2'. This property has not been
// defined so the function will return undefined.

// To fix this you could use the following code:

// My version:

// function penultimate(string) {
// 	var stringArr = string.split(' ');
//   return stringArr[stringArr.length - 2];
// }

// Their version:

function penultimate(string) {
	return string.split(' ').slice(-2, -1)[0];
}

// Explanation:

// In JavaScript, unlike other programming languages like Ruby, providing a negative index will
// not start getting the values fromt he end. it does not also return an error but instead returns
// undefined. This is the result because in JavaScript Arrays are Objects. By passing in -1 (i.e. 
// myArray[-1]) we are actually telling JavaSCript to return the value of the property with -1 as
// the key.

// In order to get the expected result, the solution uses the Array.prototype.slice() method which,
// which now behavies similarly to passing in a negative index. The main difference is that you have
// to provide an endingIndex; otherwise the slice method assuems that we want to get all the elements
// from the startingIndex provided up to the end. As an example, given [1, 2, 3, 4, 5].slice(-2), the
// last 2 elements ([4, 5]) are returned. In the case of the problem, the solution passed in the -1 as
// as an ending index so that it stops at the -2 or second to the last element. This is because the
// slice method gets elements up to but not including the endingIndex. Following this solution returns 
// the only element of the array so that the return value of penultimate is a string.