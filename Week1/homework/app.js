'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'currency_wars',
    'brief_history_time',
    'code_book',
    'how_analyze_people',
    'ana_yurt',
    'oyghanghan_zimin',
    'iz',
    'brain_rules_baby',
    'baby_minds',
  ];
  // create collection books information
  const myBooks = {
    harry_potter_chamber_secrets: {
      title: "Harry Potter's - The Chamber of Secrets",
      language: 'English',
      author: 'J. K. Rowling',
    },
    currency_wars: {
      title: 'Currency Wars',
      language: 'English',
      author: 'James Richards',
    },
    brief_history_time: {
      title: 'A Brief History Of Time',
      language: 'English',
      author: 'Stephen Hawking',
    },
    code_book: {
      title: 'The Code Book',
      language: 'English',
      author: 'Simon Singh',
    },
    how_analyze_people: {
      title: 'How to Analyze People',
      language: 'English',
      author: 'Emma Jones Zach Raymond',
    },
    ana_yurt: {
      title: 'Ana Yurt',
      language: 'Uyghur',
      author: 'Zordun Sabir',
    },
    oyghanghan_zimin: {
      title: 'Oyghanghan Zimin',
      language: 'Uyghur',
      author: 'Abdurehim Otkur',
    },
    iz: {
      title: 'Iz',
      language: 'Uyghur',
      author: 'Abdurehim Otkur',
    },
    brain_rules_baby: {
      title: 'Brain Rules for Baby',
      language: 'English',
      author: 'John Medina',
    },
    baby_minds: {
      title: 'Baby Minds',
      language: 'English',
      author: 'Linda Acredolo Susan Goodwin',
    },
  };
  const booksCover = {
    harry_potter_chamber_secrets: './img/harry_potter_chamber_secrets.jpg',
    currency_wars: './img/Currency wars.jpg',
    brief_history_time: './img/A Brief History Of Time.jpg',
    code_book: './img/The Code Book.jpg',
    how_analyze_people: './img/How to Analyze People.jpg',
    ana_yurt: './img/ana yurt.png',
    oyghanghan_zimin: './img/oyghanghan zimin.jpeg',
    iz: './img/iz.png',
    brain_rules_baby: './img/BrainRulesforBaby.jpg',
    baby_minds: './img/Baby Minds.jpg',
  };

  // i will be creat a list over de book with image
  function bookList() {
    const bookUl = document.createElement('ul');
    for (let i = 0; i < bookTitles.length; i++) {
      const bookLi = document.createElement('li');
      bookLi.id = 'list';
      const imgDiv = document.createElement('div');
      imgDiv.setAttribute('id', bookTitles[i]);
      imgDiv.setAttribute('class', 'booksImg');
      const infoDiv = document.createElement('div');
      infoDiv.setAttribute('id', 'bookInfo');
      const bookName = document.createElement('h3');
      bookName.textContent = 'Title : ' + myBooks[bookTitles[i]].title;
      infoDiv.appendChild(bookName);
      // set language and Author
      const bookLanguage = document.createElement('h4');
      bookLanguage.textContent = 'Language : ' + myBooks[bookTitles[i]].language;
      infoDiv.appendChild(bookLanguage);
      const bookAuthor = document.createElement('h4');
      bookAuthor.textContent = 'Author : ' + myBooks[bookTitles[i]].author;
      infoDiv.appendChild(bookAuthor);
      // complete all list
      bookLi.appendChild(imgDiv);
      bookLi.appendChild(infoDiv);
      bookUl.appendChild(bookLi);
    }
    return bookUl;
  }
  // set all books cover
  const bookCovers = () => {
    for (const book of Object.keys(booksCover)) {
      const cover = document.createElement('img');
      cover.setAttribute('src', booksCover[book]);
      const bookCoversList = document.getElementById(book);
      bookCoversList.appendChild(cover);
    }
  };
  // all information about the books display in web page
  const headTitle = document.createElement('h1');
  headTitle.textContent = 'My Books';
  document.body.appendChild(headTitle);
  document.body.appendChild(bookList());
  bookCovers();
}
