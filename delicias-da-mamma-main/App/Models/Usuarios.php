<?php
namespace App\Models;
use App\Controllers\BD\Conexao;

class Usuarios
{
    private $idUsuarios;
    private $nome;
    private $email;
    private $senha;
    private $rua;
    private $bairro;
    private $numero;
    private $complemento;
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

        $query = 'SELECT idUsuarios, nome, email, senha, rua, bairro, numero, complemento, telefone FROM usuarios';
        $stmt = $conn->prepare($query);
        $stmt->execute();

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
    public function cadastrar(){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        try {
            $query = 'INSERT INTO usuarios(nome, email, senha, rua, bairro, numero, complemento, telefone) VALUES(:nome, :email, :senha, :rua, :bairro, :numero, :complemento, :telefone)';
            $stmt = $conn->prepare($query);
    
            $stmt->bindValue(':nome', $this->nome);
            $stmt->bindValue(':email', $this->email);
            $stmt->bindValue(':senha', $this->senha);
            $stmt->bindValue(':rua', $this->rua);
            $stmt->bindValue(':bairro', $this->bairro);
            $stmt->bindValue(':numero', $this->numero);
            $stmt->bindValue(':complemento', $this->complemento);
            $stmt->bindValue(':telefone', $this->telefone);
    
            $stmt->execute();
        } catch (\PDOException $e) {
            $erro = "Erro: " . $e->getMessage();
            return `falha no cadastro no banco de dados. {$erro}`;
        }
    }
    public function getUser($idUser){
        $conexao = new Conexao();
        $conn = $conexao->conectar();

        $query = 'SELECT nome, email, senha, rua, bairro, numero, complemento, telefone FROM usuarios WHERE idUsuarios = :idUser';
        $stmt = $conn->prepare($query);

        $stmt->bindValue(':idUser', $idUser);

        $stmt->execute();
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>