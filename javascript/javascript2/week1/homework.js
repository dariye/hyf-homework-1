//Find the shortest word
function shortestWordFinder(listOfWords){
    let lengthArray =  listOfWords.map(x => x.length);
    let shortestLength = Math.min.apply(Math, lengthArray);
    let shortestWordIndex = lengthArray.indexOf(shortestLength);
    let shortestWord = listOfWords[shortestWordIndex];
    return shortestWord;
}

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(shortestWordFinder(danishWords));


//Find and count danish letters
function countDanishLetters(str){
    let count = {total: 0, };
    for(i = 0; i<str.length; i++){        
        switch(str[i]){
        case "å":
            count.total++;
            count.å ? count.å++ : count.å = 1;
            break;
        case "æ":            
            count.total++;
            count.æ ? count.æ++ : count.æ = 1;
            break;
        case "ø":
            count.total++;
            count.ø ? count.ø++ : count.ø = 1;
            break;        
    }
    
}
}



const danishString = "Jeg har en blå bil";
console.log(countDanishLetters(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(countDanishLetters(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}


const spiritAnimals = ["The Happy Fox", "The Sad Bear", "The Wise Ant", "The Sitting Bull", "The Clever Wolf", "The Joyful Cougar", "The Sleepy Zebra", "The Crazy Lion", "The Mighty Tiger", "The Coward Cat"];

let div = document.getElementById("input-container");
let inputBox = document.getElementById("name");
let button = document.getElementById("convert-btn");
let printingArea = document.getElementById("printing-area");
let spiritAnimalContainer = document.getElementById("spirit-animal-container");
let newButton = document.createElement("button");
newButton.innerHTML = "I don´t like this name";
newButton.style.display = "block";
newButton.style.margin = "auto";


function getSpiritAnimal(){
    if(inputBox.value){
        let randomIndex = Math.floor(Math.random() * 10);
        printingArea.innerHTML = inputBox.value + " - " + spiritAnimals[randomIndex];
        spiritAnimalContainer.append(newButton);
        }else{
        alert("Please write your name first.")
        }
}    

button.addEventListener("click", getSpiritAnimal);

function newSpiritAnimal(){
    if(inputBox.value){
        let newRandomIndex = Math.floor(Math.random() * 10);
        printingArea.innerHTML = inputBox.value + " - " + spiritAnimals[newRandomIndex];
        }else{
        alert("Please write your name first.")
        }

}

newButton.addEventListener("click", newSpiritAnimal);
