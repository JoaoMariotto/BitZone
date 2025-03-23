<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Funcionario
{
    private $idFuncionarios;
    private $nome;
    private $funcao;
    private $email;
    private $senha;
    private $telefone;

    public function __get($attr){
        return $this->$attr;
    }
    public function __set($attr, $value) {
        $this->$attr = $value;
    }
    public function getAll(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT idFuncionarios, nome, funcao, email, senha, telefone FROM funcionarios';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>