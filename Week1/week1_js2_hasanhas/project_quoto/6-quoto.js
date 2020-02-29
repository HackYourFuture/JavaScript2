// <!-- Here are the requirements:
// Include at least 1 JavaScript, CSS and HTML file
// The design should look similar to the one in the picture above
// No CSS frameworks allowed
// Each time the button is clicked it should show a random quote
// Create a function that fires after the button click
// Collect 6 of your favorite quotes (quote and author) and store them in the right data structure
// Good luck! -->

const quotesList = [{
    quote: 'I have no special talent. I am only passionately curious.',
    famousPerson: 'Albert Einstein',
  },
  {
    quote: 'It always seems impossible until it’s done.',
    famousPerson: 'Nelson Mandela',
  },
  {
    quote: "The unexamined life is not worth living.",
    famousPerson: 'Socrates',
  },
  {
    quote: ' I don’t think of all the misery but of the beauty that still remains.',
    famousPerson: 'Anne Frank',
  },
  {
    quote: 'Whatever you are, be a good one.',
    famousPerson: 'Abraham Lincoln',
  },
  {
    quote: 'Be kind whenever possible. It is always possible.',
    famousPerson: 'Dalai Lama',
  },
];

const firstDiv = document.createElement('div');
firstDiv.className = 'firstDiv';
firstDiv.id = 'firstDiv';
document.body.appendChild(firstDiv);
let h1 = document.createElement('h1');
firstDiv.appendChild(h1);
let h3 = document.createElement('h3');
firstDiv.appendChild(h3);

const divButton = document.createElement('div');
divButton.className = 'firstDiv';
divButton.id = 'div2';
document.body.appendChild(divButton);
let btn = document.createElement('button');
divButton.appendChild(btn);

const lastDiv = document.createElement('div');
lastDiv.setAttribute('id', 'div3');
document.body.appendChild(lastDiv);

function randomly() {
  const random = Math.floor(Math.random() * quotesList.length);
  h1.innerText = '  ' + quotesList[random].quote;
  h3.innerText = quotesList[random].famousPerson;
}

btn.addEventListener('click', randomly);

h1.innerText = '"BEST FAMOUS QUOTES BY FAMOUS PEOPLE';
h3.innerText = 'Source: https://wisdomquotes.com/famous-quotes/';
btn.innerText = 'New Quote';

