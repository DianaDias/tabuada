<?php

if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == "sortear"){
  $min = 0;
  $max = 10;
  $valores = array();
  for ($i=0; $i <= 1; $i++) {
     $numeros = rand($min, $max);
     array_push($valores, $numeros);
  }
  $retorno = json_encode($valores);
  echo $retorno;
}

if(isset($_REQUEST['acao']) && $_REQUEST['acao'] == "calcular"){
  $resultCalc = $_REQUEST['val1'] * $_REQUEST['val2'];

  $retorno = json_encode($resultCalc);
  echo $retorno;
}


 ?>
