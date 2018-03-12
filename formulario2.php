<?php 
$valor1 = 0;
$valor2 = 0;
$resultado = 0;
if (isset($_POST)) {
    $valor1 = $_POST['valor1'];
    $valor2 = $_POST['valor2'];
    $resultado = $valor1 + $valor2;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulario 2</title>
</head>
<body>
    <form method="post">
        <p>Valor 1 :</p>
        <br><br>
        <input type="text" name="valor1" size="20" value="<?php echo $valor1; ?>">
        <p>Valor 2 :</p>
        <br><br>
        <input type="text" name="valor2" size="20" value="<?php echo $valor2; ?>">
        <br><br>
        <p>Resultado: <?php echo $resultado?></p>
        <button type="submit">Enviar</button>

    </form>
</body>
</html>