// intersection types
// these allow us to combine other types. it is similar to interface inheritance
// the intersection operater & can be used with any types, simply building the intersection between them
type AdminWorker = {
  name: string;
  privs: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = AdminWorker & Employee;

const e1: ElevatedEmployee = {
  name: "Katie",
  privs: ["create-server"],
  startDate: new Date()
};

type CombinableToo = string | number;
type Numeric = number | boolean;

type Universal = CombinableToo & Numeric;

// type guards
function addAgainn(a: CombinableToo, b: CombinableToo) {
  // the below line is a 'type guard' to ensure it runs correctly at run time
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | AdminWorker;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  // below is a way to type guard with custom types that don't exist in JS
  if ("privs" in emp) {
    console.log("Privileges: ", emp.privs);
  }
  if ("startDate" in emp) {
    console.log("Start date: ", emp.startDate);
  }
}

printEmployeeInfo(e1);

// another way to typeguard with custom types is below, using instanceof instead of typeof
class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("loading cargo ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(999);
  }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions: a special type of or helper for type guards, avail with object types
interface Bird {
  kind: "bird";
  flyingSpeed: number;
}

interface Horse {
  kind: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.kind) {
    case "horse":
      speed = animal.runningSpeed;
      break; // without this break the second kind will error
    case "bird":
      speed = animal.flyingSpeed;
  }
  console.log("Moving at speed: ", speed);
}
moveAnimal({ kind: "horse", runningSpeed: 13 });

// type casting
// helps you tell typsecript some value is of some type if TS cannot detect it on its own
// helpful for elements in the dom!
const inputElement = <HTMLInputElement>document.getElementById("user-input")!; // one way to type cast, doesn't work with react/jsx
const paragraph = document.getElementById("msg")! as HTMLParagraphElement; // another way to type cast

inputElement.value = "hi there";
