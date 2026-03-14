import Person, {Student} from './person';

Person.firstName = "Ozan Can";

const student1: Student = {
    name: "John",
    surname: "Doe",
    grade: 5
}

console.log(Person.firstName);
console.log(student1);