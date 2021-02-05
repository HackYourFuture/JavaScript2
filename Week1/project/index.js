const theQuotes =[
'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. -- S. Beckett',
'Is that a gun in your pocket, or are you just happy to see me? -- Mae WEST',
'Carpe diem. Seize the day, boys. Make your lives extraordinary. -- Dead Poets Society, 1989',
'Houston, we have a problem. -- Apollo 13, 1995',
'You can not handle the truth! -- A Few Good Men, 1992',
'Hasta la vista, baby. -- the Terminator 2: Judgment Day, 1991',
]



function nextQuote() {
    const randomNumber = Math.floor(Math.random() * (theQuotes.length));
    document.getElementById('displayQuote').innerHTML = theQuotes[randomNumber];
}

// https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/

