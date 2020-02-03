"use strict";
function combine(input1, input2) {
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
function combineAgain(input1, input2, resultConversion) {
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
