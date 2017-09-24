var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd'
};

// Seems fine
myObject[1];
// Assumes that a is a variable here, and will throw an error.
myObject[a];
// seems fine
myObject.a;

// Answer:

// myObject[a] triggers a ReferenceError

// Explanation:

// In order to access the value of a key using square bracket notation ( obj[someKey] ), the key has
// to be a string value. When the value si numeric it gets converted to a string using the toString()
// method. If it's a variable, it looks up the value (converting it to a string if necessary) and uses
// the value to get the corresponding property value for it. The statement myObject[a] triggered a
// ReferenceError because it tried to get the value of a variable that isn't declared.
