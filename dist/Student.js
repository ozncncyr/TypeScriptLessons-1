"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            age: this.age
        };
    }
}
exports.Student = Student;
//# sourceMappingURL=Student.js.map