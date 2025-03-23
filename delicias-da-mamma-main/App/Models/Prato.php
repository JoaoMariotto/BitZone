<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Prato
{
    private $idPrato;
    private $nome;
    private $quantidade;
    private $descricao;
    private $tipoProduto;
    private $valor;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr,$value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao -> conectar();

        $query = 'SELECT idPrato, nome, quantidade, descricao, tipoProduto, valor FROM prato';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPrato, nome, descricao, valor FROM prato';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>