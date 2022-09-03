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


if (document.getElementById("idtabla")) {
  cad=`
  <p> Producto <p>
  <table>
      <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Imagen</thd>
      </tr>
  `
  for (var i=0; i < data.length ; i++){
    cad+=`
      <tr>
        <td>${data[i].nombre}</td>
        <td>${data[i].descripcion}</td>
        <td><img src="${data[i].imagen}"></td>
      </tr>
    `
  }
  cad+=`
  </table>
  `
  document.getElementById("idtabla").innerHTML=cad;
}