// interface Person {
//   name: string;
//     age: number;
//     [key: string]: any; // Allow additional properties
// }

// const person: Person = {
//   name: 'John Doe',
//   age: 30
// };

// const name: Person['name'] = person.name; // Type is string
// const age: Person['age'] = person.age; // Type is number

// console.log(name, age);

////////////////////////////////////////

// import { Handler, Request, Response } from "express";

// type FunctionThatReturnsBoolean = (id: string, password: string) => boolean;

// const myFunction: FunctionThatReturnsBoolean = (id, password) => {
//   // Implement your logic here
//   return id === "admin" && password === "password123";
// }

// const handler: Handler = (req: Request, res: Response) => {
//   res.send("Hello, World!");
// }

////////////////////////////////////////

// interface myArray {
//     [index: number]: string | number;
// }

// type c = (id: string, myName: string) => void;

// const myFunction: c = (id, myName) => {
//     console.log(`ID: ${id}, Name: ${myName}`);
// }

// const array: myArray = ["Hello", 42, "World", 3.14];

//////////////////

interface IFunction {
    (name: string, repeat: number): void;
}

const myFunction: IFunction = (name, repeat) => {
    console.log("\n" + name.repeat(repeat));
}

myFunction("Hello", 3); // Output: HelloHelloHello