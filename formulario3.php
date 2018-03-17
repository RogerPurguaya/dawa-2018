<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario 3</title>

   <script type="text/javascript">
   var sumar = function() {
       var valor1 = parseFloat(document.getElementById('valor1').value)
       var valor2 = parseFloat(document.getElementById('valor2').value)
       var res = document.getElementById('resultado').value = valor1 + valor2
   };
   </script>
</head>
<body>
    <form>
         <p>Valor 1 :</p>
        <br>
        <input type="text" name="valor1" id="valor1" size="20">
        <p>Valor 2 :</p>
        <br>
        <input type="text" name="valor2" id="valor2" size="20">
        <br>
        <p>Resultado: </p>
        <br>
        <input type="button" value="Sumar" onClick="sumar()">
        <input type="text" name="resultado" id="resultado" disabled = "disabled">
    </form>
</body>
</html>