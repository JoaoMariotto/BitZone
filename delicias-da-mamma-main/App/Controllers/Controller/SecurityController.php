<?php
namespace App\Controllers\Controller;
use Twig\Environment;

//Renderizar as páginas e passar dados
class SecurityController{
    private $twig;
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function naoEncontrado(){
        echo $this->twig->render('naoEncontrado.twig');
    }
}
?>