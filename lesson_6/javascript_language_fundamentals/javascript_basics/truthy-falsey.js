var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

// Logs 'Hello' becaues myBoolean is true
if (myBoolean) {
  console.log('Hello');
}

// Doesn't log because myString has a value, meaning it's truthy.
// !myString will then evaluate to false
if (!myString) {
  console.log('World');
}

// All objects are truthy, including empty arrays. The double bang
// operator (!!) coerces it into a true boolean. It will log 'World'
if (!!myArray) {
  console.log('World');
}

// myOtherString is empty and therefore falsey, but myArray is an object
// is truthy. Because this uses the logical or (||) operator, it will
// evaluate to true and log '!'
if (myOtherString || myArray) {
  console.log('!');
}

// recall that it is only the following values that are falsey:

// * false
// * null
// * undefined
// * 0
// * NaN
// * ''

// if it isn't any of those then it is considered truthy