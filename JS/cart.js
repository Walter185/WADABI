function crearDescriptionProduct(){
	data = JSON.parse(localStorage.getItem('listaProducto'));
	total = 0;
	$('#myCart').empty();
	for (var i = data.length - 1; i >= 0; i--) {
		data[i].partialViewDescription = `<tr id="pedido">
							<td class="premier" data-th="Producto">
								<div class="row">
									<div>
										<img src="${data[i].image}" alt="..." />
									</div>
									<div class="nombre">
										<h4 class="desc">${data[i].name}</h4>
										<p>${data[i].description}</p>
									</div>
								</div>
							</td>
							<td data-th="Precio">${data[i].basicPrice.toFixed(2)}$</td>
							<td data-th="Cantidad">
								<p >${data[i].qty}</p>
							</td>
							<td data-th="Subtotal" class="text-center">${(data[i].qty * data[i].basicPrice).toFixed(2)}</td>
							<td><button class="precuenta" id="quitar">Quitar</button></td>
						</tr>`
		if (data[i].qty > 0) {
			//console.log('El nombre: ' + data[i].name + '\nla cantidad: ' + data[i].qty + '\nel precio de base: ' + data[i].basicPrice + '\nel precio: ' + data[i].qty * data[i].basicPrice);
			$('#myCart').append(data[i].partialViewDescription);
			total += data[i].qty * data[i].basicPrice.toFixed(2);
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
	for (var i = data.length - 1; i >= 0; i--) {
			if(data[i].name == name){
				data[i].qty = 0;
				saveStorage();
				crearDescriptionProduct();
				break;
			}
	}
}

function saveStorage(){
	if (typeof(Storage) !== 'undefined'){
		localStorage.clear();
		localStorage.setItem('listaProducto',JSON.stringify(data));
	}
	else {
		console.log('Lamentablemente su navegador no es compatible con la pagina...');
	}
}

function functioncart(){
	if (localStorage.getItem('listaProducto') != null){
		var data = JSON.parse(localStorage.getItem('listaProducto'));
		crearDescriptionProduct();
		console.log('hey')
	}else {
		$('.pagar').attr("disabled",true);
	}
}
window.onload = functioncart();