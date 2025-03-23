<?php
namespace App\Controllers\Controller;
use Twig\Environment;

use App\Models\Avaliacao;

//Renderizar as páginas e passar dados
class AvaliacaoController{
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
    public function avaliacao() {
        $this->autorizacaoEntrada();
        $url = $_SERVER['REQUEST_URI'];
        if($url == '/avaliacao?sucesso' || $url == '/avaliacao?façaLogin' || $url == '/avaliacao?faltaDeComponentes' ){
            echo $this->twig->render('avaliacao.twig', ['url' => $url]);
        }else{
            echo $this->twig->render('avaliacao.twig');
        }
        
    }
    public function enviarAvaliacao() {
        if($_POST['stars'] != '' && $_POST['nome'] != '' && $_POST['descricao'] != '' && $_SESSION['idUser'] != '' ){
            $avaliacoes = new avaliacao();
            $avaliacoes->__set('nome', $_POST['nome']);
            $avaliacoes->__set('estrelas', $_POST['stars']);
            $avaliacoes->__set('descricao', $_POST['descricao']);
            $avaliacoes->adicionarAvaliacao();
            header("Location: /avaliacao?sucesso");
        }else if($_SESSION['idUser'] == '' ){
            header("Location: /avaliacao?façaLogin");
        }else{
            header("Location: /avaliacao?faltaDeComponentes");
        }
    }
}
?>