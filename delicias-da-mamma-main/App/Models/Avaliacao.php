<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Avaliacao
{
    private $idAvaliacao;
    private $data;
    private $nome;
    private $estrelas;
    private $descricao;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idAvaliacao, data, nome, estrelas, descricao FROM avaliacao';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function adicionarAvaliacao(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();
    
        $query = 'INSERT INTO avaliacao(nome, estrelas, descricao) VALUES(:nome, :estrelas, :descricao)';
        $stmt = $conn->prepare($query);
    
        $stmt->bindValue(':nome', $this->nome);
        $stmt->bindValue(':estrelas', $this->estrelas);
        $stmt->bindValue(':descricao', $this->descricao);
        $result = $stmt->execute();
    
        return $result;
    }
    public function getAvaliacao(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT data, nome, estrelas, descricao FROM avaliacao';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>