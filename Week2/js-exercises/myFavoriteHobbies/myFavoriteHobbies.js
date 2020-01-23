const myHobbies = [
    "Meditation",
    "Reading",
    "Programming",
    "Hanging out with friends",
    "Going to the gym"
];

function convertItemToLi(array) {
    let unorderedList = document.createElement("ul");
    for (let item of array) {
        let listItem = document.createElement("li");
        let listArr = [];
        listItem.innerHTML = item;
        unorderedList.appendChild(listItem);
    }
    console.log(unorderedList);
    document.body.appendChild(unorderedList);
}

console.log(convertItemToLi(myHobbies));
