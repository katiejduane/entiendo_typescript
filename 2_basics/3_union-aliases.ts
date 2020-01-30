// Union Types
function combine(input1: number | string, input2: number | string) {
    // the use of the pipe | here allows you to expect more than one type (union types)

    // const result = input1 + input2; // this "errors" because union types don't necessarily read the types,
    // and it could be a boolean or null which can't be added nor concatenated, so you need a run-time check
    // sometimes when using union types. see below --->

    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);


// Literal Types
// where you are very clear about the EXACT value (not just string or boolean or |) a variable should hold
function combineAgain(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    // above we're using a union type within the literal type (resultConversion) to say it can be only one of two strings, not any string

    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAgesAgain = combineAgain(30, 26, 'as-number');
console.log(combinedAgesAgain);

const combinedAgesAgainString = combineAgain('30', '26', 'as-number');
console.log(combinedAgesAgainString);

const combinedNamesAgain = combineAgain('Max', 'Anna', 'as-text');
console.log(combinedNamesAgain);

// Type Aliases/Custom Types
// Creating a variable in which to store union types or literal types, which can be cumbersome to always have to retype!

type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combineThirdTime(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

// we can use aliases with any type/literal
// example --->
type User1 = { name: string; age: number };
const u1: User1 = { name: 'Max', age: 30 };

// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:

function greet1(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
}

// To:

type User = { name: string; age: number };

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}