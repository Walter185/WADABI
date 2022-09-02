(function ($) {
  $(function () {
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  });
})(jQuery);

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