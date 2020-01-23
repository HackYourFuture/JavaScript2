const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

function combinedAgesArr(arrayOfObjects) {

    let total = 0;

    //for this stage i used a callback function with an arrow function form

    let agesArr = arrayOfObjects.map((object) => {
        return object["age"]
    })

    //here i used the classic function structure

    function sumAll(total, number) {
        return total + number
    }

    let combinedAgesArr = agesArr.reduce(sumAll)

    return `The total age of all the members is ${combinedAgesArr} years.`

}


console.log(combinedAgesArr(hackYourFutureMembers))