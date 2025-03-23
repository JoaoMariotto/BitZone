<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class PedidosLocal
{
    private $idPedidoLocal;
    private $pedido;
    private $nomeResponsavel;
    private $tipo;
    private $dataHorario;
    private $mesa;
    private $preco;
    private $formaPagamento;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPedidoLocal, pedido, nomeResponsavel, tipo, dataHorario, mesa, statusCozinha, statusPago, preco FROM pedidoslocal';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getPedidoLocal(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT dataHorario, mesa, formaPagamento, responsavel, pedido, tipo, preco FROM pedidoslocal';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getPedidoLocalId(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPedidoLocal, dataHorario, responsavel, formaPagamento, pedido, tipo, preco FROM pedidoslocal';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function adicionarPedidoLocal(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'INSERT INTO pedidosLocal(mesa, responsavel, formaPagamento, pedido, preco) VALUES (:mesa, :responsavel, :formaPagamento, :pedido, :preco)';
        $stmt = $conn->prepare($query);
        $stmt->bindValue(':mesa', $this->mesa);
        $stmt->bindValue(':responsavel', $this->nomeResponsavel);
        $stmt->bindValue(':formaPagamento', $this->formaPagamento);
        $stmt->bindValue(':pedido', $this->pedido);
        $stmt->bindValue(':preco', $this->preco);

        $result = $stmt->execute();
        return $result;
    }
}
?>