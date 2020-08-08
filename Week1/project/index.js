// your code goes in here



const quotes  = [{
    title: "When I was born I was so surprised I didn't talk for a year and a half.",
    author: "Gracie Allen"
  },
  {
    title: "Happiness in intelligent people is the rarest thing I know.",
    author: "Ernest Hemingway"
  },
  {
    title: "Act as if it were impossible to fail.",
    author: "Dorothea Brande"
  },
  {
    title: "If you judge people, you have no time to love them.",
    author: "Mother Teresa"
  },
  {
    title: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    title: "Peace begins with a smile",
    author: "Mother Teresa"
  }
];


let h1 = document.querySelector('h1');
let p = document.querySelector('p');
let button = document.querySelector('button');

function pickQuoteRandomly(){
  let randnom =  Math.floor(Math.random() * quotes.length);
  h1.innerText= quotes[randnom].title;
  p.innerText= '- ' + quotes[randnom].author;
  return h1 +' '+ p
};

button.addEventListener('click', pickQuoteRandomly )


