// Function return types & 'void'

// the type after the colon after the function args is the type expected in the return value
function add2(n1: number, n2: number): number {
    return n1 + n2;
}

function printRes(num: number): void {
    console.log('Result is ' + num);
}
// the return type of the above function is 'void' BECAUSE it doesn't return anything, it only prints/logs
// you don't need to declare a void type, TS will infer it, but this is for demo purposes

printRes(add2(5, 10));


// Functions AS types

// let combineVals: Function;
// this tells TS that whatever value we give this variable, it has to be a function! but it's a little vague...
// so you can also try --->

let combineVals: (a: number, b: number) => number
// this tells TS combineVals is going to be a function that accepts TWO args (both nums) and returns a num
// so it limits what you can assign to this variable, it can be any function that fits the desciption! not just any function!

combineVals = add2;
// combineVals = printRes; //TS will complain about this because this function doesn't accept two args nor return a number


// Function types and callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const res = n1 + n2;
    cb(res);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})