"use strict";
function add2(n1, n2) {
    return n1 + n2;
}
function printRes(num) {
    console.log('Result is ' + num);
}
printRes(add2(5, 10));
var combineVals;
combineVals = add2;
function addAndHandle(n1, n2, cb) {
    var res = n1 + n2;
    cb(res);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
