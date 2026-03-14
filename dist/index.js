"use strict";
// type myObject = {
//     name: string;
//     age: number;
// };
const myObj = {
    name: "Ozan",
    age: 29,
    job: "Software Engineer"
};
// myObj. => name, age, job gibi özelliklere erişebiliriz,
// ancak TypeScript, job özelliğini tanımadığı için hata verecektir.
// Bu durumda, index signature sayesinde job özelliği de kabul edilir ve hata olmaz.
// Record, belirli bir anahtar türü ve değer türü tanımlamak için kullanılır
const myObj2 = {
    name: "Ozan",
    age: 29,
    job: "Software Engineer"
};
const personalInfo = {
    name: { firstName: "Ozan", lastName: "Yılmaz" },
    age: { value: 29, unit: "years" },
    job: { title: "Software Engineer", company: "Tech Company" },
    skills: { programmingLanguages: ["TypeScript", "JavaScript", "Python"] }
};
const personalList = [
    { name: "Ozan Yılmaz", role: "Software Engineer" },
    { name: "Ayşe Kaya", role: "Designer" },
    { name: "Mehmet Demir", role: "Manager" }
];
//# sourceMappingURL=index.js.map