$(document).ready(function (){

  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  var sParameterName = sURLVariables[0].split('=');
  if (sParameterName[0] == "asig"){
    var asigs = sParameterName[1];
  }


  $.getJSON( "scripts/asignatura.json", function( data ) {

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
      var grados = items[4];
      var href = items[5];
      if(asigs.includes(id)) {
        items2.push("<ul class=" + "listaAsignaturas" + ">");
        items2.push(" <div class=" + "fotoinfoasignatura" + ">");
        items2.push("   <li class=" + "fotoAsignatura" + "><a><img class=" + "imgAsignatura" + " src=" + img + " alt=" + "menu" + " width=" + "120" + " height=" + "120" + "></a></li>");
        items2.push(" </div>");
        items2.push(" <div class=" + "cajaInfoAsignaturas" + ">");
        items2.push("  <li><h2>" + name + "</h2></li>");
        items2.push("  <li class=" + "descripcion" + "><p>" + description + "</p></li>")
        items2.push("  <li><a href=" + "asignatura.html?idvalue=" + id + "> Más información </a></li>");
        items2.push(" </div>");
        items2.push("</ul>");
      $( "<ul/>", {
        "class": "listaAsignaturas",
        html: items2.join( "" )
      }).appendTo( "main" );
      };

      items = [];
      items2 = [];
    });


  });
});





