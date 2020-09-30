// your code goes in here

'use strict';

//all the quotes as objects inside array
const quotes = [
  {
    quote:
      "When life gives you lemons, don't make lemonade! Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these?!",
    author: 'Cave Johnson (Portal 2)',
  },
  {
    quote: 'What is better - to be born good or to overcome your evil nature through great effort?',
    author: 'Paarthurnax (Elder Scrolls V: Skyrim)',
  },
  {
    quote: 'The right man in the wrong place can make all the difference in the world.',
    author: 'G-Man (Half-Life 2)',
  },
  {
    quote: 'We all make choices in life, but in the end our choices make us.',
    author: 'Andrew Ryan (Bioshock)',
  },
  {
    quote: 'Hey, chin up! I know the night just got darker, but it won’t last forever.',
    author: 'Nick Valentine (Fallout 4)',
  },
  {
    quote: 'Nothing is more badass than treating a woman with respect!',
    author: 'Mr.Torgue (Borderlands 2)',
  },
];

//spots for quote and author
const quote = document.querySelector('h3');
const author = document.querySelector('p');

// button
const button = document.querySelector('.quote-generator');
button.addEventListener('click', randomizer);

function randomizer() {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].author;
}
