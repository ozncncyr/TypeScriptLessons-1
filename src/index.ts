type Role = "Developer" | "Designer" | "Manager" | "Tester" | "Support" | "Intern" | "Client";

const obj: {
    name: string;
    surname: string;
    age: number;
    email: string;
    role: Role;
    hobbies?: string[];
} = {
    name: 'John',
    surname: 'Doe',
    age: 18,
    email: 'john.doe@example.com',
    role: 'Intern'
}


/////


type Colors = "Red" | "Green" | "Blue" | "Yellow" | "Purple" | "Orange";
type CustomColors= "Cyan" | "Magenta" | "Lime" | "Pink" | "Teal" | "Brown";
const myColor: Colors = "Red";
const myColors: Colors[] = ["Red", "Green", "Blue"];
const allColors: (Colors | CustomColors)[] = [ "Red", "Green", "Blue", "Cyan", "Magenta", "Lime", "Pink", "Teal", "Brown"];


//////


type Person = {
    name: string;
    surname: string;
    age: number;
}

type Dog = {
    dogName: string;
    breed: string;
    age: number;
}

type DogPerson = Person & Dog;

const dogPerson: DogPerson = {
    name: "Will",
    surname: "Smith",
    age: 5,
    dogName: "Buddy",
    breed: "Golden Retriever"
};


////

const myMap: Map<string, number> = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);
// myMap.set(4, "four"); => // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// myMap.set("five", "five"); => // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


console.log(myMap);