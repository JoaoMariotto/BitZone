<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Lanche
{
    private $idLanche;
    private $nome;
    private $descricao;
    private $tipoProduto;
    private $valor;

    public function _get($attr){
        return $this->attr;
    }
    public function __set($attr,$value){
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idlanche, nome, tipoProduto, descricao, valor FROM lanche';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT  idLanche, nome, descricao, valor FROM lanche';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>