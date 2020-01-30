"use strict";
// Union Types
function combine(input1, input2) {
    // the use of the pipe | here allows you to expect more than one type (union types)
    // const result = input1 + input2; // this "errors" because union types don't necessarily read the types,
    // and it could be a boolean or null which can't be added nor concatenated, so you need a run-time check
    // sometimes when using union types. see below --->
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
// Literal Types
// where you are very clear about the EXACT value (not just string or boolean or |) a variable should hold
function combineAgain(input1, input2, resultConversion) {
    // above we're using a union type within the literal type (resultConversion) to say it can be only one of two strings, not any string
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAgesAgain = combineAgain(30, 26, 'as-number');
console.log(combinedAgesAgain);
var combinedAgesAgainString = combineAgain('30', '26', 'as-number');
console.log(combinedAgesAgainString);
var combinedNamesAgain = combineAgain('Max', 'Anna', 'as-text');
console.log(combinedNamesAgain);
function combineThirdTime(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var u1 = { name: 'Max', age: 30 };
// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:
function greet1(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder1(user, checkAge) {
    return checkAge > user.age;
}
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
