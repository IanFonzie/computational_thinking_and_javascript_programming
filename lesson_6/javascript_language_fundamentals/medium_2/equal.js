var person = {name: 'Victor'};
var otherPerson = {name: 'Victor'};

console.log(person === otherPerson);  // false; but we want this to be true

// This code is not logging the result we would like because when JavaScript comapres objects, it is
// comparing if they are the same physical object and not whether they contain the same properties or
// values. In order to return the result we would like from the comparison on line 4 we would need to 
// adjust line 2 and set otherPerson = person, so that they are pointing to the same object in memory.

// like so:

var person = {name: 'Victor'};
var otherPerson = person;

console.log(person === otherPerson);

// Explanation:

// We'll have to make sure the two variables reference the same object, not two different objects with
// the same keys and values.

// In JavaScript, every object literal creates a new object, and when it's assigned to a variable, the
// variable holds the reference to that object. In our example above, the only way to make the two 
// variables compare equally is to have them reference the same object.