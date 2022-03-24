$(document).ready(function (){
  $.getJSON( "scripts/grados.json", function( data ) {
    var items = [];

    $.each( data, function() {



      items.push( "<ul class=" + "listaGrados" + ">" );
      items.push( " <div class=" + "fotoinfogrado" + ">" );
      items.push( "   <li class=" + "fotoGrado" + "><a><img class=" + "imgGrado" + " src=" + this["img"] + " alt=" + "menu" + " width=" + "120" + " height=" + "120" + "></a></li>" );
      items.push( " </div>" );
      items.push( " <div class=" + "cajaInfoGrados" + ">" );
      items.push( "  <li><h2>" + this["name"] +  "</h2></li>" );
      items.push( "  <li class=" + "descripcion" + "><p>" + this["description"] + "</p></li>" )
      items.push( "  <li><a href=" + "asignaturasgrado.html?asig=" + this["asignaturas"] + "> Más información </a></li>" );
      items.push( " </div>" );
      items.push( "</ul>" );

      $( "<ul/>", {
        "class": "listaGrados",
        html: items.join( "" )
      }).appendTo( "main" );

      items = [];

    });

  });
});





