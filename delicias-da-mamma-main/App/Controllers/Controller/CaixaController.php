<?php
namespace App\Controllers\Controller;
use Twig\Environment;

use App\Models\PedidosDelivery;
use App\Models\PedidosLocal;
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
class CaixaController{
    private $twig;
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function autorizacaoEntrada(){
        $usuario = $_SESSION['usuario'];
        if($usuario != 'caixa'){
            header("Location: /naoEncontrado");
        }
    }
    public function caixaPedidoDelivery() {
        $this->autorizacaoEntrada();
        $pedido = $this->pegarPedidosDelivery();
        echo $this->twig->render('caixaPedidoDelivery.twig', ['pedidos' => $pedido]);
    }
    public function caixaPedidoLocal() {
        $this->autorizacaoEntrada();
        $pedido = $this->pegarPedidosLocal();
        echo $this->twig->render('caixaPedidoLocal.twig', ['pedidos' => $pedido]);
    }
    public function caixaPedido() {
        $this->autorizacaoEntrada();
        $cardapio = $this->deliveryComidas();
        $user = null;
        if($_SESSION['logado'] === true){
            $usuarios = new Usuarios();
            $user = $usuarios->getUser($_SESSION['idUser']);
        }
        echo $this->twig->render('caixaPedido.twig', ['pizzas' => $cardapio['pizzas'], 'batatas' => $cardapio['batatas'], 'lanches' => $cardapio['lanches'], 'massas' => $cardapio['massas'], 'pratos' => $cardapio['pratos'], 'bebidas' => $cardapio['bebidas'], 'acrescimos' => $cardapio['acrescimos'], 'bordas' => $cardapio['bordas'], 'usuario' => $user]);
    }
    public function pegarPedidosDelivery(){
        $pedidosDelivery = new PedidosDelivery();
        $pedidos = $pedidosDelivery->getPedidoDelivery();
        return $pedidos;
    }
    public function pegarPedidosLocal(){
        $pedidosLocal = new PedidosLocal();
        $pedidos = $pedidosLocal->getPedidoLocal();
        return $pedidos;
    }
    public function pegarPedidosDeliveryId(){
        $pedidosDelivery = new PedidosDelivery();
        $pedidos = $pedidosDelivery->getPedidoDeliveryId();
        return $pedidos;
    }
    public function pegarPedidosLocalID(){
        $pedidosLocal = new PedidosLocal();
        $pedidos = $pedidosLocal->getPedidoLocalId();
        return $pedidos;
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