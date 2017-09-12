// function greetings(name, info) {
// 	var fullName = name.join(' ');

// 	console.log('Hello, ' + fullName + '! Nice to have a ' + info['title'] + ' ' + info['occupation'] + ' around.');
// }

// THey decided to break this up into chunks, presumably to improve readability. rewrite:

function greetings(name, info) {
	var nameComponent = 'Hello, ' + name.join(' ') + '!';
	var infoComponent = 'Nice to have a ' + info.title + ' ' + info.occupation + ' around.'

	console.log(nameComponent + ' ' + infoComponent);
}

// They also used dot notation which makes more sense because this is an object and not hash
// like it would be in Ruby. While mine is still valid I believe that using dot notation
// improves the clarity of the code.