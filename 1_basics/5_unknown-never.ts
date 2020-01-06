// "unknown" type

let userInput: unknown;
let userName: string;
// you can store any type in there and not get errors, similar to 'any' in this way
// but 'any' can be reassigned to a string, where as 'unknown' cannot. see below:

userInput = 5;
userInput = 'Max'

if (typeof userInput === 'string') {
    userName = userInput
    // you have to use a bit of type checking logic to let typescript know this reassignment is possible
}


// "never" type

//because an error is thrown in this function, it NEVER returns anything. 
//you coulc use 'void', but 'never' is clearer!
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred', 500)