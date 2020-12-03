const objectWithQuotes = [{
  Quote: "Life is what happens when you're busy making other plans.",
  Author: "- John Lennon"
},
{
  Quote: "The way to get started is to quit talking and begin doing.",
  Author: "- Walt Disney"
},
{
  Quote: "If life were predictable it would cease to be life, and be without flavor.",
  Author: "- Eleanor Roosevelt"
},
{
  Quote: "It is during our darkest moments that we must focus to see the light.",
  Author: "- Aristotle"
},
{
  Quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  Author: "- Benjamin Franklin"
},
{
  Quote: "Whoever is happy will make others happy too.",
  Author: "- Anne Frank"
}]

const newQuoteBtn = document.getElementById("new-quote-btn");
let chosenQuote = document.querySelector("#new-quote");
let chosenAuthor = document.querySelector("#author > input");
function quotePicker() {
  let quoteNum = Math.floor((Math.random()) * 6)
  let newQuote = objectWithQuotes[quoteNum]
  chosenQuote.value = newQuote.Quote
  chosenAuthor.value = newQuote.Author
}
newQuoteBtn = addEventListener("click", quotePicker)
