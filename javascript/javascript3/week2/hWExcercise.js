//Movie excercise
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(data => data.json())
    .then(data => {
        let badMovies = data.filter(item => item.rating<4)
        console.log(badMovies)
        return badMovies
    })
    .then(data=>{
        let badMoviesSince2000 = data.filter(item => item.year > 2000)
        console.log(badMoviesSince2000)
        return badMoviesSince2000
    })
;


//Promise that resolves after set time
function resolveLater(resolveAfter){
    return new Promise(resolve => {
        setTimeout(resolve, resolveAfter * 1000)
    })
}

resolveLater(8).then(()=> console.log("I am called asyncronously"));

/* //With async/await
async function resolveLater(resolveAfter){
    try{
        let waitingTime = await setTimeout(()=>{console.log(`Logged after ${resolveAfter} seconds`)}, resolveAfter * 1000);
        return waitingTime;
    } catch{
        console.log("Error!")
    }
}

*/


//Rewrite time
function setTimeoutPromise(ms){
    return new Promise(resolve =>{
        setTimeout(resolve, ms)
    }, )
}

function getCurrentLocation(){
    return new Promise(resolve => {
        let myLocation = navigator.geolocation.getCurrentPosition( pos => `Your current position is ${pos.coords.latitude}, ${pos.coords.longitude}`)
        resolve(myLocation)})
}
        


setTimeoutPromise(3000).then(() => {
    console.log("Called after 3 seconds");
});
  
getCurrentLocation()
    .then((position) => {
      // called when the users position is found
      console.log(position);
    })
    .catch((error) => {
      // called if there was an error getting the users location
      console.log(error);
    })
;

//Fetching and waiting

//As promise
function fetchAndWaitPromise(){
    new Promise(resolve => {
        setTimeout(()=>{
            fetch("https://yesno.wtf/api")
                .then(response => response.json())
                .then(response => console.log(response))}, 3000);
        resolve;
    })
}

fetchAndWaitPromise();

//As async-await
async function fetchAndWait(){
    try{
        const url = "https://yesno.wtf/api";
        const data = await fetch(url)
        setTimeout(() => {             
            console.log(data)                             
        }, 3000);
    } catch(error){
        console.log(error.message)
    } 
}

fetchAndWait();




