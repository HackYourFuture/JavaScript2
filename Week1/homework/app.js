"use strict";

//1.1
{
  const bookTitles = [
    // Replace with your own book titles
    "a_tale_of_two_cities",
    "the_lord_of_the_rings",
    "the_little_prince",
    "the_da_vinci_code",
    "the_hobbit",
    "alice_adventures_in_wonderland",
    "dream_of_the_redchamber",
    "and_then_there_were_none",
    "the_lion_the_witch_and_the_wardrobe",
    "the_adventures_of_pinocchio"
  ];
  //console.log(bookTitles);

  //1.3 Make a function that generates a ul with li elements for each book ID in the array using a for loop.
  const rootDiv = document.getElementById("root");

  function generateList(arr) {
    let list = document.createElement("ul");
    rootDiv.appendChild(list);

    for (let i = 0; i < arr.length; i++) {
      let listItems = document.createElement("li");
      listItems.setAttribute("id", arr[i]);
      listItems.innerText = arr[i];
      list.appendChild(listItems);
      //console.log(listItems);
    }
  }
  //generateList(bookTitles);

  //1.4
  let bookInformation = {
    a_tale_of_two_cities: {
      title: "A Tale Of Two Cities",
      author: "Charles Dickens",
      language: "English"
    },
    the_lord_of_the_rings: {
      title: "The Lord Of The Rings",
      author: "J. R. R. Tolkien",
      language: "English"
    },
    the_little_prince: {
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      language: "English"
    },
    the_da_vinci_code: {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      language: "English"
    },
    the_hobbit: {
      title: "The Hobbit",
      author: "J. R. R. Tolkien",
      language: "English"
    },
    alice_adventures_in_wonderland: {
      title: "Alice's Adventures In Wonderland",
      author: "Lewis Carroll",
      language: "English"
    },
    dream_of_the_redchamber: {
      title: "Dream Of The Redchamber",
      author: "Cao Xueqin",
      language: "English"
    },
    and_then_there_were_none: {
      title: "And Then There Were None",
      author: "Agatha Christie",
      language: "English"
    },
    the_lion_the_witch_and_the_wardrobe: {
      title: "The Lion The Witch And The Wardrobe",
      author: "C. S. Lewis",
      language: "English"
    },
    the_adventures_of_pinocchio: {
      title: "The Adventures Of Pinocchio",
      author: "Carlo Collodi",
      language: "English"
    }
  };

  function generateListModification(obj) {
    let list = document.createElement("ul");
    rootDiv.appendChild(list);

    for (let i = 0; i < Object.keys(obj).length; i++) {
      let listItem = document.createElement("li");
      listItem.setAttribute("id", Object.keys(obj)[i]);
      list.appendChild(listItem);

      let listTitle = document.createElement("h2");
      listTitle.innerText = "Title: " + obj[Object.keys(obj)[i]].title;
      list.appendChild(listTitle);

      let listAuthor = document.createElement("h3");
      listAuthor.innerText = "Author: " + obj[Object.keys(obj)[i]].author;
      list.appendChild(listAuthor);

      let listLanguage = document.createElement("h4");
      listLanguage.innerText = "Language: " + obj[Object.keys(obj)[i]].language;
      list.appendChild(listLanguage);

      let sepLine = document.createElement("hr");
      listLanguage.appendChild(sepLine);
      //console.log(listItem);
      //listLanguage.innerText = JSON.stringify(obj[Object.keys(obj)[i]]);
    }
  }
  generateListModification(bookInformation);

  //1.7
  let bookCovers = {
    a_tale_of_two_cities: "./img/two_cities.png",
    the_lord_of_the_rings: "./img/The_Lord.png",
    the_little_prince: "./img/Litte_Prince.png",
    the_da_vinci_code: "./img/DaVinciCode.jpg",
    the_hobbit: "./img/Thehobbit.png",
    alice_adventures_in_wonderland: "./img/Alice_Adventures.jpg",
    dream_of_the_redchamber: "./img/Dream_Chamber.jpg",
    and_then_there_were_none: "./img/There_were_None.jpg",
    the_lion_the_witch_and_the_wardrobe: "./img/Lion_Witch_Wardobe.jpg",
    the_adventures_of_pinocchio: "./img/Pinocchio.jpg"
  };

  function viewImages(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
      let test = document.getElementById(Object.keys(obj)[i]);
      let picture = document.createElement("img");
      picture.setAttribute("src", obj[Object.keys(obj)[i]]);
      picture.setAttribute("alt", "books cover");
      picture.setAttribute("class", "bookCovers");

      test.appendChild(picture);
      //console.log("Test: " + picture);
    }
  }
  viewImages(bookCovers);
}
