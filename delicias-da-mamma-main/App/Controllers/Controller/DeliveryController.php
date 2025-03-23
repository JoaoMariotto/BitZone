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
use App\Models\PedidosDelivery;

//Renderizar as páginas e passar dados
class DeliveryController{
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
    public function delivery() {
        $this->autorizacaoEntrada();
        $cardapio = $this->deliveryComidas();
        $user = null;
        if($_SESSION['logado'] === true){
            $usuarios = new Usuarios();
            $user = $usuarios->getUser($_SESSION['idUser']);
        }
        echo $this->twig->render('delivery.twig', ['pizzas' => $cardapio['pizzas'], 'batatas' => $cardapio['batatas'], 'lanches' => $cardapio['lanches'], 'massas' => $cardapio['massas'], 'pratos' => $cardapio['pratos'], 'bebidas' => $cardapio['bebidas'], 'acrescimos' => $cardapio['acrescimos'], 'bordas' => $cardapio['bordas'], 'usuario' => $user]);
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
    public function adicionarProduto(){
        if(isset($_POST['pedido'])) {
            $pedidoJSON = $_POST['pedido'];
            $pedidoArray = json_decode($pedidoJSON, true);

            $pedido = "";

            if ($pedidoArray !== null &&
                isset($pedidoArray['pedido'][0]['pedido']) ||
                isset($pedidoArray['pedido'][1]['pedido'])) {
                
                $pedidosNormal = $pedidoArray['pedido'][0]['pedido'];
                $pedidosMeia = $pedidoArray['pedido'][1]['pedido'];
                
                foreach($pedidosNormal as $key => $pedidoNormal){
                    $pedido .= "{$pedidoNormal[1]} - {$pedidoNormal[2]} | ";
                }
                foreach($pedidosMeia as $key => $pedidoMeia){
                    $pedido .= "{$pedidoMeia[1]} - {$pedidoMeia[2]} | ";
                }
                    
            
                $valor = $pedidoArray['valorTotal'][0]['valorTotal'];
                $localizacao = "Rua: {$pedidoArray['cliente'][0]['rua']} | Bairro: {$pedidoArray['cliente'][0]['bairro']} | Número: {$pedidoArray['cliente'][0]['numero']} | Complemento:   {$pedidoArray     ['cliente'][0]['complemento']} | ";
                $responsavel = "{$pedidoArray['cliente'][0]['nome']} | {$pedidoArray['cliente'][0]['telefone']}";
                $formaPagamento = "{$pedidoArray['cliente'][0]['formaPagamento']}";
            
                $pedidosDelivery = new PedidosDelivery();
                $pedidosDelivery->__set('localizacao', $localizacao);
                $pedidosDelivery->__set('responsavel', $responsavel);
                $pedidosDelivery->__set('pedido', $pedido);
                $pedidosDelivery->__set('formaPagamento', $formaPagamento);
                $pedidosDelivery->__set('preco', $valor);

                $pedidosDelivery->adicionarPedidoDelivery();
            
                echo json_encode(['success' => true, 'data' => 'Pedido Realizado']);
            } else {
                echo json_encode(['success' => false, 'error' => 'Falha na decodificação do JSON']);
            }
        } else {
            echo json_encode(['success' => false, 'error' => 'Pedido não encontrado no POST']);
        }
    }
}
?>