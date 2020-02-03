"use strict";
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
var favoriteActivities;
favoriteActivities = ['sports', 'cooking'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var looseArray;
var strictArray;
