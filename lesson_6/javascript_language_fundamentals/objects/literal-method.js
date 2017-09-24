var person = {
  firstName: function() {
    return 'Victor';
  },
  lastName: function() {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName);

// function () {
//     return 'Victor';
//   } function () {
//     return 'Reyes';
//   }

// The code doesn't execute, only the function declaration is displayed in place of the name
// because they did not call the function using parentheses (();)

// You need to call object literal methods for it to return the expected behavior. Methods are
// called in the same way that functions are. It has to be appended with parentheses (i.e.
// person.firstName()) 

