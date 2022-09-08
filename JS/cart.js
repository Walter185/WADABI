function crearDescriptionProduct(){
	tabla = JSON.parse(localStorage.getItem('listaProducto'));
	total = 0;
	$('#myCart').empty();
	for (var i = tabla.length - 1; i >= 0; i--) {
		tabla[i].partialViewDescription = `<tr id="pedido">
							<td class="premier" data-th="Producto">
								<div class="row">
									<div>
										<img src="${tabla[i].image}" alt="..." />
									</div>
									<div class="nombre">
										<h4 class="desc">${tabla[i].name}</h4>
										<p>${tabla[i].description}</p>
									</div>
								</div>
							</td>
							<td data-th="Precio">${tabla[i].basicPrice.toFixed(2)}$</td>
							<td data-th="Cantidad">
								<p >${tabla[i].qty}</p>
							</td>
							<td data-th="Subtotal" class="text-center">${(tabla[i].qty * tabla[i].basicPrice).toFixed(2)}</td>
							<td><button class="precuenta" id="quitar">Quitar</button></td>
						</tr>`
		if (tabla[i].qty > 0) {
			//console.log('El nombre: ' + tabla[i].name + '\nla cantidad: ' + tabla[i].qty + '\nel precio de base: ' + tabla[i].basicPrice + '\nel precio: ' + tabla[i].qty * tabla[i].basicPrice);
			$('#myCart').append(tabla[i].partialViewDescription);
			total += tabla[i].qty * tabla[i].basicPrice.toFixed(2);
		}
	}
	$('#myTotal').text('Total: '+ total.toFixed(2) + '$');
	if(total > 0){
		$('.pagar').attr("disabled",false);
	}else {
		$('.pagar').attr("disabled",true);
	}
	EventListeners();
}

function EventListeners(){
	$('.precuenta').each(function(){
		$(this).click(function(){
			// 
			console.log($(this).parent().parent().children('.premier').children('.row').children('.nombre').children('.desc').text())
			deleteProduct($(this).parent().parent().children('.premier').children('.row').children('.nombre').children('.desc').text())
		});
	});
}

function deleteProduct(name){
	for (var i = tabla.length - 1; i >= 0; i--) {
			if(tabla[i].name == name){
				tabla[i].qty = 0;
				saveStorage();
				crearDescriptionProduct();
				break;
			}
	}
}

function saveStorage(){
	if (typeof(Storage) !== 'undefined'){
		localStorage.clear();
		localStorage.setItem('listaProducto',JSON.stringify(tabla));
	}
	else {
		console.log('Lamentablemente su navegador no es compatible con la pagina...');
	}
}

function functioncart(){
	if (localStorage.getItem('listaProducto') != null){
		var tabla = JSON.parse(localStorage.getItem('listaProducto'));
		crearDescriptionProduct();
		console.log('hey')
	}else {
		$('.pagar').attr("disabled",true);
	}
}
window.onload = functioncart();