'use strict';
{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_and_the_chamber_of_secrets',
    'the_art_of_war',
    'the_rise_and_fall_of_the_great_powers',
    'the_brothers_karamazov',
    'in_search_of_lost_time',
    'great_expectations',
    'war_and_peace',
    'the_great_gatsby',
    'to_kill_a_mockingbird',
    'the_adventures_of_huckleberry_finn',
  ];
  // Replace with your own code
  const infoForEachBook = {
    harry_potter_and_the_chamber_of_secrets: {
      title: 'Harry Potter and the Chamber of Secrets',
      author: ' J. K. Rowling',
      genre: 'Fantasy',
      language: 'English',
      country: 'United Kingdom',
    },
    the_art_of_war: {
      title: 'The Art of War',
      author: 'Sun Tzu',
      genre: 'Historical fiction',
      language: 'Chinese',
      country: 'China',
    },
    the_rise_and_fall_of_the_great_powers: {
      title: 'The Rise and Fall of the Great Powers',
      author: 'Paul Kennedy',
      genre: 'Economics, History',
      language: 'English',
      country: 'United States',
    },
    the_brothers_karamazov: {
      title: 'The Brothers Kazamazov',
      author: ' Fyodor Dostoevsky',
      genre: 'Philosophical novel',
      language: 'Russian',
      country: 'Russia',
    },
    in_search_of_lost_time: {
      title: 'In Search of Lost Time',
      author: ' Marcel Proust',
      genre: 'Modernist',
      language: 'French',
      country: 'France',
    },
    great_expectations: {
      title: 'Great Expectations',
      author: ' Charles Dickens',
      genre: 'Novel',
      language: 'English',
      country: 'United Kingdom',
    },
    war_and_peace: {
      title: 'War and Peace',
      author: ' Leo Tolstoy',
      genre: 'Historical novel',
      language: 'Russian',
      country: 'Russia',
    },
    the_great_gatsby: {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Novel',
      language: 'English',
      country: 'United States',
    },
    to_kill_a_mockingbird: {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: ' Southern Gothic, Bildungsroman',
      language: 'English',
      country: 'United States',
    },
    the_adventures_of_huckleberry_finn: {
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      genre: 'Picaresque novel',
      language: 'English',
      country: 'United States',
    },
  };

  
  const bookCovers = {    
    harry_potter_and_the_chamber_of_secrets: './img/harry_potter_and_the_chamber_of_secrets.jpg',
    the_art_of_war: ' ./img/the_art_of_war.jpg',
    the_rise_and_fall_of_the_great_powers: ' ./img/the_rise_and_fall_of_the_great_powers.jpg',
    the_brothers_karamazov: ' ./img/the_brothers_karamazov.jpg',
    in_search_of_lost_time: './img/in_search_of_lost_time.jpg',
    great_expectations: ' ./img/great_expectations.jpg',
    war_and_peace: ' ./img/war_and_peace.jpg',
    the_great_gatsby: ' ./img/the_great_gatsby.jpg',
    to_kill_a_mockingbird: ' ./img/to_kill_a_mockingbird.jpg',
    the_adventures_of_huckleberry_finn: ' ./img/the_adventures_of_huckleberry_finn.jpg',
  };


  const newDiv = document.createElement('div');
  console.log(newDiv);
  document.getElementsByTagName('body')[0].appendChild(newDiv);
  const newH1 = document.createElement('h1');
  console.log(newH1);

  newDiv.appendChild(newH1);
  newH1.innerText = "THE BEST 10 HIGH RANKED BOOKS EVER "


  function generateMyFavoriteBookList() {

    const newUl = document.createElement('ul');
    console.log(newUl);
    newDiv.appendChild(newUl);

    const detailsOfBooks = Object.values(infoForEachBook);
    console.log(detailsOfBooks);

    for (let i = 0; i < detailsOfBooks.length; i++) {
      const newLi = document.createElement('li');
      newUl.appendChild(newLi);
      const newImg = document.createElement('img');
      newLi.appendChild(newImg);
      newImg.src = Object.values(bookCovers)[i];
      const newHeadingH2 = document.createElement('h2');
      const newHeadingH3 = document.createElement('h3');
      newLi.appendChild(newHeadingH2);
      newLi.appendChild(newHeadingH3);
      const paraGenre = document.createElement('p');
      newLi.appendChild(paraGenre);
      const paraLanguage = document.createElement('p');
      newLi.appendChild(paraLanguage);
      const paraCountry = document.createElement('p');
      newLi.appendChild(paraCountry);
      const detailsOfBooksItem = detailsOfBooks[i];
      newHeadingH2.innerText = detailsOfBooksItem.title;
      newHeadingH3.innerText = detailsOfBooksItem.author;
      paraGenre.innerText = detailsOfBooksItem.genre;
      paraLanguage.innerText = detailsOfBooksItem.language;
      paraCountry.innerText = detailsOfBooksItem.country;
      console.log(newHeadingH2.innerText);
      newImg.className = 'images';
      newUl.className = 'ulClass';
      newHeadingH2.className = 'h2Class';
      newHeadingH3.className = 'h3Class';
      paraGenre.className = 'paragraph';
      paraLanguage.className = 'paragraph';
      paraCountry.className = 'paragraph';
      newLi.className = 'classList';
      newH1.className = 'h1Class';
    
    }
  }
  generateMyFavoriteBookList();

}