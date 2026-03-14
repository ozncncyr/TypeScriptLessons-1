const myArray: [string, string, number] = ["Ozan", "Cuyar", 29];

function f():[string, number] {
    return [`${myArray[0]} ${myArray[1]}`, myArray[2]];
}

const myInfo = f();

console.log(myInfo);