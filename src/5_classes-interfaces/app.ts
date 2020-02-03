// Classes & interfaces

class Department {
    // name: string;
    private employees: string[] = [];
    //private means you can't access it from outside the class, so no account.employees[0] = "Sally"
    //public can also be explicit, but it's the default, so you don't need it

    constructor(public readonly name: string, public id: string) {
        // readonly means you CANNOT write to a property at all
        // this.name = n;
    }

    describe() {
        console.log('Department: ', this.name, this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting', 'B13')

accounting.addEmployee('Max')
accounting.addEmployee('June')

accounting.printEmployeeInfo()


// inheritance!!!!
class ITDeparment extends Department {
    admins: string[]
    // if you want the exact same constructor as the parent class, you don't need to delcare one
    // and you can instantiate this class exactly as you would the parent. but you can add a nerw constructor...
    constructor(id: string, admins: string[]) {
        super(id, 'Information Tech')
        // if you make a new constructor in a child class, you MUST call super. it calls the 
        // constructor of the parent class, taking the same args as well. in this case, pass in
        // 'id', but hardcode the 'name' as for this child class it won't ever change
        // YOU MUST CALL SUPER() FIRST BEFORE YOU CAN ADD YOUR OWN SPECIAL PROPERTIES OR USE THE THIS KEYWORD
        // if you don't want any new args to be forwarded to the parent class, you must declare them
        this.admins = admins
    }
}

const itDept = new ITDeparment('D4', ['Teresa'])
