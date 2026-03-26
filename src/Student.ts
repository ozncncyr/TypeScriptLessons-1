export interface IStudent{
    name: string;
    surname: string;
    level: number;
    getStudentInfo: () => {
        name: IStudent['name'];
        surname: IStudent['surname'];
        level: IStudent['level'];
    }
}

export class Student implements IStudent { 
    constructor(
        public name: string,
        public surname: string,
        public level: number
    ) {}

    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            level: this.level
        };
    }
}