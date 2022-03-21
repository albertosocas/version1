$(document).ready(function(){

  var padreSuperior=$(this).parent().parent();
  $(".botonFoto").click(function(){
    $(".listaGrados").hide();
    $(padreSuperior).show();
  });

});
