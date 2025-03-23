<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Batata
{
    private $idBatata;
    private $nome;
    private $tipoProduto;
    private $valorPequeno;
    private $valorGrande;

    public function __get($attr){
        return $this->attr;
    }
    public function __set($attr, $value) {
        $this->attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idBatata, nome, tipoProduto, valorPequeno, valorGrande FROM batata';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT  idBatata, nome, valorPequeno, valorGrande FROM batata';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>