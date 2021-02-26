console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    let productsList = document.querySelector("main ul");

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
