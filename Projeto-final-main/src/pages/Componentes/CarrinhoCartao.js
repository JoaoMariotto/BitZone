import React from "react";
import '../../styles/carrinhocartao.css';

export default function CarrinhoCartao({ produto, quantidade, preco, imagem, onQuantidadeChange, onDeletarItem }) {
  return (
    <div className="container-historico">
      <div className="left-historico">
        <img src={imagem} alt={produto.nome} className="produto-imagem" /> {/* Imagem do produto */}
      </div>
      <div className="right-historico">
        <h3 className="h3-carrinho">{produto.nome}</h3>
        <p className="p-carrinho">Preço: R${(preco).toFixed(2)}</p>
        <label className="label-carrinho">
          Quantidade:
          <input
            type="number"
            value={quantidade}
            min="1"
            onChange={(e) => onQuantidadeChange(produto.id, e.target.value)} // Altera a quantidade do produto
          />
        </label>
        <p>Total: R${(preco * quantidade).toFixed(2)}</p>
      </div>
        <div className='botoes'>
          <a href={`/produto/${produto.id}`}><button className="button-50" role="button">Ver Mais</button></a>
          <button onClick={() => onDeletarItem(produto.id)} className="button-50">Remover</button>
        </div>
    </div>
  );
}
