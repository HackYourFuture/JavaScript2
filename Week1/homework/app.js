'use strict';

{
  const books = {
    Peaks_and_Valleys_Making_Good_and_Bad_Times_Work_for_You: {
      title: 'Peaks and Valleys: Making Good and Bad Times Work for You',
      author: 'Spencer Johnson M.D',
      language: 'English',
      picture: 'Pictures/9200000035483858.jpg'
    },

    The_7_Habits_of_Highly_Effective_People: {
      title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
      author: 'Stephen R. Covey',
      language: 'English',
      picture: 'Pictures/9200000041207941.jpg'
    },

    Who_Moved_My_Cheese: {
      title: 'Who Moved My Cheese',
      author: 'Spencer Johnson M.D',
      language: 'English',
      picture: 'Pictures/1001004000772743.jpg'
    },

    The_8th_Habit: {
      title: 'The 8th Habit',
      author: 'Stephen R. Covey',
      language: 'English',
      picture: 'Pictures/1001004002668308.jpg'
    },

    Everyday_Bias_identifying_and_Navigating_Unconscious_Judgments_in_Our_Daily_Lives: {
      title: 'Everyday Bias identifying and Navigating Unconscious Judgments in Our Daily Lives',
      author: 'Howard J. Ross',
      language: 'English',
      picture: 'Pictures/9200000026286353.jpg'
    },

    Thinking_Strategically: {
      title: 'Thinking Strategically',
      author: 'Harvard Business Review',
      language: 'English',
      picture: 'Pictures/9200000102594764.jpg'
    },

    Harvard_Business_Review_on_Winning_Negotiations: {
      title: 'Harvard Business Review on Winning Negotiations',
      author: 'Harvard Business Review',
      language: 'English',
      picture: 'Pictures/9200000002699149.jpg'
    },

    A_guide_to_the_Project_Management_Body_of_Knowledge: {
      title: 'A guide to the Project Management Body of Knowledge',
      author: 'Project Management Institute',
      language: 'English',
      picture: 'Pictures/9200000075545497.jpg'
    },

    Five_Minds_for_the_Future: {
      title: 'Five Minds for the Future',
      author: 'Howard Gardner',
      language: 'English',
      picture: 'Pictures/1001004006312039.jpg'
    },

    Blue_Ocean_Strategy: {
      title: 'Blue Ocean Strategy',
      author: 'W. Chan Kim',
      language: 'English',
      picture: 'Pictures/9200000025961603.jpg'
    }
  };

  function convertBookToCard(newMainDev) {
    const bookCollection = Object.values(books);
    for (let i = 0; i < bookCollection.length; i++) {
      const bookDiv = document.createElement('div');
      // creates a main container for the image and the data

      bookDiv.setAttribute('id', bookCollection[i].id);
      bookDiv.setAttribute('class', 'book');
      bookDiv.style.backgroundImage = 'url(' + bookCollection[i].picture.trim() + ')';
      bookDiv.style.backgroundSize = '100%';
      bookDiv.style.backgroundRepeat = 'no-repeat';

      const dataDiv = document.createElement('div');
      dataDiv.setAttribute('class', 'data');

      const author = document.createElement('span');
      author.setAttribute('class', 'author');
      author.innerText = bookCollection[i].author.trim();
      dataDiv.appendChild(author);

      const title = document.createElement('h1');
      title.setAttribute('class', 'title');
      title.innerText = bookCollection[i].title.trim();
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
    convertBookToCard(newMainDev);
    document.body.appendChild(mainDiv);
  }

  window.addEventListener('load', main);
}
