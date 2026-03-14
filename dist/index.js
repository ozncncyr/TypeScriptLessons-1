"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
person_1.default.firstName = "Ozan Can";
const student1 = {
    name: "John",
    surname: "Doe",
    grade: 5
};
console.log(person_1.default.firstName);
console.log(student1);
//# sourceMappingURL=index.js.map