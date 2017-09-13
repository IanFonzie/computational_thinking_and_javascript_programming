// if (condition1) {
//   // some code
//   if (condition2) {
//     // some code
//   } else {
//     // some code
//   }
// } else {
//   // some code
//   if (condition4) {
//     // some code
//     if (condition5) {
//     // some code
//     }
//   }
// }

// The code above has 1 path for the first if and its nested if, a 2nd for the first if and its
// nested else, a third for the case when its only the highest level else, a fourth for when it's
// highest level else and nested if is true, but the nested if's if is not true and a fifth path
// for when the else is true and its first if and its respective if are both true.

// To rewrite more clearly:

// 1. condition1 -> condition2
// 2. condition1 -> !condition2
// 3. !condition1 -> condition4 -> condition5
// 4. !condition1 -> condition4
// 5. !condition1
