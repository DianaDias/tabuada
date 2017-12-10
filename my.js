

$("#sortear").click(function(){
  // alert("cheguei");
  $('#resultado').html("");
   $.ajax({
     dataType: "json",
     data: {acao: 'sortear'},
     url: "retorno.php",
     beforeSend: function() {
        $("h2").html("Carregando..."); //Carregando
        },
     error: function() {
        $("h2").html("O servidor não conseguiu processar o pedido");
     },
       success: function(result){
         var valorAnterior = "";
       $.each(result, function(key, valor){
        //  alert(valor);
        if(valorAnterior == ""){
          $("#valores0").html(valor);
          valorAnterior = valor;
        } else{
          $("#valores1").html(valor);
        }
          $('#x').show();
          $('#igual').show();
          $('#resultado').show();
          $('#btnResultado').show();
          $('#msg').hide();
          $('#img').hide();
          $('.footer').css({'bottom':"290px"});
       });
     }
   });
});

$(document).ready(function(){
  if($('#valores0').is(':empty')){
    $('#x').hide();
    $('#igual').hide();
    $('#resultado').hide();
    $('#btnResultado').hide();
    $('#msg').show();
    $('.footer').css({'bottom':"248px"});
  }
});

$('#btnResultado').click(function(){
  var val1 = $('#valores0').text();
  var val2 = $('#valores1').text();

  $.ajax({
    dataType: "json",
    data: {acao: 'calcular', val1: val1, val2: val2},
    url: "retorno.php",
    beforeSend: function() {
       $("h2").html("Carregando..."); //Carregando
       },
    error: function() {
       $("h2").html("O servidor não conseguiu processar o pedido");
    },
      success: function(result){
        // alert(result);
        $("#resultado").html(result);
    }
  });
});
