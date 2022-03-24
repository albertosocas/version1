$(document).ready(function (){

  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  var sParameterName = sURLVariables[0].split('=');
  if (sParameterName[0] == "asig"){
    var asigs = sParameterName[1];
  }


  $.getJSON( "scripts/asignatura.json", function( data ) {
    var items = [];

    $.each( data, function() {

      if(asigs.includes(this["id"])) {
        items.push("<ul class=" + "listaAsignaturas" + ">");
        items.push(" <div class=" + "fotoinfoasignatura" + ">");
        items.push("   <li class=" + "fotoAsignatura" + "><a><img class=" + "imgAsignatura" + " src=" + this["img"] + " alt=" + "menu" + " width=" + "120" + " height=" + "120" + "></a></li>");
        items.push(" </div>");
        items.push(" <div class=" + "cajaInfoAsignaturas" + ">");
        items.push("  <li><h2>" + this["name"] + "</h2></li>");
        items.push("  <li class=" + "descripcion" + "><p>" + this["description"] + "</p></li>")
        items.push("  <li><a href=" + "asignatura.html?idvalue=" + this["id"] + "> Más información </a></li>");
        items.push(" </div>");
        items.push("</ul>");

      $( "<ul/>", {
        "class": "listaAsignaturas",
        html: items.join( "" )
      }).appendTo( "main" );
      };
      items = [];
    });


  });
});





