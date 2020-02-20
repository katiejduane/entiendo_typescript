"use strict";
var e1 = {
    name: "Katie",
    privs: ["create-server"],
    startDate: new Date()
};
function addAgainn(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log("Name: ", emp.name);
    if ("privs" in emp) {
        console.log("Privileges: ", emp.privs);
    }
    if ("startDate" in emp) {
        console.log("Start date: ", emp.startDate);
    }
}
printEmployeeInfo(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving...");
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("loading cargo ", amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(999);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.kind) {
        case "horse":
            speed = animal.runningSpeed;
            break;
        case "bird":
            speed = animal.flyingSpeed;
    }
    console.log("Moving at speed: ", speed);
}
moveAnimal({ kind: "horse", runningSpeed: 13 });
var inputElement = document.getElementById("user-input");
var paragraph = document.getElementById("msg");
inputElement.value = "hi there";
