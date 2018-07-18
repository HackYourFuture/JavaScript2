'use strict';

  const bookTitles = [
    // Replace with your own book titles
    'Between_Death_and_Heaven',
    'The_Finisher',
    'A_study_in_sable',
    'Heartless',
    'The_door_in_the_moon',
    'Harry_Potter_and_the_Methods_of_Rationality',
    'The_6th_extinction',
    'Rocket_science',
    'Eat_what_you_love_everyday',
    'Island_of_glass'
  ];

  const libraryInformation = {
    'Between_Death_and_Heaven': {
      title: "Between Death and Heaven",
      language: "English",
      author: "Annemarie Musawale",
      published: 2014
    },
    'The_Finisher': {
      title: "The Finisher",
      language: "English",
      author: "David Baldacci",
      published: 2014
    },
    'A_study_in_sable': {
      title: "A study in sable",
      language: "English",
      author: "Mercedes Lackey",
      published: 2016
    },
    'Heartless': {
      title: "Heartless",
      language: "English",
      author: "Marissa Meyer",
      published: 2016
    },
    'The_door_in_the_moon': {
      title: "The door in the moon",
      language: "English",
      author: "Catherine Fisher",
      published: 2015
    },
    'Harry_Potter_and_the_Methods_of_Rationality': {
      title: "Harry Potter and the Methods of Rationality",
      language: "English",
      author: "Eliezer Yudkowsky",
      published: 2016
    },
    'The_6th_extinction': {
      title: "The 6th extinction",
      language: "English",
      author: "James Rollins",
      published: 2015
    },
    'Rocket_science': {
      title: "Rocket science",
      language: "English",
      author: "Deborah Lock",
      published: 2015
    },
    'Eat_what_you_love_everyday': {
      title: "Eat what you love everyday",
      language: "English",
      author: "Marlene Koch",
      published: 2014
    },
    'Island_of_glass': {
      title: "Island of glass",
      language: "English",
      author: "Nora Roberts",
      published: 2016 
    }
  };





  function createNewElement() {
    let check = checkExistedList();
    if (check === true) {
      let newUl = document.createElement("ul");
      newUl.setAttribute("id", "myBookList");
      let newOl = document.createElement("ol");
      newOl.setAttribute("id", "listTiltle");
      let liTitle = document.createTextNode("Here is my book's list :");
      newOl.appendChild(liTitle);
      let parent = document.getElementById("listContainer");
      newUl.appendChild(newOl);
      parent.appendChild(newUl);

      
      for (let i = 0; i < bookTitles.length; i++) {
        let newLi = document.createElement("li");
        newLi.setAttribute("id", bookTitles[i]);
        let bookName = document.createTextNode(libraryInformation[bookTitles[i]].title);
        let bookAuthor = document.createTextNode('Writed by : ' + libraryInformation[bookTitles[i]].author);
        let bookLanguage = document.createTextNode('Book Language : ' + libraryInformation[bookTitles[i]].language);
        let publishedDate = document.createTextNode('Published on : ' + libraryInformation[bookTitles[i]].published);
        let h2Tag = document.createElement("h2");
        let h3Tag = document.createElement("h3");
        let h4Tag = document.createElement("h4");
        let h5Tag = document.createElement("h5");
        let bookCover = document.createElement("img");

        h2Tag.appendChild(bookName);
        h3Tag.appendChild(bookAuthor);
        h4Tag.appendChild(bookLanguage);
        h5Tag.appendChild(publishedDate);
        let imageSrc = 'images/' + bookTitles[i] + '.jpg';
        bookCover.setAttribute('src', imageSrc);
        bookCover.setAttribute('alt', bookName);
        newLi.innerHTML += h2Tag.outerHTML + h3Tag.outerHTML + h4Tag.outerHTML + h5Tag.outerHTML;
        //jjjjjjjjjjjjjjjjjjjjjjjjjjjj
        newLi.appendChild(bookCover);
        newUl.appendChild(newLi);
      }
    }
  }
  // Check exited list function
  function checkExistedList() {
    let temp = document.getElementById("myBookList");
    if (temp !== null) {
      return false;
    } else return true;
    
  }
  //console.log(checkExistedList());


  

