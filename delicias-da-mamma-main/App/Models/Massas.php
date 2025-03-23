<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Massas
{
    private $idMassa;
    private $nome;
    private $tipoProduto;
    private $valor;

    public function __get($attr){
        return $this->attr;
    }
    public function __set($attr, $value) {
        $this->attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idMassa, nome, tipoProduto, valor FROM massa';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idMassa, nome, valor FROM massa';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>