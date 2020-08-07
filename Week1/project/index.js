// list of Quotes
const quotes = [
  { quote: "Be yourself; everyone else is already taken.", for: "- Oscar Wilde" },
  { quote: "You only live once, but if you do it right, once is enough.", for: "- Mae West" },
  { quote: "Be the change that you wish to see in the world.", for: "- Mahatma Gandhi" },
  { quote: "If you tell the truth, you don't have to remember anything.", for: "- Mark Twain" },
  { quote: "A friend is someone who knows all about you and still loves you.", for: "- Elbert Hubbard" },
  { quote: "Without music, life would be a mistake.", for: "- Friedrich Nietzsche" }
];
// store <h1>.
let changeQuote = document.getElementById("Change-Quote-button");

// creat a function to get a quote[]-Element randomly.THEN insert the Quote inside <h1> and who says inside <p>.
const changeTheQuote = function () {
  // store <h1>.
  let quoteText = document.getElementById("text-box").children[0].children[1];
  // store <p>.
  let quoteFor = document.getElementById("text-box").children[1];
  // create random number
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // get a quote randomly,THEN insert the Quote inside <h1> and who says inside <p>.
  quoteText.innerText = quotes[randomIndex].quote;
  quoteFor.innerText = quotes[randomIndex].for;
}
// fire the changeTheQuote() when the "Next Quote" button clicked.
changeQuote.addEventListener("click", changeTheQuote);
