console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
let productsList = document.querySelector("main ul");
function renderProducts(products) {
        products.forEach(element => {
        let items = document.createElement("li");
        let itemName = document.createElement("h3");
        let price = document.createElement("p");
        let rating = document.createElement("p");
        itemName.innerHTML = element.name;
        price.innerHTML = `Price: ${element.price}`;
        rating.innerHTML = `Rating: ${element.rating}`;
        items.append(itemName, price, rating);
        productsList.append(items);
    });
}

renderProducts(products);


//Search by name
let searchInput = document.getElementById("search-filter");

searchInput.addEventListener("keyup", searching);
let filteredProductsByName;
function searching(){
    let searchValue = searchInput.value;
    productsList.innerHTML = "";
    filteredProductsByName = products.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    renderProducts(filteredProductsByName);
}

//Search by max price
let maxPriceInput = document.getElementById("max-price-filter");
let filteredProductsByMaxPrice;
maxPriceInput.addEventListener("keyup", maxPriceFilter)
function maxPriceFilter(){
    let maxPriceValue = maxPriceInput.value;
    productsList.innerHTML = "";
    filteredProductsByMaxPrice = filteredProductsByName ? filteredProductsByName.filter(item => item.price < maxPriceValue) : products.filter(item => item.price < maxPriceValue);
    renderProducts(filteredProductsByMaxPrice);
 
}

//Sort
let sortSelector = document.getElementById("dropdown");
sortSelector.addEventListener("change", sortBy);




function sortBy(){
    productsList.innerHTML = "";
    let index = sortSelector.selectedIndex;
    let sortedProducts;
    console.log(index);
    if(index===1){
        sortedProducts =  products.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    if(index===2){
        sortedProducts = products.sort((a,b)=> a.rating > b.rating ? -1 : 1);
    }
    if(index===3){
        sortedProducts = products.sort((a, b) => a.price > b.price ? 1 : -1);
    }
    if(index===4){
        sortedProducts = products.sort((a, b) => a.price > b.price ? -1 : 1);
    }
    renderProducts(sortedProducts);

}

