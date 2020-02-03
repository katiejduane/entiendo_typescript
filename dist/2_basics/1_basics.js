"use strict";
function add1(n1, n2, showRes, resPhrase) {
    if (showRes) {
        console.log(resPhrase, n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var num1;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add1(number1, number2, printResult, resultPhrase);
