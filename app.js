// object types
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
// you can do the above work to specifify types within an object, as declaring
// just an object type really gives us nothing, but it's better, usually, to 
// let typescript infer an object type... EXCEPT in cases where typsecript doesn't
// infer correctly, like for the tuple example in 'role'; which, unless explicity 
// stipulated, typsecript will only interpret it as an array
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var permissions;
(function (permissions) {
    permissions[permissions["ADMIN"] = 0] = "ADMIN";
    permissions[permissions["READ_ONLY"] = 1] = "READ_ONLY";
    permissions[permissions["AUTHOR"] = 2] = "AUTHOR";
})(permissions || (permissions = {}));
;
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'cooking'],
    role: [2, 'writer'],
    permissions: permissions.AUTHOR
};
console.log(person);
// array types
var favoriteActivities; // this tells typescript to expect an array of strings
favoriteActivities = ['sports', 'cooking'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //the cool thing here about typescript inference is that we get access to all string methods
    //here, because TS detect that it is an array of strings! if i added a number to the arr, tho, i'd lose it
}
// can be loose or strict
var looseArray;
var strictArray; //or number[], etc...
// tuples (a fixed length/type array)
// - see above
// Enums (does not exist in vanilla JS)
// ex: enum {NEW, OLD} //and then typsecript adds autmatically enumerated global constant identifiers
