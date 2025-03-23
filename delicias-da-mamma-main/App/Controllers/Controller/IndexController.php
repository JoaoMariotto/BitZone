<?php
namespace App\Controllers\Controller;
use Twig\Environment;

//Renderizar as páginas e passar dados
class IndexController{
    private $twig;
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function autorizacaoEntrada(){
        $usuario = $_SESSION['usuario'];
        if($usuario != 'cliente'){
            header("Location: /naoEncontrado");
        }
    }
    public function index() {
        $this->autorizacaoEntrada();
        echo $this->twig->render('index.twig');
    }
}
?>