const searchInput = document.getElementById("search-input")
const numberInput = document.getElementById("nr-gifs")
const submitButton = document.getElementById("submit-btn")
const gifGallery = document.getElementById("gif-gallery")
const apiKey = "a1n9zYFtz6E7kP2CGsuzHPyvjkP75g6O"


function searchGifs(){

    let wordOrPhrase = searchInput.value.trim().toLowerCase();
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${wordOrPhrase}&limit=${numberInput.value}`)
    .then(response => response.json())
    .then(gifs=>{
        if(!wordOrPhrase){
            alert("Please provide with a word or phrase on the search box")
        }else{
            gifGallery.innerHTML = "";
            gifs.data.forEach(element => {
                console.log(element)
                let img = document.createElement("img")
                img.src = element.images.downsized_large.url;                
                gifGallery.append(img);
            });
        }
    })
}

searchInput.addEventListener("search", searchGifs)
numberInput.addEventListener("input", searchGifs)
submitButton.addEventListener("click", searchGifs)