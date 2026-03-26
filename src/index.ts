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

