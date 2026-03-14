// const myArray: [string, string, number] = ["Ozan", "Cuyar", 29];

// function f():[string, number] {
//     return [`${myArray[0]} ${myArray[1]}`, myArray[2]];
// }

// const myInfo = f();

function LogPerson(name: string, surname: string, age: number) {
    console.log(`I am ${name} ${surname}. I am ${age} years old.`)
}

LogPerson(...["Ozan", "Cuyar", 29]);