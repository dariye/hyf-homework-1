function dogAge(dogYearOfBirth, dogYearFuture, shouldResultInDogYears) {
    let dogYear = dogYearOfBirth - dogYearFuture;
    if (shouldResultInDogYears === false) {        
        var humanOrDog = " human years old in "
    } else {
        dogYear *= 7;
        var humanOrDog = " dog years old in "
    }

    return "Your dog will be " + dogYear + humanOrDog + dogYearFuture;

}

dogAge(2015, 2025, true);


