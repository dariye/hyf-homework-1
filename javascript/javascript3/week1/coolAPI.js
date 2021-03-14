//Breaking bad quotes API: It returns an object(or several) with a quote from breaking bad and his author.
//Documentation here -> https://github.com/shevabam/breaking-bad-quotes


//One random quote
fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(response => response.json())
    .then(quote =>{
        console.log(quote)
    })

//Array of random quotes
fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes/10")
    .then(response => response.json())
    .then(quotes =>{
        console.log(quotes)
    })
    
    
    
    
 //as functions   
/* function getAQuote(){
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const data = await response.json();
    console.log(data)
}

getAQuote(); //With single random quotes it returns an object containing two keys: "quote" and  "author"

async function getMultipleQuotes(numberOfQuotes){
    const response = await fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/${numberOfQuotes}`)
    const data = await response.json();
    console.log(data)
}
getMultipleQuotes(20);*/