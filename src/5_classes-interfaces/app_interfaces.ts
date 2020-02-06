// Interfaces
// it describes the structure of an object; how it should look like. it's not a blueprint like
// a class, rather kind of like a custom type. it doesn't include concrete values anfter an =
// ...so what can we do with an interface if it can't be instantiated? it can be used as a 
// type-checking tool for objects that should have the structure described in the interface. 
// you can use the interface AS a type! See 'Person' interface below.

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// type Person = {
//     name: string;
//     age: number;
//     greet(phrase: string): void;
// }

// you can also do the same with type X = {}, but interfaces have some additional uses...
// a custom type and an interface are not exactly the same. One major difference is that
// interfaces can ONLY be used to describe the structure of an object. also, interfaces
// are very clear, and are almost always used to describe objects instead of custom types.
// interfaces are also sometimes used as a kind of contract for how a class should be built.
// a class can 'implement' multiple interfaces. the class can have additional properties
// and methods, so long as it has everything the interface(s) requires.

class Human implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n
        this.age = a
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
}

let user1: Person;

user1 = {
    name: 'Layla',
    age: 42,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}.`)
    }
}

user1.greet('Hi, there! I am')

// additionally, interfaces can have readonly properties (must only be set once, cannot be edited
// after it has been initialized)

// interfaces can also indicate inheritance and how it should work using 'extends'

interface Named {
    readonly name: string;
    outPutName?: string;
    //the question mark denotes an optional property
}

interface Greeting extends Named {
    greet(phrase: string): void;
}

class KindPerson implements Greeting, Named {
    name: string
    age = 30
    constructor(n: string) {
        this.name = n
    }
    greet(phrase: string) {
        console.log(phrase, this.name)
    }
}

// because under the hood, a function is an object, you can also use interfaces to define
// how a function should act. see below:

interface AddFn {
    (a: number, b: number): number;
}

let addFunction: AddFn;

addFunction = (n1: number, n2: number) => {
    return n1 + n2
}

