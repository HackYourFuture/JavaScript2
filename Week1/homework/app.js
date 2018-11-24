'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    "the_vegetarian", "watership_down",
    
     "adventures_sherlock_holmes", "alchemist",
    
     "frankenstein", "city_of_thieves", "gone_with_the_wind",
    
     "kill_a_mockingbird", "war_and_peace", "things_fall_apart"
  ];


  // Replace with your own code
   
  const booksDetails = {
    
    the_vegetarian : {title: "The Vegetarian", lang: "English", author: "Han Kang"},

    watership_down : {title: "Watership Down", lang: "English", author: "Richard Adams"},

    adventures_sherlock_holmes : {title: "The Adventures of Sherlock Holmes", lang: "English", author: "Arthur Conan Doyle"},

    alchemist : {title: "Alchemist", lang: "English", author: "Paulo Coelho"},

    frankenstein : {title: "Frankenstein", lang: "English", author: "Mary Shelley"},

    city_of_thieves : {title: "City of Thieves", lang: "English", author:"David Benioff"},

    gone_with_the_wind : {title: "Gone With the Wind", lang: "English", author: "Margaret Mitchell"},

    kill_a_mockingbird : {title: "To Kill A Mockingbird", lang: "English", author: "Harper Lee"},

    war_and_peace : {title: "War and Peace", lang: "English", author: "Leo Tolstoy"},

    things_fall_apart : {title: "Things Fall Apart", lang: "English", author: "Chinua Achebe"}
    
};

const bookCovers = {
    the_vegetarian : "https://static.abebookscdn.com/cdn/com/images/100-books/Vegetarian,%20The.jpg" , 
    watership_down : "https://static.abebookscdn.com/cdn/com/images/100-books/Watership%20Down.jpg", 
    adventures_sherlock_holmes : "https://static.abebookscdn.com/cdn/com/images/100-books/Adventures%20of%20Sherlock%20Holmes.jpg", 
    alchemist : "https://static.abebookscdn.com/cdn/com/images/100-books/Alchemist.jpg", 
    frankenstein : "https://static.abebookscdn.com/cdn/com/images/100-books/Frankenstein.jpg", 
    city_of_thieves : "https://static.abebookscdn.com/cdn/com/images/100-books/City%20of%20Thieves.jpg", 
    gone_with_the_wind : "https://static.abebookscdn.com/cdn/com/images/100-books/Gone%20With%20the%20Wind.jpg", 
    kill_a_mockingbird : "https://static.abebookscdn.com/cdn/com/images/100-books/To%20Kill%20a%20Mockingbird.jpg", 
    war_and_peace : "https://static.abebookscdn.com/cdn/com/images/100-books/War%20and%20Peace.jpg", 
    things_fall_apart : "https://static.abebookscdn.com/cdn/com/images/100-books/Things%20Fall%20Apart.jpg",
};
}

function generateList() {
    const newList = document.createElement('ul');
    document.body.appendChild(generateList);
    for (let i = 0; i < bookTitles.length; i++) {
      const list = document.createElement("li");
      newList.appendChild(li);
      newList.innerHTML = (bookTitles)[i]; 
      const bookImages = document.createElement("img");
      li.appendchild(bookImages);
      li.setAttribute("id", Object.keys(bookCovers)[i]);

      const para = document.createElement("p");
      li.appendChild(para);
      p.innerHTML = ("lang :" + (Object.values(booksDetails)[i]).lang);

      const para1 = document.createElement("p");
      li.appendChild(para1);
      p1.innerHTML = ("lang : " + (Object.values(booksDetails)[i]).author);

    }
  
    return newList;

  }
  
  console.log(newList);
  

//   const head1 = document.createElement("h1");
//   Li.appenChild(head1);

//   h1.innerHTML = (Object.values(booksDetails)[i]).title;
 
//   const bookImages = document.createElement("img");
//   li.appendchild(bookImages);
//   li.setAttribute("id", Object.keys(bookCovers)[i]);

//   const para = document.createElement("p");

//   li.appendChild(para);

//   p.innerHTML = ("lang :" + (Object.values(booksDetails)[i]).lang);

//   const para1 = document.createElement("p");

//   li.appendChild(para1);

//   p1.innerHTML = ("lang : " + (Object.values(booksDetails)[i]).author);

//   console.log(newList);
}
