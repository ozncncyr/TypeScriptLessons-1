export interface IStudent {
    name: string;
    surname: string;
    age: number;
    getStudentInfo: () => {
        name: IStudent['name'];
        surname: IStudent['surname'];
        age: IStudent['age'];
    };
}
export declare class Student implements IStudent {
    name: string;
    surname: string;
    age: number;
    constructor(name: string, surname: string, age: number);
    getStudentInfo(): {
        name: string;
        surname: string;
        age: number;
    };
}
