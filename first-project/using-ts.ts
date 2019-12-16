const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
// adding a ! after ("num1")! lets typescript know this ID will always 
// yield an element, never null; 'as HTMLInputELement' is 'type casting'
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
  //the + before the variable converts it to a number
});
