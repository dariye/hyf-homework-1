//1
const script = document.querySelector("script");
script.addEventListener("load", function () { setTimeout(function () { console.log("Called after 2.5 seconds") }, 2500) });

//2
function loadedAfterxSeconds(delayInSeconds, stringToLog) {
    setTimeout(function () { console.log(stringToLog) }, delayInSeconds * 1000);
}

loadedAfterxSeconds(3, "This string is logged after 3 seconds");
loadedAfterxSeconds(5, "This string is logged after 5 seconds");

function printClick() { console.log("click"); }//this is only made for testing

//3
const button = document.querySelector("button");
button.addEventListener("click", function () { loadedAfterxSeconds(5, "This string is logged after 5 seconds") });

//4
function earthLogger() {
    console.log("Earth")
}
function saturnLogger() {
    console.log("Saturn")
}

function planetLogFunction(a) {
    a()
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5
const logLocationButton = document.querySelector("button:nth-child(2)");

function geo(position) {
    let locationP = document.createElement("p");
    locationP.innerHTML = `This is is the latitude: ${position.coords.latitude}.<br>This is the longitude: ${position.coords.longitude}`
    document.getElementById("map").append(locationP);
}

logLocationButton.addEventListener("click", function () { navigator.geolocation.getCurrentPosition(geo) });

//6 Map

function createMap() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA_hBjRUElkOWxKf-dLMJPJ-Gc2dhNxv64&callback=initMap';
    script.async = true;

    // Attach your callback function to the `window` object
    window.initMap = function () {
        const myLocation = { lat: navigator.geolocation.getCurrentPosition(pos => pos.coords.latitude), lng: navigator.geolocation.getCurrentPosition(pos => pos.coords.longitude) };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: myLocation,
            // JS API is loaded and available
        })
    }

    // Append the 'script' element to 'head'
    document.head.appendChild(script);
}



//7
function runAfterDelay(delay, callback) {
    setTimeout(function () { callback() }, delay * 1000);
};

runAfterDelay(4, function () {
    console.log("Should be logged after 4 secons")
});

//8
window.addEventListener("dblclick", function () { console.log("double click!") })

//9
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (typeof shouldTellFunnyJoke === "boolean" && typeof logFunnyJoke === "function" && typeof logBadJoke === "function") {
        shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
    } else {
        console.log("Please provide: a boolean for the first parameter and functions for the 2nd and 3rd ones.")
    }
}

//Function as a variable
//1
let functionArray = [function () { console.log("This is the first function in the array") }, function () { console.log("This is the second function in the array") }, function () { console.log("This is the the third function in the array") }]
functionArray.forEach(item => item());
//2
const functionAsConstant = function () { console.log("This is functionAsConstant") }
function normalfunctionDeclaration() {
    console.log("This is normalFunctionDeclaration")
}
functionAsConstant();
normalfunctionDeclaration();

//3
let objectWithFunction = {
    number: 1,
    string: "Hola",
    boolean: true,
    function: function () { console.log("This is a function inside an object") }
}
objectWithFunction.function();


