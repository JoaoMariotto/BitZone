<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Porcao
{
    private $idPorcoes;
    private $nome;
    private $tipoProduto;
    private $valoPequeno;
    private $valorGrande;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT id_porcoes, nome, tipoProduto, valorPequeno, valoGrande FROM porcao';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idPorcoes, nome, valorPequeno, valoGrande FROM porcao';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>