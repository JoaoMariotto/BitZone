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
use App\Models\PedidosLocal;

//Renderizar as páginas e passar dados
class PedidoLocalController{
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
    public function pedidoLocalCliente() {
        $this->autorizacaoEntrada();
        $cardapio = $this->deliveryComidas();
        $user = null;
        if($_SESSION['logado'] === true){
            $usuarios = new Usuarios();
            $user = $usuarios->getUser($_SESSION['idUser']);
        }
        echo $this->twig->render('pedidoLocalCliente.twig', ['pizzas' => $cardapio['pizzas'], 'batatas' => $cardapio['batatas'], 'lanches' => $cardapio['lanches'], 'massas' => $cardapio['massas'], 'pratos' => $cardapio['pratos'], 'bebidas' => $cardapio['bebidas'], 'acrescimos' => $cardapio['acrescimos'], 'bordas' => $cardapio['bordas'], 'usuario' => $user]);
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
    public function adicionarProdutoLocal(){
        header('Content-Type: application/json');
    
        if (isset($_POST['pedido'])) {
            $pedidoJSON = $_POST['pedido'];
            $pedidoArray = json_decode($pedidoJSON, true);
    
            if ($pedidoArray !== null && (isset($pedidoArray['pedido'][0]['pedido']) || isset($pedidoArray['pedido'][1]['pedido']))) {
                $pedidosNormal = $pedidoArray['pedido'][0]['pedido'];
                $pedidosMeia = $pedidoArray['pedido'][1]['pedido'];
                $pedido = "";
    
                foreach($pedidosNormal as $key => $pedidoNormal){
                    $pedido .= "{$pedidoNormal[1]} - {$pedidoNormal[2]} | ";
                }
                foreach($pedidosMeia as $key => $pedidoMeia){
                    $pedido .= "{$pedidoMeia[1]} - {$pedidoMeia[2]} | ";
                }
    
                $valor = $pedidoArray['valorTotal'][0]['valorTotal'];
                $mesa = $pedidoArray['cliente'][0]['mesa'];
                $responsavel = "{$pedidoArray['cliente'][0]['nome']}";
                $formaPagamento = "{$pedidoArray['cliente'][0]['formaPagamento']}";
    
                $pedidosLocal = new PedidosLocal();
                $pedidosLocal->__set('mesa', $mesa);
                $pedidosLocal->__set('nomeResponsavel', $responsavel);
                $pedidosLocal->__set('pedido', $pedido);
                $pedidosLocal->__set('formaPagamento', $formaPagamento);
                $pedidosLocal->__set('preco', $valor);
    
                $pedidosLocal->adicionarPedidoLocal();
    
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