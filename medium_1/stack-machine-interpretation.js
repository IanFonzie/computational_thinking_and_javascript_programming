/*

definitions:

- stack: an array that uses Array.prototype.push and Array.prototype.prototype
- register: the current value; not part of the stack
- An operation that requires two values operates on the topmost item from the stack and the register value

Example: MULT operation
	- multiplies the stack value with the register value
	- removes the value from the stack
	- stores the result in the register

	- [3, 6, 4] stack
	- 7 register
	- stack becomes [3, 6]; result is 28 and is left in the register
	- if we do another mult:
		- [3] stack
		- register 28 * 6 = 168

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

input: a string containing any of the above commands
output: a modification to the stack, or the register or output to the console

definition / rules:
make a function for each of these values
split the input into individual components using spaces
iterate over each token
	- check its input to see what you should do with it
	- if it's a number, set it to the register
	- else if it's 'PUSH'
		- stack.push(token)
	- else if it's 'ADD' 
		- register += stack.pop()
	- else if it's 'SUB'
		- register -= stack.pop()
	- else if it's 'MULT'
		- register *= stack.pop()
	- else if it's 'DIV'
		- register = Math.floor(register / stack.pop())
	- else if it's 'MOD'
		- register %= stack.pop()
	- else if it's 'PRINT'
		- console.log(register)

*/

function minilang(input) {
	var stack = [];
	var register = 0;
	var tokens = input.split(' ');
	
	for (var i = 0; i < tokens.length; i += 1) {
		if (isEmptyStackCondition(stack, tokens[i])) {
			return "ERROR: Stack Empty";
		}

		if (tokens[i] === 'PUSH') {
			stack.push(register);
		} else if (tokens[i] === 'ADD') {
			register += stack.pop();
		} else if (tokens[i] === 'SUB') {
			register -= stack.pop();
		} else if (tokens[i] === 'MULT') {
			register *= stack.pop();
		} else if (tokens[i] === 'DIV') {
			register = Math.floor(register / stack.pop());
		} else if (tokens[i] === 'MOD') {
			register = Math.floor(register % stack.pop());
		}	else if (tokens[i] === 'POP') {
			register = stack.pop();
		} else if (tokens[i] === 'PRINT') {
			console.log(register);
		} else {
			if (!/\d+/.test(tokens[i])) {
				return "ERROR: Invalid Token";
			}

			register = Number(tokens[i]);
		}
	}
}

function isEmptyStackCondition(stack, token) {
	var stackModifiers = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
	return stack.length <= 0 && stackModifiers.indexOf(token) !== -1;
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('SFDFS');