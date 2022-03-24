$(document).ready(function (){
  $.getJSON( "scripts/grados.json", function( data ) {
    var items = [];
    var items2 = [];

    $.each( data, function() {
      $.each( this, function(key, val){
        items.push(val);
      });

      var id = items[0];
      var img = items[1];
      var name = items[2];
      var description = items[3];
      var subject = items[4];
      var href = items[5];
      items2.push( "<ul class=" + "listaGrados" + ">" );
      items2.push( " <div class=" + "fotoinfogrado" + ">" );
      items2.push( "   <li class=" + "fotoGrado" + "><a><img class=" + "imgGrado" + " src=" + img + " alt=" + "menu" + " width=" + "120" + " height=" + "120" + "></a></li>" );
      items2.push( " </div>" );
      items2.push( " <div class=" + "cajaInfoGrados" + ">" );
      items2.push( "  <li><h2>" + name +  "</h2></li>" );
      items2.push( "  <li class=" + "descripcion" + "><p>" + description + "</p></li>" )
      items2.push( "  <li><a href=" + "asignaturasgrado.html?asig=" + subject + "> Más información </a></li>" );
      items2.push( " </div>" );
      items2.push( "</ul>" );



      items = [];

      $( "<ul/>", {
        "class": "listaGrados",
        html: items2.join( "" )
      }).appendTo( "main" );

      items = [];
      items2 = [];
    });

  });
});





