var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// When objects are passed to a function, they are passing a reference to that object. This code will
// mutate the argument because it is manipulating the original object. Therefore this code will log
// (3) [1, 2, 10].

// Explanation:

// Recall that JS is pass-by-value. There tricky part is understanding the value that is passed. For JS,
// when passing "objects" (i.e. arrays) the value is the reference to it. As such, when the program executes
// the statement b[2] += 7 on line 4 it actually executes on the object pointed at by a in the outer scope 
// since it got a reference to it on line 7 consequently, when it logs the value of a on line 8 it logs [1, 2, 10].