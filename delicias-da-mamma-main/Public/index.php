<?php
// Autoload para carregar automaticamente as classes
require_once '../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

$rotas = require '../Config/Routes.php';
$url = $_SERVER['REQUEST_URI']; // Pega URL

//Determinando diretório
$dirt = require '../Config/Dirt.php';

// Configuração do Twig
$loader = new FilesystemLoader($dirt);
$twig = new Environment($loader);

if (array_key_exists($url, $rotas)) {
    list($controlador, $metodo) = explode('@', $rotas[$url]); //Dividir a url pelo @ quando encontrar dentro de $rotas o termo de $url
    $controlador = 'App\Controllers\Controller\\' . $controlador; //Achando o controllador
    $objControlador = new $controlador($twig);

    if($url == '/adicionarProduto' || $url == '/adicionarProdutoLocal' ){
        $objControlador->$metodo();
        exit; 
    }else{
        require_once "../App/Views/layout.phtml";   
        $objControlador->$metodo();
    }

} else {
    echo 'Rota não encontrada';
}

require_once "../App/Views/footer.phtml";  
?>
