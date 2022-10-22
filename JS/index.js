
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
	//  BASE DE DATOS DE PRODUCTOS  
	if (localStorage.getItem('listaProducto') == null)
	 {
		var tablaProducto =
		[
		new Producto('Zapatilla Nike NRA',25000,61,"Zapatilla Nike NRA"),
		new Producto('Zapatilla Nike B',23500,62,"Zapatilla Nike B"),
		new Producto('Zapatilla Nike Runing N',24900,63,"Zapatilla Nike Runing"),
		new Producto('Zapatilla Nike Tennis B',21700,64,"Zapatilla Nike Tennis"),
		new Producto('Zapatilla Cuero B',20450,65,"Zapatilla Cuero"),
		new Producto('Campera Nike BA',35000,65,"Campera Nike BA"),
		new Producto('Remera Negra',2500,65,"Remera Negra"),
		new Producto('Campera Amarilla',32000,65,"Campera Amarilla"),
		new Producto('Short Marron',9000,65,"Short Marron"),
		];
	}else var tablaProducto = JSON.parse(localStorage.getItem('listaProducto'));

	// FICHA DE PRODUCTO
		for (var i = 0; i < tablaProducto.length; i++) {
			tablaProducto[i].partialViewCatalogue = `<div id="tarjeta">
						<div class="productos">
						  <img class="card-img-top" src="${tablaProducto[i].image}" alt="Card image cap" width="250px">
						   <div class="overlay">
   							 <div class="text">${tablaProducto[i].description}</div>
 						   </div>
						  <div class="card-body">
							 
						  <h5 class="card-title">${tablaProducto[i].name}</h5>
							    <p class="mb-0">id#: ${tablaProducto[i].id}</p> 
							    <p class="mt-0">Precio: $ ${tablaProducto[i].basicPrice.toFixed(2)}</p>
							  <span class="span">Cantidad:</span> 
							  <input class="inputNumber" type="number" value="0" id="innum">
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


// JavaScript code buscador de producto
function buscar_producto() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('productos');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
/*-------------fin del buscador----------------*/

/*---footer---*/
var cad=`
<section>    
        <div id="containerFooter">
            
            <div class="webFooter">
                <h3> redes sociales </h3>
                <p><i class="fa-brands fa-twitter"></i> twitter </p>
                <p><i class="fa-brands fa-instagram"></i> instagram </p>
                <p><i class="fa-brands fa-square-facebook"></i> facebook </p>
                <p><i class="fa-solid fa-envelope"></i> e-mail </p>
            </div>
            <div class="webFooter">
                <h3> Links de ayuda </h3>
                <p><a href="index.html">Inicio</a></p>
                <p><a href="about.html">Acerca de Wadabi</a></p>
                <p><a href="mailto:info@wadabi.com"> contact </p>
            </div>
            <div class="webFooter">
                <h3>partners </h3>
                <p>zara </p>
                <p>pantaloons </p>
                <p>levis </p>
                <p>ucb </p>
                <p>+ many more </p>
            </div>
            <div class="webFooter">
                <h3> sucursales </h3>
                <p><a href="sucursales.html">Almagro</a></p>
                <p><a href="sucursales.html">Villa Soldati</a></p>
                <p><a href="sucursales.html">Microcentro</a></p>
            </div>
        </div>
        <div id="credit">© Todos los derechos reservados &nbsp&nbsp&nbsp | &nbsp&nbsp&nbsp <a href="index.html"> WADABI </a></div>
    </section>
`
document.getElementById("idfooter").innerHTML=cad;



var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(res => res.json())
    .then(data => {
        console.log(data.blue)
        contenido.innerHTML=`
        <p id="blue">Dolar: ${data.blue.value_avg} Euro: ${data.blue_euro.value_avg}</p>
        `
    })
}