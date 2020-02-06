// Classes

abstract class Department {
    static fiscalYear = 2020;
    // name: string;
    // private employees: string[] = [];
    protected employees: string[] = [];
    //private means you can't access it from outside the class, so no account.employees[0] = "Sally"
    //public can also be explicit, but it's the default, so you don't need it

    constructor(public readonly name: string, public id: string) {
        // readonly means you CANNOT write to a property at all
        // this.name = n;
    }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Department): void;
    // if you have an abstract method like this (forcing all descendent classes to specify what it does)
    // you must also delcare the class as 'abstract' and remove the {} as well as declare the return type, void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

// const accounting = new Department('Accounting', 'B13')
// CANNOT CREATE AN INSTANCE OF AN ABSTRACT CLASS!! you must create a child class OF this class and inherit it!

// accounting.addEmployee('Max')
// accounting.addEmployee('June')
// accounting.printEmployeeInfo()


// inheritance!!!!
class ITDeparment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        // a getter method has to return something
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        this.addReport(value)
    }

    admins: string[]
    reports: string[]
    // if you want the exact same constructor as the parent class, you don't need to delcare one
    // and you can instantiate this class exactly as you would the parent. but you can add a nerw constructor...
    constructor(id: string, admins: string[], reports: string[]) {
        // if you make the constructor private, it makes a sort of 'singleton' class
        super(id, 'Information Tech')
        this.lastReport = reports[0];
        // if you make a new constructor in a child class, you MUST call super. it calls the 
        // constructor of the parent class, taking the same args as well. in this case, pass in
        // 'id', but hardcode the 'name' as for this child class it won't ever change
        // YOU MUST CALL SUPER() FIRST BEFORE YOU CAN ADD YOUR OWN SPECIAL PROPERTIES OR USE THE THIS KEYWORD
        // if you don't want any new args to be forwarded to the parent class, you must declare them
        this.admins = admins;
        this.reports = reports;
    }

    describe() {
        console.log('Department: ', this.id)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }

    printReports() {
        console.log(this.reports)
    }
}

const itDept = new ITDeparment('D4', ['Teresa'], [])
itDept.addReport('I am the first report')
itDept.mostRecentReport = 'I am another report'
console.log(itDept.printReports()) //note that you don't call a getter with (), it's like a property



// more class notes:
// - you can override parent class methods
// - private properties are only available in their class, not child classes. so instead of
// 'private' you can use 'protected', and then that property becomes available
// - getters and setters are available
// - static properties and methods are accessible on the class, but not instances of the class. 
//      - they are not available in the constructor function using 'this'; as
//        they're detached from instances, you must use the class name: Department.fiscalYear
// - abtract classes: cannot be instantiated, only inherited from