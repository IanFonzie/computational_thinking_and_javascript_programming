function isBalanced(string) {
	var tally = 0;
	
	for (var i = 0; i < string.length; i += 1) {
		var char = string[i];
		if (char === '(') {
			tally += 1;
		} else if (char === ')') {
			tally -= 1;
		}

		if (tally < 0) {
			return false;
		}
	}

	return tally === 0;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

// check, using iteration that if the firstIndex of ) is less than (, then return false.
// have a variable called matches needed, each time you encounter a (, increment it by one.
// each time you encounter a ) decrement it by one. if it's equal to 0 at the end of the function
// then return true.

// Their abstractions:
// Each left matching parenthesis must have a matching right parenthesis. We can keep track of a running
// tally of parentheses encountered. Each left parenthesis increments the tally by one, while each right
// parenthesis decrements the tally. if the tally never goes negative and the final tally is 0, then we 
// have properly balanced parentheses.

// tally can never go negative: if it does we have parentheses that are out of balance, and should immediately
// quit iterating and return false. Since this might require an early return, we should use a low level for loop.