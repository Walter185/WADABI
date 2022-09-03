
var products = [
    {
        imgSrc: 'imagenes/wadabi.png',
        name: "hombre",
        price: "10",
        category: "hombre",
    },
    {
        imgSrc: "imagenes/wadabi.png",
        name: "mujer",
        price: "50",
        category: "mujer",
    },
    {
        imgSrc: 'imagenes/wadabi.png',
        name: "kid",
        price: "100",
        category: "kids",

    },
    {
        imgSrc: "imagenes/wadabi.png",
        name: "mujer",
        price: "1000",
        category: "mujer",
    },
];

var dispProducts = [...products];
// 1- function that shows all products
function filterAll() {
  document.getElementById("displayCard").innerHTML = "";
  dispProducts = [...products];
  displayProducts();
}
// 2- function that shows only mobile products
function filterHom() {
  document.getElementById("displayCard").innerHTML = "";
  dispProducts = products.filter((item) => item.category === "hombre");
  displayProducts();
}
// 3- function that shows only camera products
function filterMuj() {
  document.getElementById("displayCard").innerHTML = "";
  dispProducts = products.filter((item) => item.category === "mujer");
  displayProducts();
}
// 4- function that shows only laptop products
function filterKids() {
  document.getElementById("displayCard").innerHTML = "";
  dispProducts = products.filter((item) => item.category === "kids");
  displayProducts();
}

//create a function to display products.
function displayProducts() {
  var cardsContainers = document.getElementById("displayCard");
  for (var i = 0; i < dispProducts.length; i++) {
    var src = dispProducts[i].imgSrc;
    var title = dispProducts[i].name;
    var price = dispProducts[i].price;
    //main card div
    var card = document.createElement("div");
    card.setAttribute("class", "card item");
    card.setAttribute("style", "width: 15rem");
    //two elements inside main card element
    var img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("class", "card-img-top");
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    //card body has three elements
    var cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.innerText = title;
    var cardDesc = document.createElement("p");
    cardDesc.setAttribute("class", "card-text");
    cardDesc.innerText = price;
    var cardBtn = document.createElement("a");
    cardBtn.setAttribute("class", "btn btn-primary");
    cardBtn.setAttribute("onclick", "addToCart()");
    cardBtn.innerText = "Add to the cart";
    //inserting elements in card div
    cardBody.append(cardTitle, cardDesc, cardBtn);
    card.append(img, cardBody);
    cardsContainers.appendChild(card);
  }
  var cardArray = document.getElementsByClassName("card");
  for (var i = 0; i < cardArray.length; i++) {
    cardArray[i].style.backgroundColor = "#f2f2f2";
  }
}

displayProducts();

//Add prodcut to the cart
var cartQuantity = 0;
function addToCart() {
  cartQuantity++;
  document.getElementById("cartQuant").innerText = cartQuantity;
}
