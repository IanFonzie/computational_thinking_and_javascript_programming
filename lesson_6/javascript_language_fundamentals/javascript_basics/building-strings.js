// var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// The output is not what I expected because a whitespace character was at the of the line 5
// which cause the assignment of the paragraph variable to throw a SyntaxError. This can be
// fixed by removing the extra space characters at the end of this line. The purpose of the
// backward slash is to escape the newline character at the end of the line. However, with the
// etra whitespace this does not happen.

// There was an additional bug that occured, but it didn't throw an error so I did not list it.
// The error was that the paragraph contained extra whitespace between some of the sentences
// because it considers the whole string to be continuous. It counts the spaces at the beginning
// of each new line (line 2 to line 6) as part of the string.

// This can be fixed by removing the whitespaces at the end of line 5 and the spaces at the beginning
// of lines 2 - 6

var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);