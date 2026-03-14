import {Person, Student, Job} from './all';

Person.firstName = "Ozan Can";

const student1: Student = {
    name: "John",
    surname: "Doe",
    grade: 5
}

console.log(Person.firstName);
console.log(student1);
console.log(Job);