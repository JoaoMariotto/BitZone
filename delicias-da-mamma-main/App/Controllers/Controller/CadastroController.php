<?php
namespace App\Controllers\Controller;
use Twig\Environment;
use App\Models\Usuarios;

//Renderizar as páginas e passar dados
class CadastroController{
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
    public function cadastroCliente() {
        $this->autorizacaoEntrada();
        $url = $_SERVER['REQUEST_URI'];
        if($url == '/cadastroCliente?cadastroRealizado' || $url == '/cadastroCliente?camposEmBranco'){
            echo $this->twig->render('cadastroCliente.twig', ['url' => $url]);
        }else{
            echo $this->twig->render('cadastroCliente.twig');
        }
    }
    public function cadastrar(){
        if($_POST['nome'] != '' && $_POST['email'] != '' && $_POST['password'] != '' && $_POST['rua'] != '' && $_POST['bairro'] != '' &&  $_POST['numero'] != '' && $_POST['complemento'] != '' && $_POST['telefone'] != '') {
            $usuarios = new Usuarios;
            $usuarios->__set('nome', $_POST['nome']);
            $usuarios->__set('email', $_POST['email']);
            $usuarios->__set('senha', $_POST['password']);
            $usuarios->__set('rua', $_POST['rua']);
            $usuarios->__set('bairro', $_POST['bairro']);
            $usuarios->__set('numero', $_POST['numero']);
            $usuarios->__set('complemento', $_POST['complemento']);
            $usuarios->__set('telefone', $_POST['telefone']);

            $usuarios->cadastrar();

            header("Location: /cadastroCliente?cadastroRealizado");
        } else {
            header("Location: /cadastroCliente?camposEmBranco");
        }
    }
}
?>