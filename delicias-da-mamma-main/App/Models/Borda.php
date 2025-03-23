<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Borda
{
    private $idBorda;
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

        $query = 'SELECT idBorda, nome, tipoProduto, valor FROM borda';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function getNameValues(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT  idBorda, nome, valor FROM borda';
        $stmt =  $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>