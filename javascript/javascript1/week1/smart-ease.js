//Excercise 1: ageify
function ageify(yearOfBirth, yearFuture) {
    let age = yearFuture - yearOfBirth;
    console.log("You will be " + age + " years old in " + yearFuture)
}

ageify(1992, 2099);


//Excercise 2: dog years

function dogAge(dogYearOfBirth, dogYearFuture, shouldResultInDogYears) {
    let dogYear = dogYearFuture - dogYearOfBirth;
    if (shouldResultInDogYears === false) {     
        console.log("Your dog will be " + dogYear + "human years old in " + dogYearFuture)   
       
    } else {
        dogYear *= 7;
        console.log("Your dog will be " + dogYear + " dog years old in " + dogYearFuture)
    }

}

dogAge(2015, 2025, true);


//Excercise 3: House price stimator
function housePriceStimator( houseWidth, houseDepth, houseHeight, gardenSizeInM2, housePrice) {
    let volumeInMeters =  houseWidth * houseHeight * houseDepth;
    let fairPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if (housePrice === fairPrice) {
        console.log("The house price is fair.")
    } else if (housePrice > fairPrice) {
        console.log("The house price is $" + (housePrice - fairPrice) +  " over market value.");
    } else {
        console.log("The house price is $" + (fairPrice - housePrice) +  " below market value.")
    }
}

housePriceStimator(8, 10, 10, 100, 2500000); //for Peters house
housePriceStimator(5, 11, 8, 70, 1000000); //For Julias house


//Excercise 4: ez-namey
function nameYourCompany(){
    const firstWords = ["Awesome ", "Cool ", "N°1 ", "First ", "Amazing ", "The Best ", "Original ", "Sensational ", "Modern ", "Young "];
    const secondWords =   ["Company", "Inc.", "A.S.", "Corporation", "Corp.", "Solutions", "Worldwide", "Agency", "Enterprises", "Agency"];
    const randomNumber = Math.floor(Math.random() * 10) + 0;
    const otherRandomNumber = Math.floor(Math.random() * 10) + 0;
    const startUpName = firstWords[randomNumber] + secondWords[otherRandomNumber];
    console.log( 'The startup: "' + startUpName + '" cointains ' + startUpName.length + ' characters');
}

nameYourCompany();