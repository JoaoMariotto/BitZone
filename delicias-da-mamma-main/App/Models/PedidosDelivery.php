<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class PedidosDelivery
{
    private $idPedidoDelivery;
    private $localizacao;
    private $pedido;
    private $tipo;
    private $dataHorario;
    private $formaPagamento;
    private $preco;
    private $responsavel;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPedidoDelivery, localizacao, pedido, tipo, dataHorario, formaPagamento, preco, responsavel FROM pedidosdelivery';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getPedidoDelivery(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT dataHorario, responsavel, localizacao, formaPagamento, pedido, tipo, preco FROM pedidosdelivery';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getPedidoDeliveryId(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPedidoDelivery, dataHorario, responsavel, formaPagamento, pedido, tipo, preco FROM pedidosdelivery';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function adicionarPedidoDelivery(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'INSERT INTO pedidosDelivery(localizacao, responsavel, formaPagamento, pedido, preco) VALUES (:localizacao, :responsavel, :formaPagamento, :pedido, :preco)';
        $stmt = $conn->prepare($query);
        $stmt->bindValue(':localizacao', $this->localizacao);
        $stmt->bindValue(':responsavel', $this->responsavel);
        $stmt->bindValue(':formaPagamento', $this->formaPagamento);
        $stmt->bindValue(':pedido', $this->pedido);
        $stmt->bindValue(':preco', $this->preco);

        $result = $stmt->execute();
        return $result;
    }
}
?>