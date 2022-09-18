function crearFinDeLista(subTotal,tax){
	finDeLista = `  
	<div class="list-group-item d-flex justify-content-between bg-light">
						  <div class="text-success">
							<h6 class="my-0">Impuesto</h6>
							<small>21% IVA</small>
						  
						  <span>$${(subTotal*0.21).toFixed(2)}</span>
						
						 <div class="list-group-item d-flex justify-content-between bg-light">
						  <div class="text-success">
							<h6 class="my-0">SubTotal</h6>
						  
						  <span class="text-success">$${subTotal.toFixed(2)}</span>
						
						<div class="list-group-item d-flex justify-content-between">
						  <span>Total (AR$)</span>
						  <strong>$${(subTotal + tax).toFixed(2)}</strong>
						  </div></div></div></div>`
	}
	
	function crearFacturaProducto(){
		total = 0;
		tax = 0;
		$('#myList').empty();
		for (var i = tabla.length - 1; i >= 0; i--) {
			if (tabla[i].qty > 0) {
				tabla[i].partialViewBill = `
				<div class="list-group-item d-flex justify-content-between bg-light">
				<span class="my-0">Producto: ${tabla[i].name}</span>
					<br>
			  <span class="text-muted">Precio sin IVA: $${(tabla[i].basicPrice * tabla[i].qty).toFixed(2)}</span>
			</div>`
			$('#myList').append(tabla[i].partialViewBill);
			total += tabla[i].qty * tabla[i].basicPrice.toFixed(2);
			}
		}
		tax = total * 0.21;
		crearFinDeLista(total,tax)
		$('#myList').append(finDeLista);
	}	
	
	function EventListenerEraseStorage(){
		$('#btnClear').click(function(){
			if (typeof(Storage) !== 'undefined'){
				localStorage.clear();
			}
			else {
				console.log('Lamentable su navegador no es compatible con la pagina');
			}
		})
	}
	function crearFecha(){
		var d = new Date();
		var dy = d.getFullYear();
		var dmo = d.getMonth();
		var dday = d.getDay();
		var ddate = d.getDate();
		var dh = d.getHours();
		var dmi = d.getMinutes();
		var ds = d.getSeconds();
		

		var mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo','junio', 'julio', 'agosto', 'septiembre','octubre', 'noviembre', 'diciembre'];
		
		var dia = ['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado'];
	
		 $('#myDate').text("Fecha: " +dia[dday]+ " , "+ddate+ " de " + mes[dmo] + " " +dy);
		 console.log(ddate)
	}
	
	function functionCheckout(){
		crearFecha();
		if (localStorage.getItem('listaProducto') != null){
			EventListenerEraseStorage();
			tabla = JSON.parse(localStorage.getItem('listaProducto'));
			crearFacturaProducto();
		}
	}
	
	window.onload = functionCheckout();

	