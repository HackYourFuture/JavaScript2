



let btn = document.getElementById('nextBtn');
btn.addEventListener('click' , fetchData);

function fetchData () {

       let item = Math.floor(Math.random() * Math.floor(quotes.length))
       console.log(item);
       const quoteContainer = document.getElementById('quoteText');
       const authorContainer = document.getElementById('author');
       quoteContainer.textContent = `${quotes[item].quote}` ;
       authorContainer.textContent = `${quotes[item].author}`;    
}
const quotes = [
       {
             quote:"Whatever the mind of man can conceive and believe, it can achieve.", author:"Napoleon Hill"},
       {
             quote:"Strive not to be a success, but rather to be of value.", author:"Albert Einstein"},
       {
             quote:"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},
       {
             quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},
       {
             quote:"You miss 100% of the shots you don’t take.",author:"Wayne Gretzky"},
       {
             quote:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",author:"Michael Jordan"},
       ];
       