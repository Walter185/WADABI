function crearFinDeLista(subTotal,tax){
	finDeLista = `  <li class="list-group-item d-flex justify-content-between bg-light">
						  <div class="text-success">
							<h6 class="my-0">Impuesto</h6>
							<small>IVA</small>
						  </div>
						  <span class="text-success">$${(subTotal*0.21).toFixed(2)}</span>
						</li>
						 <li class="list-group-item d-flex justify-content-between bg-light">
						  <div class="text-success">
							<h6 class="my-0">SubTotal</h6>
						  </div>
						  <span class="text-success">$${subTotal.toFixed(2)}</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
						  <span>Total (AR$)</span>
						  <strong>$${(subTotal + tax).toFixed(2)}</strong>
						</li>`
	}
	
	function crearFacturaProducto(){
		total = 0;
		tax = 0;
		$('#myList').empty();
		for (var i = tabla.length - 1; i >= 0; i--) {
			if (tabla[i].qty > 0) {
				tabla[i].partialViewBill = ` <li class="list-group-item d-flex justify-content-between lh-condensed">
							  <div>
								<h6 class="my-0">${tabla[i].name}</h6>
								<small class="text-muted">${tabla[i].description}</small>
							  </div>
							  <span class="text-muted">$${(tabla[i].basicPrice * tabla[i].qty).toFixed(2)}</span>
							</li>`
	
			$('#yList').append(tabla[i].partialViewBill);
			total += tabla[i].qty * tabla[i].basicPrice.toFixed(2);
			}
		}
		tax = total * 0.21;
		crearFinDeLista(total,tax)
		$('#myList').append(finDeLista);
	}	
	
	function EventListenerEraseStorage(){
		$('#boutonClear').click(function(){
			if (typeof(Storage) !== 'undefined'){
				localStorage.clear();
			}
			else {
				console.log('Lamentable su navegador no es compatible con la pagina');
			}
		})
	}
	function creerLaDate(){
		/*var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var year = d.getFullYear();
		var jour = ['dima']*/
		var d = new Date();
				
		//On récupère les informatoins relatives à notre date
		var dy = d.getFullYear();
		var dmo = d.getMonth();
		var dday = d.getDay();
		var ddate = d.getDate();
		var dh = d.getHours();
		var dmi = d.getMinutes();
		var ds = d.getSeconds();
		
		/*On se rappelle que le premier élément d'un tableau
		 *possède l'indice 0*/
		var mois = ['enero', 'febrero', 'marzo', 'abril', 'mayo','junio', 'julio', 'agosto', 'septiembre','octubre', 'noviembre', 'diciembre'];
		
		var jour = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado'];
	
		 $('#maDate').text("Fecha: " +jour[dday]+ " , "+ddate+ " de " + mois[dmo] + " " +dy);
		 console.log(ddate)
	}
	
	function functionCheckout(){
		creerLaDate();
		if (localStorage.getItem('listaProducto') != null){
			EventListenerEraseStorage();
			tabla = JSON.parse(localStorage.getItem('listaProducto'));
			crearFacturaProducto();
		}
	}
	
	window.onload = functionCheckout();