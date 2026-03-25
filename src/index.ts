interface Person {
  name: string;
    age: number;
    [key: string]: any; // Allow additional properties
}

const person: Person = {
  name: 'John Doe',
  age: 30
};