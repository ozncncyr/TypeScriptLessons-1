let a: string = "Hello, TypeScript!";
let b: number = 42;
let c: boolean = true;
let d: symbol = Symbol("unique");
let e: null = null;
let f: undefined = undefined;
let g: any = "This can be any type";
let h: unknown = "This is an unknown type";
let i: 5 | 10 | 15 = 10; // Union type with specific values

// i = 25; => Error: Type '25' is not assignable to type '5 | 10 | 15'

const person: { id: number; name: string; age: number; membership: "basic" | "premium" | "vip" } = {
    id: 1,
    name: "Alice",
    age: 30,
    membership: "basic",
};

// person.membership = "free"; =>  Error: Type '"free"' is not assignable to type '"basic" | "premium" | "vip"'

const dizi = []; // any
const dizi2: string[] = []; // string[]
const dizi3 = [] as string[]; // string[]
const dizi4: Array<string | number> = []; // string[] veya number[] olabilir
dizi4.push("Hello");
dizi4.push(42);
// dizi4.push(true); => Error: Argument of type 'true' is not assignable to parameter of type 'string | number'

const myInfo: [string, string, number] = ["Ozan", "Cuyar", 29];
const [firstName, lastName, age] = myInfo; // Destructuring assignment
console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);