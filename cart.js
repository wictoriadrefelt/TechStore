var listOfProducts = [];

function initSite() {
    loadProducts();
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
        secondHeader();
        paymenFooter(); 
    });
}


JSON.stringify(localStorage.getItem(listOfProducts));
cart = localStorage.setItem("cart", listOfProducts.length);

function createHeader(){
    const head = document.getElementsByTagName('header')[0];
    let headerDiv = document.createElement('div')
        headerDiv.classList.add('header')
        head.appendChild(headerDiv)
    
    let titleDiv = document.createElement('a')
        titleDiv.classList.add('techStoreDiv')
        let titleLink = document.createTextNode('TechStore')
        titleDiv.appendChild(titleLink)
        titleDiv.title = 'TechStore';
        titleDiv.href = 'index.html';
        headerDiv.appendChild(titleDiv)
        
        createProduct();
    
        
    function createProduct() {  
    let numberOfProducts = document.createElement('div')
        numberOfProducts.classList.add('numberOfProductsCount')
        numberOfProducts.innerText = "0";
        headerDiv.appendChild(numberOfProducts)
    
    let cartIcon = document.createElement('div')
        cartIcon.classList.add('cartIcon')
        let cartImage = document.createElement('img')
        cartImage.classList.add('cartImage')
        cartImage.src = './images/cart.png'
        cartIcon.appendChild(cartImage)
        headerDiv.appendChild(cartImage)
    }
    }

function secondHeader (){
    const h2 = document.getElementsByTagName("h2")[0];
    let secondHeader = document.createElement("div");
    secondHeader.classList.add("div");
    secondHeader.innerText =  "Shopping Cart";
    let img = document.createElement("img");
    img.src = "./images/cart.png" ;
    h2.append(img, secondHeader)
};

// Access items from cart
function getItems() {
    const main = document.getElementsByTagName("main")[0];

    cart.forEach((cartItem) => {
        let cartPage = document.createElement("div");
        cartPage.classList.add("cartDiv");
        main.append(cartPage);

        let imgDiv = document.createElement("div");
        imgDiv.classList.add("cartImgDiv");
        let img = document.createElement("img");
        img.src = "./images/" + cartItem.product.image;
        imgDiv.append(img);
        cartPage.appendChild(imgDiv);

        let titleContainer = document.createElement("div");
        titleContainer.classList.add("titleContainer");
        let title = document.createElement("title");
        titleContainer.innerText = cartItem.product.title;
        titleContainer.append(title);
        cartPage.appendChild(titleContainer);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add("pricediv");
        let price = document.createElement("price");
        priceDiv.innerText = cartItem.product.price + " kr";
        priceDiv.append(price);
        cartPage.appendChild(priceDiv);

        let delContainer = document.createElement("div");
        delContainer.classList.add("deldiv");
        let removebutton = document.createElement("button");
        removebutton.classList.add("delBtnDiv")
        removebutton.innerText= `Remove`
        delContainer.append(removebutton)
        cartPage.appendChild(delContainer);

        main.append(cartPage);
    });
}

function paymenFooter (){
    const h3 = document.querySelector("h3");
    let totalPayment= document.createElement("h3");
    totalPayment.classList.add("paymentDiv");
    totalPayment.innerHTML =`
    <div>Total price:31975 kr</div>
    <div><button> Finish your payment </button></div>`;
    h3.append(totalPayment)
};