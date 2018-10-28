'use strict';
{

  const bookTitles = [
    // Replace with your own book titles
    'a_tale_of_two_cities', 
    'the_lord_of_the_rings', 
    'the_little_prince', 
    'the_da_vinci_code',
    'the_hobbit',
    'alice_adventures_in_wonderland',
    'dream_of_the_redchamber', 
    'and_then_there_were_none', 
    'the_lion_the_witch_and_the_wardrobe', 
    'the_adventures_of_pinocchio'
  ];

  // Replace with your own code

  function makeList(arr) {

    let ul = document.createElement('ul');
    ul.setAttribute('id','bookTitles');
    document.body.appendChild(ul)

    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.setAttribute('id', i);
      li.innerHTML = arr[i];
      ul.appendChild(li);
      
    }
  };

  //makeList(bookTitles);

  let bookInformation = {
    'a_tale_of_two_cities' : {
      titleOfTheBook: 'A Tale Of Two Cities',
      authorOfTheBook: 'Charles Dickens',
      languageOfTheBook: 'English',
    },
    'the_lord_of_the_rings' : {
      titleOfTheBook: 'The Lord Of The Rings',
      authorOfTheBook: 'J. R. R. Tolkien',
      languageOfTheBook: 'English',
    }, 
    'the_little_prince': {
      titleOfTheBook: 'The Little Prince',
      authorOfTheBook: 'Antoine de Saint-Exupéry',
      languageOfTheBook: 'English',
    }, 
    'the_da_vinci_code' : {
      titleOfTheBook: 'The Da Vinci Code',
      authorOfTheBook: 'Dan Brown',
      languageOfTheBook: 'English',
    },
    'the_hobbit' : {
      titleOfTheBook: 'The Hobbit',
      authorOfTheBook: 'J. R. R. Tolkien',
      languageOfTheBook: 'English',
    },
    'alice_adventures_in_wonderland' : {
      titleOfTheBook: 'Alice\'s Adventures In Wonderland',
      authorOfTheBook: 'Lewis Carroll',
      languageOfTheBook: 'English',
    },
    'dream_of_the_redchamber' : {
      titleOfTheBook: 'Dream Of The Redchamber',
      authorOfTheBook: 'Cao Xueqin',
      languageOfTheBook: 'English',
    }, 
    'and_then_there_were_none' : {
      titleOfTheBook: 'And Then There Were None',
      authorOfTheBook: 'Agatha Christie',
      languageOfTheBook: 'English',
    }, 
    'the_lion_the_witch_and_the_wardrobe' : {
      titleOfTheBook: 'The Lion The Witch And The Wardrobe',
      authorOfTheBook: 'C. S. Lewis',
      languageOfTheBook: 'English',
    }, 
    'the_adventures_of_pinocchio' : {
      titleOfTheBook: 'The Adventures Of Pinocchio',
      authorOfTheBook: 'Carlo Collodi',
      languageOfTheBook: 'English',
    },

  }

  
  function showBooksInfo(obj) {

    let listedBooks = document.createElement('ul');
    document.body.appendChild(listedBooks)
      for (let i=0; i<Object.keys(obj).length; i++){
        let listedBooksLi = document.createElement('li');
        listedBooksLi.setAttribute('id', Object.keys(obj)[i]);
        listedBooks.appendChild(listedBooksLi);
  
        let titleOfTheBook = document.createElement('h1');
        titleOfTheBook.innerHTML = obj[Object.keys(obj)[i]].titleOfTheBook;
  
        let authorOfTheBook = document.createElement('h2');
        authorOfTheBook.innerHTML = obj[Object.keys(obj)[i]].authorOfTheBook;

        let languageOfTheBook = document.createElement('h3');
        languageOfTheBook.innerHTML = obj[Object.keys(obj)[i]].languageOfTheBook;
  
        listedBooksLi.appendChild(titleOfTheBook);
        listedBooksLi.appendChild(authorOfTheBook);
        listedBooksLi.appendChild(languageOfTheBook);
    }
  };
  showBooksInfo(bookInformation);

  let coverPic = {
    a_tale_of_two_cities : "./img/two_cities.png", 
    the_lord_of_the_rings : "./img/The_Lord.png", 
    the_little_prince : "./img/Litte_Prince.png", 
    the_da_vinci_code : "./img/DaVinciCode.jpg",
    the_hobbit : "./img/Thehobbit.png",
    alice_adventures_in_wonderland : "./img/Alice_Adventures.jpg",
    dream_of_the_redchamber : "./img/Dream_Chamber.jpg", 
    and_then_there_were_none : "./img/There_were_None.jpg", 
    the_lion_the_witch_and_the_wardrobe : "./img/Lion_Witch_Wardobe.jpg", 
    the_adventures_of_pinocchio : "./img/Pinocchio.jpg",
  }



  let test = Object.keys(obj)

  console.log(test);

  
  function viewImages(obj){
//   console.log(obj);
  for (let i = 0; i < Object.keys(obj).length; i++){
    let li = document.getElementById(Object.keys(obj)[i]);
    let img = document.createElement('img');
    let key = Object.keys(obj)[i];
    img.setAttribute("src", obj[key]);
    img.setAttribute("alt", "books cover");
    li.appendChild(img);
    }
  }
viewImages(coverPic);
}
