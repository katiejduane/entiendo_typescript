"use strict";
var Department = (function () {
    function Department(name) {
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log('Department: ', this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('June');
accounting.printEmployeeInfo();
