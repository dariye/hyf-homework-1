//freecodecamp user name : https://www.freecodecamp.org/wencho  
//excercise 1
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function removeMatch(array, itemToRemove) {
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] === itemToRemove) {
            array.splice(i, 1);
        }
    }

}

removeMatch(names, nameToRemove);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']




//Excercise 2

function timeToDestination(info) {
    let hours = Math.floor(info.destinationDistance / info.speed);
    let minutes = Math.floor(60 * (info.destinationDistance / info.speed - hours));
    return hours + " hours and " + minutes + " minutes";
}


const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = timeToDestination(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes




//Excercise 3


const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "Mr. Robot",
        days: 1,
        hours: 8,
        minutes: 15,
    },
    {
        title: "Friends",
        days: 4,
        hours: 2,
        minutes: 20,
    },
    {
        title: "How I met your mother",
        days: 3,
        hours: 4,
        minutes: 16,
    },
    {
        title: "Dark",  
        days: 0,
        hours: 22,
        minutes: 58,
    },
    {
        title: "Breaking bad",
        days: 1,
        hours: 22,
        minutes: 30,
    },
];


function logOutSeriesText(seriesList, lifeSpanInYears) {
    let percentageArray = [];
    let lifeSpanInMinutes = lifeSpanInYears * 365 * 24 * 60;
    for (let i = 0; i < seriesList.length; i++) {
        let lengthInMinutes = seriesList[i].days * 24 * 60 + seriesList[i].hours * 60 + seriesList[i].minutes;
        let percentage = lengthInMinutes / lifeSpanInMinutes * 100;
        percentageArray.push(percentage);
        console.log(seriesDurations[i].title + " took " + percentage.toFixed(3) + " of my life");
    }
    let totalPercentage = 0;
    for (let j = 0; j < percentageArray.length; j++) {
        totalPercentage += percentageArray[j];
    }
    console.log("In total that is " + totalPercentage.toFixed(2) + " of my life")


}

logOutSeriesText(seriesDurations, 28); //I used my age here


//Step 3: Smart-ease - Back to the basics!

const notes = [];
function saveNote(content, id){
    notes.push({"content": content, "id": id,});
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
   for(let i = 0; i<notes.length; i++){
    if(notes[i].id === id){
        return notes[i];
    }
   }
  }
  
  const firstNote = getNote(1);
  console.log(firstNote); 


  function logOutNotesFormatted() {
    for(let i = 0; i<notes.length; i++){
        console.log("The note with id: " + notes[i].id + ", has the following note text: " + notes[i].content);
    }
  }
  
  logOutNotesFormatted(); // should log out the text below
  
  // The note with id: 1, has the following note text: Pick up groceries
  // The note with id: 2, has the following note text: Do laundry


//Smart phone usage app 
const activities = [];
function addActivity(activity, durationInMinutes){
    let today = new Date();
    if(typeof  durationInMinutes!== 'number'){
        console.log("Invalid data: please provide a number in 'durationInMinutes' field ");
    } else if(typeof activity !== 'string'){
        console.log("Invalida data:  please provide a string in 'activity' field");
    }else{
    activities.push({date: today, activity: activity, duration: durationInMinutes});
}
}


  addActivity("Youtube", 30);
  addActivity();
  console.log(activities);

  function showStatus(act){
      let durationAdded = 0;
      if(act.length !== 0){
        for(let i = 0; i<act.length; i++){
            durationAdded += act[i].duration;
        }
        console.log("You have added " + act.length + " activities. They amount " + durationAdded + " minutes of usage.")

         
      } else{
 console.log("Add some activities before calling showStatus")
      }
  }

  showStatus(activities);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/
