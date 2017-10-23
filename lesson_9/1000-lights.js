function lightsOn(switches) {
  // ..
}

lightsOn(5);   // [1, 4];

// detailed result of each round for 5 lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off; 1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*

Input: Number of Switches
Output: Array of lights that are on after n repetitions

Definitions:
- All lights are off; `n` number of lights
- Lights are either on or off, each time you toggle a light it will switch between true/false
- After completing n passes, determine which lights are still turned on.
- Rules (How do I determine how many lights are turned on?):
	(Will work through an example below)
	(Described my rules in plain english below)
	- Determine the total number of lights
	- Once you know the total number of lights, make that many passes over the lights, incrementing your starting
	position by one each time. 
		- the number of lights you toggle is depedent on your current position in the number of lights; 
		if you're in position n you will toggle every nth light untilyou reach the end of the lights
- At the end of everything, tell me how many lights are still turned on.

Test Cases:

console.log(lightsOn(-1)) // []
console.log(lightsOn(0)) // []
console.log(lightsOn(1)) // [1]
console.log(lightsOn(5)) // [1, 4]
console.log(lightsOn(100)) // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

Data Structure:
	- Prepare our data as an object whose keys are number strings and whose values are initialized to false
	- Steps needed to produce outputs (array of lights that are turned on)
		- declare an object with n (Number of Switches) elements, whose keys are the 
		strings from 1 to n and initialized to false.
		- for each property in this object, iterate the number string keys in increments of current index.
		- toggle the boolean when you reach one of the increments
		
	
Algorithm

assuming we have 5 switches:

[1(off), 2(off), 3(off), 4(off), 5(off)]

On our first loop, we toggle every switch:

[1(on), 2(on), 3(on), 4(on), 5(on)]

On our second loop, we toggle every other loop starting from the second light:

[1(on), 2(off), 3(on), 4(off), 5(on)]

On our third lopp, we toggle every third switch starting from the third light:
[1(on), 2(off), 3(off), 4(off), 5(on)]

on our fourth loop, we toggle every fourth switch starting from the fourth light:
[1(on), 2(off), 3(off), 4(on), 5(on)]

on our fifth loop, we toggle every fifth switch starting from the fifth light:
[1(on), 2(off), 3(off), 4(on), 5(off)]

plain english:

Alright joe, I want you to count all these lights and see how many of them there are.
For each light in the row, keep track of how many times you've walked across them.
Starting at your current pass number (1 to start), go ahead and toggle every current pass number switch 
(every switch on your first pass)

iteration
filtering / searching
transformation
reducing
interrogation
sort