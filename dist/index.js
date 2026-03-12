"use strict";
let a = "Hello, TypeScript!";
let b = 42;
let c = true;
let d = Symbol("unique");
let e = null;
let f = undefined;
let g = "This can be any type";
let h = "This is an unknown type";
let i = 10; // Union type with specific values
// i = 25; => Error: Type '25' is not assignable to type '5 | 10 | 15'
const person = {
    id: 1,
    name: "Alice",
    age: 30,
    membership: "basic",
};
// person.membership = "free"; =>  Error: Type '"free"' is not assignable to type '"basic" | "premium" | "vip"'
const dizi = []; // any
const dizi2 = []; // string[]
const dizi3 = []; // string[]
const dizi4 = []; // string[] veya number[] olabilir
dizi4.push("Hello");
dizi4.push(42);
// dizi4.push(true); => Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
const myInfo = ["Ozan", "Cuyar", 29];
const [firstName, lastName, age] = myInfo; // Destructuring assignment
console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
//# sourceMappingURL=index.js.map