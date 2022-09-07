var links = document.getElementById("links");
var categoriesList = document.getElementById("categories");

function burgerClicked(event) {
    links.classList.toggle("hide");
}

function mouseInLinks(event) {
    categories.classList.add('active');
}

function mouseOutLinks(event) {
    categories.classList.remove('active')
}
window.onload= function(){

			
	class Producto{
		constructor(name, basicPrice,id,description){
			this.name = name;
			this.image = 'imagenes/' + this.name+'.jpg';
			this.basicPrice = basicPrice;
			this.qty = 0;
			this.id = "00"+id;
			this.description = description;
			this.partialViewDescription = '';
			this.partialViewCatalogue = '';
			this.partialViewBill = '';
			this.bill = '';
		}
	}
	//  PRODUCTOS  
	if (localStorage.getItem('listaProducto') == null)
	 {
		var tablaProducto =
		[
		new Producto('zapa1',150.50,61,"Zapa1"),
		new Producto('zapas2',260.50,62,"Zapa2"),
		new Producto('zapas3',170.50,63,"Zapa3"),
		new Producto('zapas4',580.50,64,"Zapa4"),
		new Producto('zapas5',390.50,65,"Zapa5"),
		];
	}else var tablaProducto = JSON.parse(localStorage.getItem('listaProducto'));

	// FICHA DE PRODUCTO
		for (var i = 0; i < tablaProducto.length; i++) {
			tablaProducto[i].partialViewCatalogue = `<div id="tarjeta">
						<div class="card">
						  <img class="card-img-top" src="${tablaProducto[i].image}" alt="Card image cap" width="250px">
						   <div class="overlay">
   							 <div class="text">${tablaProducto[i].description}</div>
 						   </div>
						  <div class="card-body">
							  <h5 class="card-title">${tablaProducto[i].name}</h5>
							    <p class="mb-0">id#: ${tablaProducto[i].id}</p> 
							    <p class="mt-0">prix: ${tablaProducto[i].basicPrice.toFixed(2)}$</p>
							  <span class="span">Cantidad:</span> 
							  <input class="inputNumber" type="number" value="0">
							 <button id="premier" class="btn btn-primary">Carrito</button>
						  </div>
						</div>
					</div>`
					$('#myCatalogue').append(tablaProducto[i].partialViewCatalogue);
		}

	var quantite = 0;

	$('.btn-primary').each(function(){
		$(this).click(function(){
			console.log($(this).parent().children('.card-title').text());
			console.log($(this).parent().children('.inputNumber').val());

			if ($(this).parent().children('.inputNumber').val() > 0) {
				quantite = $(this).parent().children('.inputNumber').val();
				updateQuantite($(this));
			}

		
		});
	});
      
	function updateQuantite(button){
		for (var i = 0; i < tablaProducto.length; i++) {
			if(tablaProducto[i].name ==  button.parent().children('.card-title').text()){
				tablaProducto[i].qty += parseInt(quantite);

				console.log('El monto total es: ' + tablaProducto[i].qty * tablaProducto[i].basicPrice);
				console.log('El valor por producto es: ' + tablaProducto[i].basicPrice);
				console.log('La cantidad total de productos son: ' + tablaProducto[i].qty);
			}
		}
			quantite = 0;
			button.parent().children('.inputNumber').val('0');
			copiaListaProducto();
	}

	//
	$('.inputNumber').each(function(){
		$(this).keyup(function(){

		 	if (!(isNaN(parseInt($(this).val())))) {						

			 	if (parseInt($(this).val()) < 0) {$(this).val('0')}
		 	}
		 })
	});

	$('.inputNumber').each(function(){
		$(this).change(function(){

		 	if (!(isNaN(parseInt($(this).val())))) {						

			 	if (parseInt($(this).val()) < 0) {$(this).val('0')}
		 	}
		 })
	});

	function copiaListaProducto(listaProducto){
		if (typeof(Storage) !== 'undefined'){
			localStorage.clear();
			localStorage.setItem('listaProducto',JSON.stringify(tablaProducto));
			
		}
		else {
			console.log('Lamentablemente su navegador no soporta esta pagina...');
		}
	}
}

var heros = document.getElementsByClassName('overlay-container');
var overlays = document.getElementsByClassName('my-overlay');
var bigImgContainer = document.getElementById('img16-4p5-container');
var heroSectionRoot = document.getElementById("heroSection"); 
var bigImg = bigImgContainer.childNodes[0];
var bigHeroTextHolder = bigImgContainer.childNodes[1].childNodes[0];
var titleHeroTextHolder1 = overlays[0].childNodes[0];
var titleHeroTextHolder2 = overlays[1].childNodes[0];
var titleHeroTextHolder3 = overlays[2].childNodes[0];
var titleHeroTextHolder4 = overlays[3].childNodes[0];
var img1 = "./imagenes/foto2.jpg";
var img2 = "./imagenes/foto2.jpg";
var img3 = "./imagenes/foto2.jpg";
var img4 = "./imagenes/foto2.jpg";
var text1 = "foto1";
var text2 = "foto2";
var text3 = "foto3";
var text4 = "foto4";
var title1 = "General";
var title2 = "Clothes";
var title3 = "Consumables";
var title4 = "Services";


function activate(index) {
    if (index === 1) {
        heros[0].classList.add('active');
        heros[1].classList.remove('active');
        heros[2].classList.remove('active');
        heros[3].classList.remove('active');

    } else if (index === 2) {
        heros[0].classList.remove('active');
        heros[1].classList.add('active');
        heros[2].classList.remove('active');
        heros[3].classList.remove('active');

    } else if (index === 3) {
        heros[0].classList.remove('active');
        heros[1].classList.remove('active');
        heros[2].classList.add('active');
        heros[3].classList.remove('active');

    } else if (index === 4) {
        heros[0].classList.remove('active');
        heros[1].classList.remove('active');
        heros[2].classList.remove('active');
        heros[3].classList.add('active');

    }
}

function mouseInHero() {
    if (this.classList.contains("hero-container1")) {
        bigImg.src = img1;
        bigHeroTextHolder.textContent = text1;
        activate(1);
    } else if (this.classList.contains("hero-container2")) {
        bigImg.src = img2;
        bigHeroTextHolder.textContent = text2;
        activate(2);
    } else if (this.classList.contains("hero-container3")) {
        bigImg.src = img3;
        bigHeroTextHolder.textContent = text3;
        activate(3);
    } else if (this.classList.contains("hero-container4")) {
        bigImg.src = img4;
        bigHeroTextHolder.textContent = text4;
        activate(4);
    }
}

