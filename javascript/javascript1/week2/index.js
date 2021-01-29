function getFullName(firstname, surname, useFormalName = false) {
    if (firstname === "" || surname === "") {
        alert("Please complete the required fields(missing firstname and/or surname)")
    }
    if (useFormalName === true) {
        return "Lord " + firstname + " " + surname
    } else {
        return firstname + " " + surname;
    }
}
let fullname1 = "Wenceslao";
let fullname2 = "Posse";

console.log(getFullName(fullname1, fullname2, true));

//for a woman I could add a boolean as an extra parameter so it add the prefix Lord or Lady depending on its value(in both cases assuming that "useFormalName" is true)



//Excercise 2

function getEventWeekday(daysUntilTheEvent) {
    let todaysDate = new Date();
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let index = (todaysDate.getDay() + daysUntilTheEvent) % 7;

    return weekDays[index];

}

console.log(getEventWeekday(9));


//Excercise 3
function clothesToWear(tempInCelsius) {
    if (tempInCelsius <= 10) {
        return "Wear a jacket!"
    } else if (tempInCelsius > 10 && tempInCelsius <= 20) {
        return "Take a sweater with you!"
    } else if (tempInCelsius > 20 && tempInCelsius <= 35) {
        return "You can go out in a T-shirt and shorts!"
    } else {
        return "Go naked!"
    }
}

let functionWithTemper = clothesToWear(18);
console.log(functionWithTemp);


//Excercise 4

var class07Students = [];
function addStudentToClass(studentName) {
    if(class07Students.includes(studentName) === true){
        alert("Student " + studentName + " is already in the class")
    }else if(class07Students.includes(studentName) === false && studentName !== "" && class07Students.length<6  || studentName === "Queen Margrethe II of Denmark"){
        class07Students.push(studentName);
        alert("Student " + studentName + " succesfully added to class 07")
    }else if(class07Students.length>=6) {
        alert("Cannot add more students to class 07")
    }
}


function getNumberOfStudents() {
    return "There is " + class07Students.length  +" students on this class";

}


//Excercise 5




