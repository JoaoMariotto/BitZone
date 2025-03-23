<?php
namespace App\Controllers\Controller;
use Twig\Environment;
use App\Models\Funcionario;
use App\Models\Usuarios;

//Renderizar as páginas e passar dados
class LoginController{
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
    public function login() {
        $this->autorizacaoEntrada();
        $url = $_SERVER['REQUEST_URI'];
        if($url == '/login?erroDeLogin'){
            echo $this->twig->render('login.twig', ['url' => $url]);
        }else{
            echo $this->twig->render('login.twig');
        }
        
    }
    public function autenticacao(){
        $this->autorizacaoEntrada();
        $usuarios = new  Usuarios();
        $funcionarios = new Funcionario();

        $users = $usuarios->getAll();
        $funcs = $funcionarios->getAll();

        $_SESSION['logado'] = false;
        $_SESSION['idUser'] = '';
        $_SESSION['usuario'] = '';

        $funcionario = false;
        $cliente = false;
        $adm = false;
        $caixa = false;

        foreach(array_merge($users) as $user){
            if($_POST['email'] == $user['email'] && $_POST['password'] == $user['senha']){
                $_SESSION['logado'] = true;
                $_SESSION['idUser'] = $user['idUsuarios'];
                $_SESSION['usuario'] = 'cliente';
                $cliente = true;
                header("Location: /");
            }
        }
       
        if($cliente == false){
            foreach(array_merge($funcs) as $user){
                if($user['funcao'] == 'adm' && $_POST['email'] == $user['email'] && $_POST['password'] == $user['senha']){
                    $_SESSION['logado'] = true;
                    $_SESSION['idUser'] = $user['idFuncionarios'];
                    $_SESSION['usuario'] = $user['funcao'];
                    $adm = true;
                    header("Location: /admMenu");
                }else if($user['funcao'] == 'caixa' && $_POST['email'] == $user['email'] && $_POST['password'] == $user['senha']){
                    $_SESSION['logado'] = true;
                    $_SESSION['idUser'] = $user['idFuncionarios'];
                    $_SESSION['usuario'] = $user['funcao'];
                    $caixa = true;
                    header("Location: /caixaPedido");
                }else if($user['funcao'] == 'funcionario' && $_POST['email'] == $user['email'] && $_POST['password'] == $user['senha']){
                    $_SESSION['logado'] = true;
                    $_SESSION['idUser'] = $user['idFuncionarios'];
                    $_SESSION['usuario'] = $user['funcao'];
                    $funcionario = true;
                    header("Location: /funcionarioPedido");
                }
            }
        }
        if($cliente == false && $adm == false && $caixa == false && $funcionario == false){
            $_SESSION['usuario'] = 'cliente';
            $_SESSION['logado'] = false;
            header("Location: /login?erroDeLogin");
        }
    }
    public function deslogar(){
        session_destroy();
        header("Location: /");
    }
}
?>