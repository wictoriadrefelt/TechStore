function initSite() {
    loadProducts();
    //displayCartAmount();
    // This would also be a good place to initialize other parts of the UI
}

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        createHeader();
        addProductsToWebpage();
    });
}

var listOfProducts = [];
listOfProducts.push("array.quantity");

function createHeader(){
const head = document.getElementsByTagName('header')[0];
let headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    head.appendChild(headerDiv)

let titleDiv = document.createElement('a')
    titleDiv.classList.add('techStoreDiv')
    titleDiv.innerText = 'TechStore';
    titleDiv.href = 'index.html';
    headerDiv.appendChild(titleDiv)
    
let numberOfProducts = document.createElement('div');
    numberOfProducts.classList.add('numberOfProductsCount');
    numberOfProducts.setAttribute("id", "result");
    numberOfProducts.innerText = "0";  
    headerDiv.append(numberOfProducts);

let cartIcon = document.createElement('div');
    cartIcon.classList.add('cartIcon');
    let cartImage = document.createElement('img');
    cartImage.classList.add('cartImage');
    cartImage.src = './images/cart.png';
    cartIcon.append(cartImage);
    headerDiv.appendChild(cartIcon);     
    
    cartImage.addEventListener("click", function (){
        document.location.href = "shoppingCart.html";
    })
    
}



/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    const main = document.getElementsByTagName("main")[0];
    listOfProducts.forEach((product) => {
        let productCard = document.createElement("div");
        productCard.classList.add("carddiv")
        // Representing the title of a productCard

        let headerContainer = document.createElement("div");
        headerContainer.classList.add("titlediv");
        let header = document.createElement("h2");
        header.innerText = product.title;
        headerContainer.append(header);
        productCard.appendChild(headerContainer);
        
        // Representing the description of a productCard

        let descriptionContainer = document.createElement("div");
        descriptionContainer.classList.add("desdiv");
        let paragrahOne = document.createElement("p");
        paragrahOne.innerText = product.description;
        descriptionContainer.append(paragrahOne);
        productCard.appendChild(descriptionContainer);

        // Representing the image of a productCard

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgdiv");
        let img = document.createElement("img");
        img.src = "./images/" + product.image;
        imgContainer.append(img);
        productCard.appendChild(imgContainer);

       // Representing the price of a productCard
        let priceContainer = document.createElement("div");
        priceContainer.classList.add("pricediv");
        let  paragrahTwo= document.createElement("p2");
        paragrahTwo.innerText = product.price+" kr";
        priceContainer.append(paragrahTwo);
        productCard.appendChild(priceContainer);

        // Representing the btnContainer of a productCard 
        let btnContainer = document.createElement("div");
        let paragraphThree=document.createElement("button");
        paragraphThree.classList.add("btndiv");
        paragraphThree.setAttribute("id", "buttonATC");
        let cartPic = document.createElement('img');
        cartPic.classList.add('cartImageInMain');
        cartPic.src = './images/cart-arrow.png' 
        let addToCartText = document.createElement("text");
        addToCartText.classList.add('text');
        addToCartText.innerText =`Add to cart`;
        paragraphThree.append(cartPic, addToCartText);
        btnContainer.append(paragraphThree);
        productCard.appendChild(btnContainer);
        paragraphThree.onclick = myFunction
        main.append(productCard);
  })
  
};

var cart = JSON.stringify(listOfProducts);
localStorage.length(cart)

console.log(cart)


function myFunction(e){ 
    e.preventDefault();
    if (localStorage.cart){
        localStorage.cart= Number(localStorage.cart)+1;
    } else {
        localStorage.cart=1;
    }
    
    document.getElementById("result").innerHTML = localStorage.cart;
}
 


