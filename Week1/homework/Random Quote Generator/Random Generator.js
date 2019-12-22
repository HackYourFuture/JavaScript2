'use strict'

const quote= [
    {
    wisdom: 'THE PEN THAT WRITES YOUR LIFE STORY MUST BE HELD IN YOUR OWN HAND.' , 
    sayer: '-IRENE C. KASSORLA' 
    },

    {
    wisdom: 'LIFE IS A DARING ADVENTURE OR IT IS NOTHING AT ALL.' , 
    sayer: '-HELEN KELLER' 
    },

    {
    wisdom: 'YOU GET IN LIFE WHAT YOU HAVE THE COURAGE TO ASK FOR.' , 
    sayer: '-OPRAH WINFREY' 
    },

    {
    wisdom: 'THE MEANING OF LIFE IS TO FIND YOUR GIFT. THE PURPOSE OF LIFE IS TO GIVE IT AWAY.' , 
    sayer: '-WILLIAM SHAKESPEARE' 
    },


    {
    wisdom: 'TOO MANY OF US ARE NOT LIVING OUR DREAMS BECAUSE WE ARE LIVING OUR FEARS.' , 
    sayer: '-LES BROWN' 
    },


    {
    wisdom: 'THE PURPOSE OF LIFE IS NOT TO FIGHT AGAINST EVIL AND MISFORTUNE; IT IS TO UNVEIL MAGNIFICENCE.' , 
    sayer: '-ALAN COHEN' 
    }
]



let quoteRandom=function (){

    let keys=Object.keys(quote)
    let theRandomQuote=quote[keys[Math.floor(keys.length*Math.random())]]
    let quoteWisdom=theRandomQuote.wisdom
    let quoteSayer=theRandomQuote.sayer
    return [quoteWisdom, quoteSayer]
}

let newWisdom=function() {

    let values=quoteRandom()
    let randomWisdom=values[0]
    let quoteSayer=values[1]
    document.querySelector('#randomWisdom').innerText=randomWisdom
    document.querySelector('#quoteSayer').innerText=quoteSayer
}








