<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Bebida
{
    private $idBebida;
    private $nome;
    private $tipoProduto;
    private $valor;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idBebida, nome, tipoProduto, valor FROM bebida';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idBebida, nome, valor FROM bebida';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>