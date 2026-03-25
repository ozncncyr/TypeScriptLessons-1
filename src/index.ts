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

import { Handler, Request, Response } from "express";

type FunctionThatReturnsBoolean = (id: string, password: string) => boolean;

const myFunction: FunctionThatReturnsBoolean = (id, password) => {
  // Implement your logic here
  return id === "admin" && password === "password123";
}

const handler: Handler = (req: Request, res: Response) => {
  res.send("Hello, World!");
}