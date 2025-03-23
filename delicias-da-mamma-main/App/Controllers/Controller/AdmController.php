<?php
namespace App\Controllers\Controller;
use Twig\Environment;
use App\Models\PedidosDelivery;
use App\Models\PedidosLocal;
use App\Models\Avaliacao;

//Renderizar as páginas e passar dados
class AdmController{
    private $twig;
    
    public function __construct(Environment $twig) {
        $this->twig = $twig;
    }
    public function autorizacaoEntrada(){
        $usuario = $_SESSION['usuario'];
        if($usuario != 'adm'){
            header("Location: /naoEncontrado");
        }
    }
    public function admMenu() {
        $this->autorizacaoEntrada();
        $avaliacao = $this->pegarAvaliacoes();
        echo $this->twig->render('admMenu.twig', ['avaliacoes' => $avaliacao]);
    }
    public function admPedidoDelivery() {
        $this->autorizacaoEntrada();
        $pedido = $this->pegarPedidosDelivery();
        echo $this->twig->render('admPedidoDelivery.twig', ['pedidos' => $pedido]);
    }
    public function admPedidoLocal() {
        $this->autorizacaoEntrada();
        $pedido = $this->pegarPedidosLocal();
        echo $this->twig->render('admPedidoLocal.twig', ['pedidos' => $pedido]);
    }
    public function admRegistroGeral() {
        $this->autorizacaoEntrada();
        $pedidoLocal = $this->pegarPedidosLocalId();
        $pedidoDelivery = $this->pegarPedidosDeliveryId();
        echo $this->twig->render('admRegistroGeral.twig', ['pedidoLocal' => $pedidoLocal, 'pedidoDelivery' => $pedidoDelivery]);
    }
    public function pegarPedidosDelivery(){
        $pedidosDelivery = new PedidosDelivery();
        $pedidos = $pedidosDelivery->getPedidoDelivery();
        $pedidosInvertidos = array_reverse($pedidos);
        return $pedidosInvertidos;
    }
    public function pegarPedidosLocal(){
        $pedidosLocal = new PedidosLocal();
        $pedidos = $pedidosLocal->getPedidoLocal();
        $pedidosInvertidos = array_reverse($pedidos);
        return $pedidosInvertidos;
    }
    public function pegarPedidosDeliveryId(){
        $pedidosDelivery = new PedidosDelivery();
        $pedidos = $pedidosDelivery->getPedidoDeliveryId();
        $pedidosInvertidos = array_reverse($pedidos);
        return $pedidosInvertidos;
    }
    public function pegarPedidosLocalID(){
        $pedidosLocal = new PedidosLocal();
        $pedidos = $pedidosLocal->getPedidoLocalId();
        $pedidosInvertidos = array_reverse($pedidos);
        return $pedidosInvertidos;
    }
    public function pegarAvaliacoes(){
        $avaliacao = new Avaliacao();
        $avaliacoes = $avaliacao->getAvaliacao();
        return $avaliacoes;
    }
}
?>