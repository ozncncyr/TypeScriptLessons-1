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