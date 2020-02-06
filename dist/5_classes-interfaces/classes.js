"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var ITDeparment = (function (_super) {
    __extends(ITDeparment, _super);
    function ITDeparment(id, admins, reports) {
        var _this = _super.call(this, id, 'Information Tech') || this;
        _this.lastReport = reports[0];
        _this.admins = admins;
        _this.reports = reports;
        return _this;
    }
    Object.defineProperty(ITDeparment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        set: function (value) {
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    ITDeparment.prototype.describe = function () {
        console.log('Department: ', this.id);
    };
    ITDeparment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    ITDeparment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return ITDeparment;
}(Department));
var itDept = new ITDeparment('D4', ['Teresa'], []);
itDept.addReport('I am the first report');
itDept.mostRecentReport = 'I am another report';
console.log(itDept.printReports());
