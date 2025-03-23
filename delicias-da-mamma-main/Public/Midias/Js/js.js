$(document).ready(() => {
    //Index
    $("#pecaAgora").click(function () {
            window.location.href = '/delivery'; 
    });
    $("#mobileNavBtn").click(function (e) {
        e.stopPropagation();
        $('#mobileNav').toggle();
    });
    $(document).click(function (e) {
        var navMobile = $('#mobileNav');
        if (!navMobile.is(e.target) && navMobile.has(e.target).length === 0 && !$("#mobileNavBtn").is(e.target)) {
            navMobile.hide();
        }
    });
    $("#exploreCardapio").click(function () {
        window.location.href = '/cardapio'; 
    });
    $("#descubraCardapio").click(function () {
        window.location.href = '/cardapio'; 
    });
    //Cardapio
    $("#btnPizzasCardapio").click(function () {
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'flex');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
    });
    $("#btnBatatasCardapio").click(function () {
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'flex');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
    });
    $("#btnLanchesCardapio").click(function () {
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'flex');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
    });
    $("#btnMassasCardapio").click(function () {
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'flex');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
    });
    $("#btnPratosCardapio").click(function () {
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'flex');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
    });
    $("#btnAcrescimosCardapio").click(function () {
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'flex');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
    });
    $("#btnBordasCardapio").click(function () {
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'flex');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
    });
    $("#btnBebidasCardapio").click(function () {
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
    });
    //Avaliação
    $('#starDisplay').on('click', 'i', function() {
        var index = $(this).index();
        $('#starRating').val(index + 1);
        updateStars(index + 1);
    });
    //Delivery
    $("#btnPizzasDelivery").click(function () {
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
    });
    $("#btnPizzasMeioDelivery").click(function () {
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
    });
    $("#btnBatatasDelivery").click(function () {
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
    });
    $("#btnLanchesDelivery").click(function () {
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
    });
    $("#btnMassasDelivery").click(function () {
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
    });
    $("#btnPratosDelivery").click(function () {
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
    });
    $("#btnAcrescimosDelivery").click(function () {
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
    });
    $("#btnBordasDelivery").click(function () {
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
    });
    $("#btnBebidasDelivery").click(function () {
        var bebidasContainer = $('#bebidasContainer');
        bebidasContainer.css('display', 'flex');
        var pizzasContainer = $('#pizzasMeioContainer');
        pizzasContainer.css('display', 'none');
        var pizzasContainer = $('#pizzasContainer');
        pizzasContainer.css('display', 'none');
        var batatasContainer = $('#batatasContainer');
        batatasContainer.css('display', 'none');
        var lanchesContainer = $('#lanchesContainer');
        lanchesContainer.css('display', 'none');
        var massasContainer = $('#massasContainer');
        massasContainer.css('display', 'none');
        var pratosContainer = $('#pratosContainer');
        pratosContainer.css('display', 'none');
        var acrescimosContainer = $('#acrescimosContainer');
        acrescimosContainer.css('display', 'none');
        var bordasContainer = $('#bordasContainer');
        bordasContainer.css('display', 'none');
    });
    function verificarMain(){
        var mainElement = $('main');
        var mainClass = mainElement.attr('class');
        var firstClass = mainClass.split(' ')[0];
        console.log(firstClass);
        if(firstClass == "localPedido"){
            $('#totalPedido').append(`
                <p>Total: R$ 0,00</p>
            `);
        }else if(firstClass == "deliveryPedido"){
            $('#totalPedido').append(`
                <p>Total: R$ 6,00</p>
            `);
        }
    }
    verificarMain();
    function obterValoresDoFormulario() {
        var nome = document.getElementById('nome').value;
        var rua = document.getElementById('rua').value;
        var numero = document.getElementById('numero').value;
        var bairro = document.getElementById('bairro').value;
        var complemento = document.getElementById('complemento').value;
        var telefone = document.getElementById('telefone').value;
        var formaPagamento = document.getElementById('formaPagamento').value;
    
        if (nome === '' || rua === '' ||  numero === '' || bairro === '' || complemento === '' || telefone === '' || formaPagamento === '' ) {
            alert('Por favor, preencha todos os campos do cartão "Dados do cliente".');
            return false;
        }
    
        pedidoDelivery['cliente'].push({
            nome: nome,
            rua: rua,
            numero: numero,
            bairro: bairro,
            complemento: complemento,
            telefone: telefone,
            formaPagamento: formaPagamento
        });
    
        return true;
    }    
    $('#submitButton').on('click', function() {
        if (!obterValoresDoFormulario()) {
            return;
        }
        pedidoDelivery['valorTotal'].push({
            'valorTotal': valorTotalFormatado
        });
        pedidoDelivery['pedido'].push({
            'pedido': pedido
        });
        pedidoDelivery['pedido'].push({
            'pedido': produtosMeiaAnotar
        });
        if(pedidoDelivery['pedido'][0]['pedido'].length > 0 || pedidoDelivery['pedido'][1]['pedido'].length > 0){
            var dadosParaEnviar = JSON.stringify(pedidoDelivery);
            $.ajax({
                type: 'POST',
                url: '/adicionarProduto',
                data: { pedido: dadosParaEnviar },
                dataType: 'json',
                success: function (dados) {
                    if (dados.success) {
                        alert("Pedido realizado com sucesso!");
                        location.reload();
                    } else {
                        alert('Erro ao fazer o pedido, tente novamente');
                    }
                },
                error: function (erro) {
                    console.log('Erro ao enviar dados para o PHP:', erro);
                }
            });
        }else{
            alert("Selecione os produtos do pedido para continuar!");
        }
    });
    ////Corrigir
    function obterValoresDoFormularioLocal() {
        var nome = document.getElementById('nome').value;
        var mesa = document.getElementById('mesa').value;
        var formaPagamento = document.getElementById('formaPagamento').value;
    
        if (nome === '' || mesa === '' || formaPagamento === '' ) {
            alert('Por favor, preencha todos os campos do cartão "Dados do cliente".');
            return false;
        }
    
        pedidoDelivery['cliente'].push({
            nome: nome,
            mesa: mesa,
            formaPagamento: formaPagamento
        });
    
        return true;
    }    
    $('#submitButtonLocal').on('click', function() {
        if (!obterValoresDoFormularioLocal()) {
            return;
        }
        pedidoDelivery['valorTotal'].push({
            'valorTotal': valorTotalFormatado
        });
        pedidoDelivery['pedido'].push({
            'pedido': pedido
        });
        pedidoDelivery['pedido'].push({
            'pedido': produtosMeiaAnotar
        });
        if(pedidoDelivery['pedido'][0]['pedido'].length > 0 || pedidoDelivery['pedido'][1]['pedido'].length > 0){
            var dadosParaEnviar = JSON.stringify(pedidoDelivery);
            $.ajax({
                type: 'POST',
                url: '/adicionarProdutoLocal',
                data: { pedido: dadosParaEnviar },
                dataType: 'json',
                success: function (dados) {
                    if (dados.success) {
                        alert("Pedido realizado com sucesso!");
                        location.reload();
                    } else {
                        alert('Erro ao fazer o pedido, tente novamente');
                    }
                },
                error: function (erro) {
                    console.log('Erro ao enviar dados para o PHP:', erro);
                }
            });
        }else{
            alert("Selecione os produtos do pedido para continuar!");
        }
    });
});
//Function delivery
var produtosMeiaAnotar = [];
var nomeProdutoArray = [];
var produtosMeia = [];
var prodMeia = [];
var pedido = [];
var valorTotalFormatado;
var pedidoDelivery = {
    'cliente': [],
    'pedido': [],
    'valorTotal': []
};
function adicionarProduto(id, nome, tamanho, valor, tipo = 'normal') {
    if(tipo == 'normal'){
        var produto = [id, nome, tamanho, valor];
        adicionarProdutoPedido(produto);
    }else if(tipo == 'meia'){
        produtosMeia = { 'id' : id, 'nome': nome, 'tamanho': tamanho, 'valor': valor};
        var tamanhoMeia = tamanho;
        nomeProdutoArray.push(nome);
        if(nomeProdutoArray[1] == undefined){
            faltaSabor();
        }else if(nomeProdutoArray[0] == nomeProdutoArray[1]){
            saboresIguais();
        }else{
            var nomeProduto = `${nomeProdutoArray[0]} e ${nomeProdutoArray[1]}`;
        }
        var valorMeia = verProdutoMaior(produtosMeia['valor']);
        if(valorMeia){
            var produtoMeia = [id, nomeProduto, tamanhoMeia, valorMeia];
            produtosMeiaAnotar.push(produtoMeia);
            anotarPedidoMeia(produtosMeiaAnotar);
        }
        if(nomeProdutoArray.length == 2) {
            nomeProdutoArray = [];
        }
        produtosMeia = '';
    }
}
var prodMeia = [];
function verProdutoMaior(produtosMeia) {
    prodMeia.push(produtosMeia); 
    if(prodMeia.length == 2){
        var valor1 = prodMeia[0];
        var valor2 = prodMeia[1];
        if(valor1 > valor2){
            prodMeia = [];
            return valor1;
        }else{
            prodMeia = [];
            return valor2;
        }
    }
    return false;

}
function anotarPedidoMeia(pedidoMeia){
    precoTotal();
    $('#pedidoMeia').empty();
        $('#pedidoMeia').append(`
            <hr/>
            <h4>Pizzas Meia Meia</h4>
        `);
    for (let i = 0; i < pedidoMeia.length; i++) {
        var produto = pedidoMeia[i];
        var id = produto[0]; 
        var nome = produto[1]; 
        var tamanho = produto[2]; 
        var valor = produto[3]; 
        $('#pedidoMeia').append(`
            <p id="${i}" class="itemPedido">
                <span>${nome}</span>
                <span>${valor}</span>
                <button class="btn-remove" onclick="removerProdutoMeia(this)"><i class="fa-solid fa-xmark"></i></button>
            </p>
        `); 
    }  
}
function faltaSabor(){
    $('#pedidoMeia').empty();
    $('#pedidoMeia').append(`
            <hr/>
            <h5>Falta 1 sabor!</h5>
            <hr/>
        `); 
}
function saboresIguais(){
    $('#pedidoMeia').empty();
    $('#pedidoMeia').append(`
            <hr/>
            <h5>Escolha dois sabores diferentes!</h5>
            <hr/>
        `); 
}
function adicionarProdutoPedido(produto){
    pedido = pedido.concat([produto]);
    anotarPedido(pedido);
}
function anotarPedido(pedido){
    precoTotal();
    $('#pedido').empty();
    for (let i = 0; i < pedido.length; i++) {
        var produto = pedido[i];
        var id = produto[0]; 
        var nome = produto[1]; 
        var tamanho = produto[2]; 
        var valor = produto[3]; 
        $('#pedido').append(`
            <p id="${i}" class="itemPedido">
                <span>${nome} / ${tamanho}</span>
                <span>${valor}</span>
                <button class="btn-remove" onclick="removerProduto(this)"><i class="fa-solid fa-xmark"></i></button>
            </p>
        `);
        
    }  
}
function removerProdutoMeia(button) {
    var idToRemove = parseInt($(button).closest('p').attr('id'));
    $(button).closest('p').remove();
    
    var indexToRemove = idToRemove;
    if (indexToRemove >= 0 && indexToRemove < produtosMeiaAnotar.length) {
        produtosMeiaAnotar.splice(indexToRemove, 1);
        anotarPedidoMeia(produtosMeiaAnotar);
    }
}
function removerProduto(button) {
    var idToRemove = parseInt($(button).closest('p').attr('id'));
    $(button).closest('p').remove();
    
    var indexToRemove = idToRemove;
    if (indexToRemove >= 0 && indexToRemove < pedido.length) {
        pedido.splice(indexToRemove, 1);
        anotarPedido(pedido);
    }
}
function precoTotal() {
    $('#totalPedido').empty();
    var valorTotal;
    var mainElement = $('main');
    var mainClass = mainElement.attr('class');
    var firstClass = mainClass.split(' ')[0];
    console.log(firstClass);
    if(firstClass == "localPedido"){
        valorTotal = 0;
    }else if(firstClass == "deliveryPedido"){
        valorTotal = 6;
    }
    pedido.forEach(function(produto) {
        var valorProduto = extrairValor(produto[3]);
        valorTotal += parseFloat(valorProduto.replace(",", ".")); 
    });
    produtosMeiaAnotar.forEach(function(produto) {
        var valorProduto = extrairValor(produto[3]);
        valorTotal += parseFloat(valorProduto.replace(",", ".")); 
    });
    valorTotalFormatado = valorTotal.toFixed(2).replace(".", ",");
    $('#totalPedido').append(`
        <p>Total: R$ ${valorTotalFormatado}</p>
    `);
}
function extrairValor(valor) {
    if (valor.startsWith("R$ ")) {
        return valor.substring(3);
    } else {
        return valor;
    }
}
//Function avaliação
function updateStars(stars) {
    var starDisplay = $('#starDisplay');
    starDisplay.empty();
    for (var i = 0; i < 5; i++) {
        if (i < stars) {
            starDisplay.append('<i class="fa-solid fa-star"></i>');
        } else {
            starDisplay.append('<i class="fa-regular fa-star"></i>');
        }
    }
}
//Imprimir
function imprimir(button) {
    var $tr = $(button).closest('tr');
    var $cabecalho = $('footer');
    $tr.addClass('on-print');
    $tr.addClass('display-print');
    $cabecalho.addClass('off-print');
    $cabecalho.removeClass('d-flex justify-content-center');
    $tr.removeClass('off-print');
    window.print();
    $tr.removeClass('on-print'); 
    $tr.removeClass('display-print');
    $tr.addClass('off-print');
    $cabecalho.removeClass('off-print');
    $cabecalho.addClass('d-flex justify-content-center');
}
