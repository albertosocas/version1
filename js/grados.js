$(document).ready(function (){
  $.getJSON( "scripts/grados.json", function( data ) {
    var items = [];
    $.each( data, function( id, img, name, description, subject, href) {
      items.push( "<ul class=" + "listaGrados" + ">" );
      items.push( " <div class=" + "fotoinfogrado" + ">" );
      items.push( "   <li class=" + "fotoGrado" + "><a><img class=" + "imgGrado" + " src=" + img + " alt=" + "menu" + " width=" + "120" + " height=" + "120" + "></a></li>" );
      items.push( " </div>" );
      items.push( " <div class=" + "cajaInfoGrados" + ">" );
      items.push( "  <li><h2>" + name +  "</h2></li>" );
      items.push( "  <li class=" + "descripcion" + "><p>" + description + "</p></li>" )
      items.push( "  <li><a href=" + "asignaturasgrado.html" + "> Más información </a></li>" );
      items.push( " </div>" );
      items.push( "</ul>" );
    });

    $( "<ul/>", {
      "class": "listaGrados",
      html: items.join( "" )
    }).appendTo( "main" );
  });
});

// <ul class="listaGrados">
//  <div class="fotoinfogrado">
//    <li class="fotoGrado"><a><img class="imgGrado" src= + "" +  alt="menu" width="120" height="120"></a></li>
//  </div>
//  <div class="cajaInfoGrados">
//    <li><h2> + "" +  </h2></li>
//    <li class="descripcion"><p> + "" + </p></li>
//    <li><a href="asignaturasgrado.html"> Más información </a></li>
//  </div>
// </ul>




