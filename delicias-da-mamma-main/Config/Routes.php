<?php
namespace Config;

// Mapeamento de rotas para controladores
// As rotas são definidas por 'url' => 'NomeDoController@FunçaoDoController'
$rotas = [
    '/' => 'IndexController@index',
    '/login' => 'LoginController@login',
    '/deslogar' => 'LoginController@deslogar',
    '/auth' => 'LoginController@autenticacao',
    '/cadastroCliente' => 'CadastroController@cadastroCliente',
    '/cardapio' =>  'CardapioController@cardapio',
    '/avaliacao' =>  'AvaliacaoController@avaliacao',
    '/enviarAvaliacao' =>  'AvaliacaoController@enviarAvaliacao',
    '/delivery' => 'DeliveryController@delivery',
    '/funcionarioPedido' => 'FuncionarioController@funcionarioPedido',
    '/caixaPedido' => 'CaixaController@caixaPedido',
    '/caixaPedidoDelivery' => 'CaixaController@caixaPedidoDelivery',
    '/caixaPedidoLocal' => 'CaixaController@caixaPedidoLocal',
    '/admMenu' => 'AdmController@admMenu',
    '/admPedidoDelivery' => 'AdmController@admPedidoDelivery',
    '/admPedidoLocal' => 'AdmController@admPedidoLocal',
    '/admRegistroGeral' => 'AdmController@admRegistroGeral',
    '/naoEncontrado' => 'SecurityController@naoEncontrado',
    '/cadastrar' => 'CadastroController@cadastrar',
    '/adicionarProduto' => 'DeliveryController@adicionarProduto',
    '/adicionarProdutoCaixa' => 'CaixaController@adicionarProduto',
    '/pedidoLocalCliente' => 'PedidoLocalController@pedidoLocalCliente',
    '/adicionarProdutoLocal' => 'PedidoLocalController@adicionarProdutoLocal',
];

return $rotas;
?>