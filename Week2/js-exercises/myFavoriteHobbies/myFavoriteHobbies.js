

const myHobbies = [
    "Meditation",
    "Reading",
    "Programming",
    "Hanging out with friends",
    "Going to the gym"
];


//made WITHOUT using array.map()

/*function convertItemToLi(array) {
  let unorderedList = document.createElement("ul");
  for (let item of array) {
    let listItem = document.createElement("li");
    let listArr = [];
    listItem.innerHTML = item;
    unorderedList.appendChild(listItem);
  }
  console.log(unorderedList);
  document.body.appendChild(unorderedList);
}*/

//console.log(convertItemToLi(myHobbies));


//made WITH array.map()

function convertItemsToLi(array) {
    let unorderedList = document.createElement("UL");

    array.map(item => {
        let listItem = document.createElement("LI");
        listItem.innerHTML = item;
        unorderedList.appendChild(listItem);
    });
    document.body.appendChild(unorderedList);
}

convertItemsToLi(myHobbies);
