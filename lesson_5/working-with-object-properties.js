// function objectHasProperty(object, string) {
// 	var keys = Object.keys(object);
// 	return keys.includes(string);
// }

// practically the same solution, just used a different String method

function objectHasProperty(object, string) {
	var keys = Object.keys(object);
	return keys.indexOf(string) !== -1;
}

// function incrementProperty(object, string) {
// 	object[string] = object[string] !== undefined ? object[string] + 1 : 1;
// 	return object[string];
// }

// rewrite: 

function incrementProperty(object, string) {
	object[string] = object[string] ? object[string] + 1 : 1;
	return object[string];
}

// explanation: if you try to access a proeprty that doesn't exist in an object, javascript
// returns undefined. since undefined is falsy and any non-zero number is truthy we can used
// this in the if statement's condition to learn whether the property exists.

// This works well provided falsy values (i.e. null or undefined) are not present in the object.
// Otherwise we need to check Object.keys() to see whether the proeprty exists.

// I forgot that undefined automatically evaluated to false in an expression and compared it to see
// that it wasn't equal to undefined. If it did exist it would evaluate to true making my solution
// verbose.

// function copyProperties(object1, object2) {
// 	var property;

// 	for (property in object1) {
// 		object2[property] = object1[property];
// 	}

// 	return Object.keys(object2).length;
// }

// similar solutions here, they opted to use a counter variable that they would increment each time
// a property was copied whereas I chose to simply count the length of the second object's keys
// afterwards.

function copyProperties(object1, object2) {
	var count = 0;

	for (var property in object1) {
		object2[property] = object1[property]
		count++;
	}

	return count;
}

// function wordCount(string) {
// 	var counts = {};
// 	var stringArr = string.split(' ');

// 	for (var i = 0; i < stringArr.length; i++) {
// 		counts[stringArr[i]] = counts[stringArr[i]] ? counts[stringArr[i]] + 1 : 1;  
// 	}

// 	return counts;
// }

// similar solution again, they checked to see if counts wasn't already in the object
// if it wasn't then they would add the word as a property and initialize its count to 0.
// Then they would increment the value of that particular property.

// rewrite:

function wordCount(string) {
	var counts = {};
	var stringArr = string.split(' ');
	var word;

	for (var i = 0; i < stringArr.length; i++) {
		word = stringArr[i];

		if (!counts[word]) {
			counts[word] = 0;
		}

		counts[word] += 1;
	}

	return counts;
}