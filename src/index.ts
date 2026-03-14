import { Request, Response } from "express";

interface Person {
    name: string;
    surname: string;
    [key: string]: any;
}

const person: Person = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    occupation: 'Developer'
};