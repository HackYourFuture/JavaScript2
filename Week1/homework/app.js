'use strict';

{
  const book1 = {
    ID: 'Peaks_and_Valleys_Making_Good_and_Bad_Times_Work_for_You',
    Title: 'Peaks and Valleys: Making Good and Bad Times Work for You',
    Author: 'Spencer Johnson M.D',
    language: 'English',
    Picture: 'Pictures/9200000035483858.jpg'
  };
  const book2 = {
    ID: 'The_7_Habits_of_Highly_Effective_People',
    Title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    Author: 'Stephen R. Covey',
    language: 'English',
    Picture: 'Pictures/9200000041207941.jpg'
  };
  const book3 = {
    ID: 'Who_Moved_My_Cheese',
    Title: 'Who Moved My Cheese',
    Author: 'Spencer Johnson M.D',
    language: 'English',
    Picture: 'Pictures/1001004000772743.jpg'
  };
  const book4 = {
    ID: 'The_8th_Habit',
    Title: 'The 8th Habit',
    Author: 'Stephen R. Covey',
    language: 'English',
    Picture: 'Pictures/1001004002668308.jpg'
  };
  const book5 = {
    ID: 'Everyday_Bias_Identifying_and_Navigating_Unconscious_Judgments_in_Our_Daily_Lives',
    Title: 'Everyday Bias Identifying and Navigating Unconscious Judgments in Our Daily Lives',
    Author: 'Howard J. Ross',
    language: 'English',
    Picture: 'Pictures/9200000026286353.jpg'
  };

  const book6 = {
    ID: 'Thinking_Strategically  ',
    Title: 'Thinking Strategically',
    Author: 'Harvard Business Review',
    language: 'English',
    Picture: 'Pictures/9200000102594764.jpg'
  };
  const book7 = {
    ID: 'Harvard_Business_Review_on_Winning_Negotiations ',
    Title: 'Harvard Business Review on Winning Negotiations',
    Author: 'Harvard Business Review',
    language: 'English',
    Picture: 'Pictures/9200000002699149.jpg'
  };
  const book8 = {
    ID: 'A_guide_to_the_Project_Management_Body_of_Knowledge',
    Title: 'A guide to the Project Management Body of Knowledge',
    Author: 'Project Management Institute',
    language: 'English',
    Picture: 'Pictures/9200000075545497.jpg'
  };
  const book9 = {
    ID: 'Five_Minds_for_the_Future',
    Title: 'Five Minds for the Future',
    Author: 'Howard Gardner',
    language: 'English',
    Picture: 'Pictures/1001004006312039.jpg'
  };
  const book10 = {
    ID: 'Blue_Ocean_Strategy',
    Title: 'Blue Ocean Strategy',
    Author: 'W. Chan Kim',
    language: 'English',
    Picture: 'Pictures/9200000025961603.jpg'
  };
  function ConvertBookToCard(newMainDev) {
    const bookCollection = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10];
    for (let i = 0; i < bookCollection.length; i++) {
      const bookDiv = document.createElement('div');
      // creates a main container for the image and the data

      bookDiv.setAttribute('ID', bookCollection[i].ID.trim());
      bookDiv.setAttribute('class', 'book');
      bookDiv.style.backgroundImage = 'url(' + bookCollection[i].Picture.concat();
      bookDiv.style.backgroundSize = '100%';
      bookDiv.style.backgroundRepeat = 'no-repeat';

      const dataDiv = document.createElement('div');
      dataDiv.setAttribute('class', 'data');

      const author = document.createElement('span');
      author.setAttribute('class', 'author');
      author.innerText = bookCollection[i].Author.concat();
      dataDiv.appendChild(author);

      const title = document.createElement('h1');
      title.setAttribute('class', 'title');
      title.innerText = bookCollection[i].Title.concat();
      dataDiv.appendChild(title);

      const language = document.createElement('p');
      language.setAttribute('class', 'language');
      language.innerText = bookCollection[i].language.concat();
      dataDiv.appendChild(language);

      // add the data section under the image
      bookDiv.appendChild(dataDiv);
      // add the book in the main books catalogue
      newMainDev.appendChild(bookDiv);
    }
  }

  function main() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'mainGallery');
    const newMainDev = document.createElement('Div');
    newMainDev.setAttribute('class', 'bookCollection');
    mainDiv.appendChild(newMainDev);
    ConvertBookToCard(newMainDev);
    document.body.appendChild(mainDiv);
  }

  window.addEventListener('load', main);
}
