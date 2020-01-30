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
// we can absolutely declare a type here, but type inference often makes it
// unnecessary; it's considered redundant and not best practice
var num1;
// above case IS best practice, because the variable isn't yet assigned, so 
// this lets TypeScript know what type it should expect when it is assigned
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add1(number1, number2, printResult, resultPhrase);
