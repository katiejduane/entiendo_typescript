"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
// adding a ! after ("num1")! lets typescript know this ID will always 
// yield an element, never null; 'as HTMLInputELement' is 'type casting'
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
//   //the + before the variable converts it to a number
// });
