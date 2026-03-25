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

// interface IFunction1 {
//     (name: string, repeat: number): void;
// }

// const myFunction: IFunction1 = (name, repeat) => {
//     console.log("\n" + name.repeat(repeat));
// }

// interface IFunction2 extends IFunction1 {
//     (age: number, repeat: number): void;
// }

// const myFunction2: IFunction2 = (age, repeat) => {
//     console.log("\n" + age.toString().repeat(repeat));
// }

// myFunction("Hello", 3); // Output: HelloHelloHello
// myFunction2(5, 3); // Output: 555

///////////////////

// interface MongoResponse {
//     _id: string;
//     createdAt: Date;
//     updatedAt: Date;
// }
 
// interface BooksResponse extends MongoResponse {
//     title: string;
//     author: string;
//     publishedYear: number;
// }

// function getBookResponse(): BooksResponse {
//     return {
//         _id: "1234567890",
//         createdAt: new Date(),
//         updatedAt: new Date(),
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         publishedYear: 1925
//     };
// }

//////////////////

interface IStudent{
    name: string;
    surname: string;
    level: number;
    getStudentInfo: () => {
        name: IStudent['name'];
        surname: IStudent['surname'];
        level: IStudent['level'];
    }
}

const obj: IStudent = {
    name: "Ozan",
    surname: "Cuyar",
    level: 3,
    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            level: this.level
        }
    }
}