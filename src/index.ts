// const myArray: [string, string, number] = ["Ozan", "Cuyar", 29];

// function f():[string, number] {
//     return [`${myArray[0]} ${myArray[1]}`, myArray[2]];
// }

// const myInfo = f();

// const LogPerson = async (name: string, surname: string, age: number) => {
//     console.log(`I am ${name} ${surname}. I am ${age} years old.`)
// }

// LogPerson("Ozan", "Cuyar", 29);

// const LogPerson = (params: { name: string; surname: string; age: number }): Promise<string> => {
//     const { name, surname, age } = params;
//     const msg = `I am ${name} ${surname}. I am ${age} years old.`;
//     return Promise.resolve(msg);
// }

// LogPerson({ name: "Ozan", surname: "Cuyar", age: 29 }).then((msg) => {
//     console.log(msg);
// })


// HOMEWORK: A FUNCTION THAT TYPING THE NAME AS MANY TIMES AS THE NUMBER IN THE SECOND PARAMETER

const repeatName = (name: string, times: number) => {
    for (let i = 0; i < times; i++) {
        console.log((i + 1) + ". " + name);
    }
}

repeatName("Ozan", 5);