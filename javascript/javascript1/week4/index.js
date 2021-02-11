let yourName = "";
const toDosList = [];
function getReply(command) {
    if (command.includes("Hello my name is") && !yourName) {
        yourName += command.replace("Hello my name is ","");
        return "Nice to meet you " + yourName;
    } else if (command === "Hello my name is Benjamin" && yourName) {
        return "Yeah I know.. Nice to see you again by the way";
    }
    if (command === "What is my name" && !yourName) {
        return "I don´t know, what´s your name?";
    } else if (command === "What is my name" && yourName) {
        return "Your name is " + yourName;
    }
    if (command === "Add fishing to my todo") {
        toDosList.push("Fishing");
        return "Fishing added to my todo"
    }
    if (command === "Add singing in the shower to my todo") {
        toDosList.push("Singing in the shower");
        return "Singing in the shower added to my todo";
    }
    if (command === "Remove fishing from my todo") {
        let fishingIndex = toDosList.indexOf("Fishing");
        if (fishingIndex < 0) {
            return "I couldn´t find 'fishing' in your todo list";
        } else {
            toDosList.splice(fishingIndex, 1);
            return "Removed fishing from my todo";

        }
    }
    if (command === "What is on my todo?") {
        let toDosString = toDosList.join("\n")
        return "You have " + toDosList.length + " on your todos:\n" + toDosString;
    }
    if (command === "What day is it today?") {
        let todaysDate = new Date();
        let options = {
            dateStyle: "long",
        };
        let dateFormated = todaysDate.toLocaleDateString("en-GB", options).replace(" ", ". of ");
        return dateFormated;

    }
    if (/[+/%-*]/.test(command)) {
        let numberString = command.replace(/[A-Za-z?]/gi, "");
        return eval(numberString);
    }
    if (command === "Set a timer for 4 minutes") {
        setTimeout(function () { alert("Timer done"); }, 240000);
        return "Timer set for 4 minutes";
    }
    if (command === "Who is the most beautiful person in this world?") {
        return "You are the most beatiful, " + yourName + ". I am certain!"
    }
}
console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Wencho"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 100 * 3"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Who is the most beautiful person in this world?"));