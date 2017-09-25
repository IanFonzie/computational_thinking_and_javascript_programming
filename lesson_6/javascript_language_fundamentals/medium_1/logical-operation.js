// && if non boolean, it will return the first value if it converts to false
// || returns the first operand if it converts to true and the second operand otherwise

// false;
(false && undefined);
// Undefined
(false || undefined);
// 1st nest: (false || undefined)
// 2nd nest: undefined
((false && undefined) || (false || undefined));
// 1st nest: undefined || false
// 2nd nest: false
((false || undefined) || (false && undefined));
// 1st nest: false && undefined
// 2nd nest: false
((false && undefined) && (false || undefined));
// 1st nest: undefined && false
// 2nd nest: undefined
((false || undefined) && (false && undefined));
// 'a'
('a' || (false && undefined) || '');
// 1st nest: false || 'a' ||  '')
// 2nd nest: 'a'
((false && undefined) || 'a' || '');
// 1st nest: 'a' && undefined && ''
// 2nd nest: undefined (I guess it returns the first falsy value if there
// is more than one of them at least with &&s
('a' && (false || undefined) && '');
// 1st nest: undefined && 'a' && ''
// 2nd nest: undefined
((false || undefined) && 'a' && '');

// Explanation: Logical operators || and && don't always return boolean values. They return the value of one of the
// expressions that they are comparing. You can check the rules at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

// To reach the solutions, iteratively evaluate each expression until there is only one value.

// ((false && undefined) || 'a' || '');
// (false || 'a' || '');
// ('a' || '');
// ('a');
// ---

// ('a' && (false || undefined) && '');
// ('a' && undefined & '');
// (undefined && '');
// (undefined);
// ---

// ((false || undefined) || (false && undefined));
// (undefined || false);
// (false);