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

const obj: IStudent = {
    name: "Ozan",
    surname: "Cuyar",
    level: 3,
    getStudentInfo() {
        return {
            name: this.name,
            surname: this.surname,
            level: this.level
        }
    }
}

