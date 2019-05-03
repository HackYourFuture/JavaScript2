'use strict';

{
   // 1.1 Open the apps.js and start by declaring an array that contains 10 strings.
  
  const bookTitles = [
    // Replace with your own book titles
    "good_strategy_bad_strategy",
    //https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239/ref=sr_1_1?keywords=good_strategy_bad_strategy&qid=1556662815&s=gateway&sr=8-1
    "band_of_brothers",
    //https://www.amazon.com/Band-Brothers-Regiment-Airborne-Normandy/dp/1501179403/ref=sr_1_1?keywords=band+of+brothers&qid=1556663873&s=books&sr=1-1
    "sophie's-world",
    //https://www.amazon.com/Sophies-World-History-Philosophy-Classics/dp/0374530718/ref=sr_1_1?keywords=Jostein+Gaarder&qid=1556663366&s=books&sr=1-1
    "moving_mountains",
    //https://www.amazon.com/Moving-Mountains-Lessons-Leadership-Logistics/dp/0875843603
    "life_is_beautiful",
    //https://www.amazon.com/Life-Beautiful-Roberto-Benigni/dp/0571200346/ref=sr_1_3?keywords=life+is+beautiful&qid=1556661156&s=books&sr=1-3
    "schindler's_list",
    //https://www.amazon.com/Schindlers-List-Thomas-Keneally-ebook/dp/B00C4GJ8WY/ref=sr_1_1?crid=PT7525ZK7KZ5&keywords=schindler%27s+list&qid=1556661263&s=books&sprefix=schindler%2Cstripbooks-intl-ship%2C306&sr=1-1
    "l'amour_dure_trois_ans",
    //https://www.amazon.com/Lamour-Dure-Trois-Ans-French/dp/2253166863/ref=sr_1_1?crid=RJ2I3DA4IRJT&keywords=l+amour+dure+trois+ans&qid=1556661700&s=gateway&sprefix=L%E2%80%99amour+dure+trois+ans%2Caps%2C639&sr=8-1-spell
    "the_alchemist",
    //https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?crid=321657OPDKJBZ&keywords=paulo+coelho+books&qid=1556661841&s=gateway&sprefix=paulo+%2Caps%2C295&sr=8-1
    "snow",
    //https://www.amazon.com/Snow-Orhan-Pamuk/dp/0307700887/ref=sr_1_1?crid=2O6A43KDJ7TTX&keywords=snow+orhan+pamuk&qid=1556662157&s=gateway&sprefix=snow+or%2Caps%2C229&sr=8-1
    "the_grand_chessboard",
    //https://www.amazon.com/Grand-Chessboard-American-Geostrategic-Imperatives-ebook/dp/B01IMZ5GS0/ref=sr_1_fkmr0_1?keywords=Brzezinski+%E2%80%9CThe+Grand+Chessboard%3A+American+Primacy+And+Its+Geostrategic+Imperatives%E2%80%9D%5B&qid=1556662686&s=gateway&sr=8-1-fkmr0
  ];
  // Replace with your own code
  // console.log(myBookTitles);
  
 // 1.3 Remove the temporary console.log from step 1.1. Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. 
 
  const listContainer= document.getElementById('books');

  // Make the list
  const listElement = document.createElement('ul');

  // Add it to the page
  listContainer.appendChild(listElement);

  // Set up a loop that goes through the items in listItems one at a time
  const numberOfListItems = bookTitles.length;
  function bookList() {
  for (let i = 0; i < numberOfListItems; ++i) {
      // create an item for each one
      const listItem = document.createElement('li');

      // Add the item text
      listItem.innerHTML = myBookTitles[i];

      // Add listItem to the listElement
      listElement.appendChild(listItem);
  }
}

// Usage
bookList();

 /*1.4 Make an object (not an array!) containing information for each book. Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the following properties: title, language and author.
  
  const favorites = {
    "good_strategy_bad_strategy" : {
      title: "Good Strategy Bad Strategy",
      author: "Richard Rumelt",
      language: "English",
      buy: "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239/ref=sr_1_1?keywords=good_strategy_bad_strategy&qid=1556662815&s=gateway&sr=8-1"
    },
    "band_of_brothers" : {
      title: "Band of Brothers",
      author: "Stephen E. Ambrose",
      language: "English",
      buy: "https://www.amazon.com/Band-Brothers-Regiment-Airborne-Normandy/dp/1501179403/ref=sr_1_1?keywords=band+of+brothers&qid=1556663873&s=books&sr=1-1"
    },
    "sophie's-world" : {
      title: "Sophie's World",
      author: "Richard Rumelt",
      language: "English",
      buy: "https://www.amazon.com/Sophies-World-History-Philosophy-Classics/dp/0374530718/ref=sr_1_1?keywords=Jostein+Gaarder&qid=1556663366&s=books&sr=1"
    },
    "moving_mountains" : {
      title: "Moving Mountains",
      author: "William G. Pagonis",
      language: "English",
      buy: "https://www.amazon.com/Moving-Mountains-Lessons-Leadership-Logistics/dp/0875843603"
    },
    "life_is_beautiful" : {
      title: "Life Is Beautiful",
      author: "Roberto Benigni",
      language: "English",
      buy: "https://www.amazon.com/Life-Beautiful-Roberto-Benigni/dp/0571200346/ref=sr_1_3?keywords=life+is+beautiful&qid=1556661156&s=books&sr=1-3"
    },
    "schindler's_list" : {
      title: "Schindler's List",
      author: "Thomas Keneally",
      language: "English",
      buy: "https://www.amazon.com/Schindlers-List-Thomas-Keneally-ebook/dp/B00C4GJ8WY/ref=sr_1_1?crid=PT7525ZK7KZ5&keywords=schindler%27s+list&qid=1556661263&s=books&sprefix=schindler%2Cstripbooks-intl-ship%2C306&sr=1-1"
    },
    "l'amour_dure_trois_ans" : {
      title: "L'amour Dure Trois Ans",
      author: "Frede Beigbeder",
      language: "French",
      toBuy: "https://www.amazon.com/Lamour-Dure-Trois-Ans-French/dp/2253166863/ref=sr_1_1?crid=RJ2I3DA4IRJT&keywords=l+amour+dure+trois+ans&qid=1556661700&s=gateway&sprefix=L%E2%80%99amour+dure+trois+ans,aps,639&sr=8-1-spell"
    },
    "the_alchemist" : {
      title: "The Alchemist",
      author: "Paulo Coelho",
      language: "English",
      tobuy: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005/ref=sr_1_1?crid=321657OPDKJBZ&keywords=paulo+coelho+books&qid=1556661841&s=gateway&sprefix=paulo+%2Caps%2C295&sr=8-1"
    },
    "kar" : {
      title: "Kar",
      author: "Richard Rumelt",
      language: "Turkish",
      tobuy: "https://www.amazon.com/Kar-Orhan-Pamuk/dp/9750825918/ref=sr_1_fkmrnull_1?crid=NV1GLBG3WGP&keywords=orhan+pamuk+kar&qid=1556735916&s=gateway&sprefix=kar+orh%2Caps%2C383&sr=8-1-fkmrnull"
    },
    "the_grand_chessboard" : {
      title: "The Grand Chessboard",
      author: "Zbigniew Brzezinski",
      language: "English",
      tobuy: "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239/ref=sr_1_1?keywords=good_strategy_bad_strategy&qid=1556662815&s=gateway&sr=8-1"
    }
  };*/
}
