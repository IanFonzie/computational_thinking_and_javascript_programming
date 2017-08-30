var apples = 3;
var bananas = 5;

if (apples == bananas) {
	console.log("Equal!");
}

bananas = "3";

if (apples === bananas) {
	console.log("Strict equal!");
} else {
		if (apples == bananas) {
			console.log("Same value, but different types");
		} else {
			console.log("Not strictly equal :(");
		}
}

// This doesn't output a message because it is using a strict comparison operator, which 
// doesn't perform coercion. Stirng is different from a number so therefore no strict
// equality

apples = 3;
bananas = 3;
var areEqual = apples === bananas;

console.log(areEqual);

apples = 3;
bananas = undefined;
var eitherOr = apples || bananas;

console.log(eitherOr);

bananas = 1;
eitherOr = apples || bananas;

console.log(eitherOr);

eitherOr = bananas || apples;

console.log(eitherOr);

var lastName = 'Fonberg';
var familyMessage = lastName === 'Fonberg' ? "You're part of the family!" : "You're not family.";

console.log(familyMessage);