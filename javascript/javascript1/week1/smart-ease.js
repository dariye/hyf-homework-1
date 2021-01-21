//Excercise 1: ageify
function ageify(yearOfBirth, yearFuture) {
    let age = yearFuture - yearOfBirth;
    return "You will be " + age + " years old in " + yearFuture;
}

ageify(1992, 2099);


//Excercise 2: dog years

function dogAge(dogYearOfBirth, dogYearFuture, shouldResultInDogYears) {
    let dogYear = dogYearFuture - dogYearOfBirth;
    if (shouldResultInDogYears === false) {        
        var humanOrDog = " human years old in "
    } else {
        dogYear *= 7;
        var humanOrDog = " dog years old in "
    }

    return "Your dog will be " + dogYear + humanOrDog + dogYearFuture;

}

dogAge(2015, 2025, true);


//Excercise 3: House price stimator
function housePriceStimator( houseWidth, houseDepth, houseHeight, gardenSizeInM2, housePrice) {
    var volumeInMeters =  houseWidth * houseHeight * houseDepth;
    var fairPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if (housePrice === fairPrice) {
        return "The house price is fair."
    } else if (housePrice > fairPrice) {
        return "The house price is $" + (housePrice - fairPrice) +  " over market value.";
    } else {
        return "The house price is $" + (fairPrice - housePrice) +  " below market value."
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
    return 'The startup: "' + startUpName + '" cointains ' + startUpName.length + ' characters';
}