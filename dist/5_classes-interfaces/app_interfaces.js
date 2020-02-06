"use strict";
var Human = (function () {
    function Human(n, a) {
        this.name = n;
        this.age = a;
    }
    Human.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name);
    };
    return Human;
}());
var user1;
user1 = {
    name: 'Layla',
    age: 42,
    greet: function (phrase) {
        console.log(phrase + " " + this.name + ".");
    }
};
user1.greet('Hi, there! I am');
var KindPerson = (function () {
    function KindPerson(n) {
        this.age = 30;
        this.name = n;
    }
    KindPerson.prototype.greet = function (phrase) {
        console.log(phrase, this.name);
    };
    return KindPerson;
}());
var addFunction;
addFunction = function (n1, n2) {
    return n1 + n2;
};
