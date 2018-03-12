<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Suma PHP</title>
</head>
<body>
    <?php 
    $valor1 = $_POST['valor1'];
    $valor2 = $_POST['valor2'];
    $res = $valor1 + $valor2;
    echo ("El valor es : $res");
    ?>
</body>
</html>