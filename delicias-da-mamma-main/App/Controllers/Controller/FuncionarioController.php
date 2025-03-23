<?php
namespace App\Controllers\Controller;
use Twig\Environment;

use App\Models\Pizza;
use App\Models\Batata;
use App\Models\Lanche;
use App\Models\Massas;
use App\Models\Prato;
use App\Models\Bebida;
use App\Models\Acrescimo;
use App\Models\Borda;
use App\Models\Usuarios;

//Renderizar as páginas e passar dados
class FuncionarioController{
    private $twig;  
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function autorizacaoEntrada(){
        $usuario = $_SESSION['usuario'];
        if($usuario != 'funcionario'){
            header("Location: /naoEncontrado");
        }
    }
    public function funcionarioPedido() {
        $this->autorizacaoEntrada();
        $cardapio = $this->deliveryComidas();
        $user = null;
        if($_SESSION['logado'] === true){
            $usuarios = new Usuarios();
            $user = $usuarios->getUser($_SESSION['idUser']);
        }
        echo $this->twig->render('funcionarioPedido.twig', ['pizzas' => $cardapio['pizzas'], 'batatas' => $cardapio['batatas'], 'lanches' => $cardapio['lanches'], 'massas' => $cardapio['massas'], 'pratos' => $cardapio['pratos'], 'bebidas' => $cardapio['bebidas'], 'acrescimos' => $cardapio['acrescimos'], 'bordas' => $cardapio['bordas'], 'usuario' => $user]);
    }
    public function deliveryComidas(){
        $pizzas = new Pizza();
        $batatas = new Batata();
        $lanches = new Lanche();
        $massas = new Massas();
        $prato = new Prato();
        $bebida = new Bebida();
        $acrescimo = new Acrescimo();
        $borda = new Borda();

        $pizzasCardapio = $pizzas->getNameValues();
        $batatasCardapio = $batatas->getNameValues();
        $lanchesCardapio = $lanches->getNameValues();
        $massasCardapio = $massas->getNameValues();
        $pratosCardapio = $prato->getNameValues();
        $bebidasCardapio = $bebida->getNameValues();
        $acrescimosCardapio = $acrescimo->getNameValues();
        $bordasCardapio = $borda->getNameValues();        

        $cardapio = ['pizzas' => $pizzasCardapio, 'batatas' => $batatasCardapio, 'lanches' => $lanchesCardapio, 'massas' => $massasCardapio, 'pratos' => $pratosCardapio, 'bebidas' => $bebidasCardapio, 'acrescimos' => $acrescimosCardapio, 'bordas' => $bordasCardapio];
        return $cardapio;
    }
}
?>