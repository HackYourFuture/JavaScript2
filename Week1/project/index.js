// your code goes in here

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#next');
let numQuote = 0;
let numQuote1 = [0];
button.addEventListener('click', () => {
  do {
    numQuote = Math.floor(Math.random() * quotes.length);
  } while (numQuote1[numQuote1.length - 1] === numQuote);
  numQuote1.push(numQuote);
  quote.textContent = `${quotes[numQuote].quote}`;
  author.textContent = `${quotes[numQuote].author}`;
});

const quotes = [
  {
    quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    author: "princess Diana"
  },
  {
    quote: "Be yourself, everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  }
]
