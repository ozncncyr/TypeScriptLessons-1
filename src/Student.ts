export class Student { 
    constructor(
        public name: string,
        public surname: string,
        public age: number
    ) {}

    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            age: this.age
        };
    }
}