const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

let total = 0;



let agesArr = hackYourFutureMembers.map((object) => {
    return object["age"]
})

console.log(agesArr)