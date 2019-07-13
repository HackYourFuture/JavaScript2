'use strict';

let bookTitles = {
  book1: {
    "title": "the vegetarian",
    "language": "english",
    "author": "some writer"
  },
  book2: {
    "title": "watership down",
    "language": "german",
    "author": "some writer"
  },
  book3: {
    "title": "adventures sherlock holmes",
    "language": "arabic",
    "author": "some writer2"
  },
  book4: {
    "title": "alchemist",
    "language": "italian",
    "author": "some writer"
  },
  book5: {
    "title": "frankenstein",
    "language": "italian",
    "author": "some writer3"
  },
  book6: {
    "title": "city of thieves",
    "language": "english",
    "author": "some writer"
  },
  book7: {
    "title": "gone with the wind",
    "language": "english",
    "author": "some writer4"
  },
  book8: {
    "title": "to kill mocking bird",
    "language": "english",
    "author": "some writer"
  },
  book9: {
    "title": "war and peace",
    "language": "english",
    "author": "some writer6"
  },
  book10: {
    "title": "things fall apart",
    "language": "french",
    "author": "some writer3"
  }
}

let imgList = {
  "the_vegetarian": "./img/vegetarian.jpg",
  "watership_down": "./img/watership.jpg",
  "adventures_sherlock_holmes": "./img/holmes.jpg",
  "alchemist": "./img/alchemist.jpg",
  "frankenstein": "./img/frankenstein.jpg",
  "city_of_thieves": "./img/thieves.jpg",
  "gone_with_the_wind": "./img/wind.jpg",
  "to_kill_mocking_bird": "./img/mocking_bird.jpg",
  "war_and_peace": "./img/warandpeace.jpg",
  "things_fall_apart": "./img/things_fall_apart.jpg"
}

let arrayOfKeys = Object.keys(imgList);

// iterating and making lists with the objects
function makeList() {

  // getting img keys
  for (let key in arrayOfKeys) {
    var x = arrayOfKeys[key];
    console.log(imgList[x])
  }

  //iterating thru books, creating h2/ul/li's
  for (let id in bookTitles) {
    let header = document.createElement('h2');
    let bookNumber = document.createTextNode(id);
    let newList = document.createElement('ul');
    let image = document.createElement("img");
    image.setAttribute("src", imgList[x]);
    

    // li
    for (let data in bookTitles[id]) {
      let listItem = document.createElement("li");
      let itemText = document.createTextNode(`${data} : ${bookTitles[id][data]}`);
      listItem.appendChild(itemText);
      newList.appendChild(listItem)
    }

    header.appendChild(bookNumber);
    document.body.appendChild(header);
    document.body.appendChild(newList);
    newList.appendChild(image);

  }
}
makeList();

// array for the first step
/* const bookTitles = [
  "the_vegetarian",
  "watership_down",
  "adventures_sherlock_holmes",
  "alchemist",
  "frankenstein",
  "city_of_thieves",
  "gone_with_the_wind",
  "to_kill_mocking_bird",
  "war_and_peace",
  "things_fall_apart"];
 */

// 1/2 examples from stackexchange
/* let newList = document.crea.idokTitles.changingData.forEach(book => {
  let listItem = document.createElement("li");
  let itemText = document.createTextNode(book);
  listItem.appendChild(itemText);
  newList.appendChild(listItem)
})
document.body.appendChild(newList); */

// 2/2 examples from stackexchange
/* function generateList() {
  let newList = document.createElement('ul');

  for (let i = 0; i < bookTitles.length; i++) {
    let book = bookTitles[i];
    newList.innerHTML += `<li>${book}</li>`;
  }
  return newList;
}
document.body.append(generateList()); */

// merged the examples above, but needs to change because it already iterates
/* function makeList() {
  let newList = document.createElement('ul');

  for (let i = 0; i < bookTitles.length; i++) {
    let listItem = document.createElement("li");
    let itemText = document.createTextNode(bookTitles[i]);
    listItem.appendChild(itemText);
    newList.appendChild(listItem)
  }
  document.body.appendChild(newList);
}
makeList();
 */