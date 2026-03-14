type myObject = {
    name: string;
    age: number;
    [key: string]: any;
};
declare const myObj: myObject;
declare const myObj2: Record<string, any>;
declare const personalInfo: Record<string, object>;
declare const personalList: Array<Record<"name" | "role", string>>;
