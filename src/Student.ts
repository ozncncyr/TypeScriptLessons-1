export interface IStudent{
    name: string;
    surname: string;
    age: number;
    getStudentInfo: () => {
        name: IStudent['name'];
        surname: IStudent['surname'];
        age: IStudent['age'];
    }
}

export class Student implements IStudent { 
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