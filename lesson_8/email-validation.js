function isValidEmail(email) {
	// regex matches a string that starts with one or more alphanumeric characters,
	// followed by an @ sign, that ends with one or more patterns of one or more
	// alphabetic characters a required period and one or more alphabetic characters
	// and an optional period.
	return !!email.match(/^[a-z0-9]+@([a-z]+\.[a-z]+\.?)+$/i); 	
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');         // returns false

// literally just check if a regex matches then use !!

// Their abstractions: You have to check whether the email matches a regex. You can use
// String.prototype.match() to perform the match. 

// Think about each of the components of the email address as separate patterns. Combine the
// patterns into one pattern.

// 1. The local part contains the letters and numbers
// 2. The @ sign is just an @ sign
// 3. The domain part contains two or more components separated by dots ( . ); each component has one
// or more letters.

// solution: 

function isValidEmail(email) {
	return Boolean(email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i));
}

// Our solutions were very similar, first part was identical and where we differed
// was in how we interpreted the domains. I though it was necessary to have groups of 
// two for the domain part because they usually come in pairs. Their solution was slightly
// more robust because it matches as many groups as necessary or one or more letters and 
// period, isolating each section of the domain. It then ends with one or more alphabetic
// characters at the end of the string.

// 1. The entire regex must match at the beginning: ^
// 2. The local part has letters or numbers only: [a-z0-9]+
// 3. The @sign comes next: @
// 4. The email server name contains one or more components; each component contains
// letters followed by a single dot: ([a-z]+\.)+. Notice the use of grouping parentheses
// to treat both [a-z] and \. as a single pattern, and that we apply + to that pattern
// as a whole.
// 5. The top-level domain: [a-z]+
// 6. The entire regex must match up to the end: $
// 7. And finally, we apply the i modifier too so that the regex is case insensitive.