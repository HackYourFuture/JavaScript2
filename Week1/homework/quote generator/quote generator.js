'use strict';

let quotes = [{
  text: 'Be a joke unto yourself',
  author: 'Osho'
},
{
  text: 'Be a light unto yourself',
  author: 'Lord Buddha'
}, {
  text: 'Know thyself',
  author: 'Socrates'
}, {
  text: 'It takes time to understand nothing',
  author: 'Zen proverb'
}, {
  text: 'This too shall pass',
  author: 'Zen proverb'
}, {
  text: 'What you seek is seeking you',
  author: 'Rumi'
}, {
  text: 'Judge not, that ye be not judged',
  author: 'Jesus Christ'
}]

function pickQuote() {
  const randomNum = Math.floor((Math.random() * quotes.length));
  const quoteEl = document.querySelector('.text-wrapper').firstElementChild;
  const authorEl = document.querySelector('#name').firstElementChild;
  quoteEl.innerText = `${quotes[randomNum].text}`;
  authorEl.innerText = `${quotes[randomNum].author}`;
}
window.onload = pickQuote;
const btnEl = document.querySelector('#btn');
btnEl.addEventListener('click', pickQuote); 
