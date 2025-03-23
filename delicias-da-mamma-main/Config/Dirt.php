<?php
namespace Config;

//Encontrando diretorio para renderizaçao de View

// Remover tudo após o ponto de interrogação, se houver
$url = strstr($url, '?', true) ?: $url;

$dirt = '';
if ($url == '/') {
    $dirt = '../App/Views/Index';
} elseif ($url == '/auth' || $url == '/deslogar' || $url == '/cadastrar' || $url == '/enviarAvaliacao' || $url == '/adicionarProduto' || $url == '/adicionarProdutoLocal' ) {
    $dirt  = '../App/Views';
} else {
    $parts = explode('/', trim($url, '/'));
    $dirtName = ucfirst($parts[0]);
    $dirt = "../App/Views/$dirtName";
}

return $dirt;
?>