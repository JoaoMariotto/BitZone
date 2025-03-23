import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CarrinhoCartao from "./Componentes/CarrinhoCartao";
import '../styles/perfil.css';

export default function Carrinho() {
  const { user, loading: authLoading } = useContext(AuthContext); // Pega o usuário logado e o estado de loading
  const [carrinho, setCarrinho] = useState([]); // Estado inicial como array
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // Loading para requisição do carrinho
  const [metodoPagamento, setMetodoPagamento] = useState(); // Estado para o método de pagamento
  const navigate = useNavigate();

  useEffect(() => {
    // Se o usuário ainda não está carregado, não faça a requisição
    if (!user || authLoading) {
      return;
    }

    const fetchCarrinho = async () => {
      try {
        // Chama a API para carregar os itens do carrinho
        const response = await api.get("/carrinho", {
          params: { userId: user.id }, // Passa o userId como parâmetro para buscar os dados corretos
        });

        setCarrinho(response.data["produtos-carrinho"] || []); // Atualiza o carrinho com os dados da API
        setLoading(false); // Finaliza o carregamento
      } catch (error) {
        setError("Erro ao carregar carrinho. Tente novamente.");
        setLoading(false);
      }
    };


    fetchCarrinho(); // Chama a função para carregar o carrinho
  }, [user, authLoading]); // Recarrega quando o usuário ou o estado de loading mudarem

  console.log("carrinho", carrinho);
  // Função para atualizar a quantidade do produto no carrinho
  const handleQuantidadeChange = async (produtoId, quantidade) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((item) =>
        item.produtoId === produtoId
          ? { ...item, quantidade: Number(quantidade) }
          : item
      )
    );

    try {
      // Atualiza a quantidade no servidor
      await api.put(
        `/carrinho`,
        { produtoId, quantidade: Number(quantidade) }, // Passa o produto e a nova quantidade
        {
          params: { userId: user.id }, // Envia o userId para associar a alteração ao usuário
        }
      );
    } catch (error) {
      setError("Erro ao atualizar quantidade. Tente novamente.");
    }
  };



  // Função para deletar um item do carrinho
  const handleDeletarItem = async (produtoId) => {
    try {
      // Chama a API para deletar o item do carrinho
      await api.delete(`/carrinho/${produtoId}`, {
        params: { userId: user.id }, // Envia o userId para identificar o carrinho do usuário
      });
      // Atualiza o estado do carrinho após deletar o item
      setCarrinho((prevCarrinho) =>
        prevCarrinho.filter((item) => item.produtoId !== produtoId)
      );
    } catch (error) {
      setError("Erro ao remover item. Tente novamente.");
    }
  };


  // Função para criar o pedido
  const handleCriarPedido = async () => {
    if (!metodoPagamento) {
      setError("Por favor, selecione um método de pagamento.");
      return; // Não continua a execução do código se não houver método de pagamento
    }

    try {
      // Chama a API para criar o pedido com o método de pagamento
      await api.post("/pedidos", { metodoPagamento });
      alert("Pedido realizado com sucesso!");
      setCarrinho([]); // Limpa o carrinho após o pedido
      navigate("/"); // Redireciona para a página inicial
    } catch (error) {
      setError("Erro ao criar pedido. Tente novamente.");
    }
  };

  if (authLoading || loading) {
    return <p>Carregando carrinho...</p>; // Exibe mensagem de carregamento
  }

  if (error) {
    return <p>{error}</p>; // Exibe mensagem de erro, se houver
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }} >
      <>
        <Header />
        <main style={{ flex: 1, backgroundColor: "black" }}>
          <h1>Meu Carrinho</h1>
          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p> // Exibe mensagem caso o carrinho esteja vazio
          ) : (
            <>
              <ul>
                {carrinho.map((item) => (
                  <CarrinhoCartao
                    key={item.produtoId}
                    produto={item.produto}
                    quantidade={item.quantidade}
                    preco={item.produto.preco}
                    imagem={item.produto.imagens[0]}
                    onQuantidadeChange={handleQuantidadeChange}
                    onDeletarItem={handleDeletarItem}
                  />
                ))}
              </ul>

              {/* Campo de seleção do método de pagamento */}
              <div className="centro-carrinho">
                <label className="label-carrinho2">
                  Método de Pagamento:
                </label>
                <select
                  className="select-carrinho"
                  value={metodoPagamento}
                  onChange={(e) => setMetodoPagamento(e.target.value)}
                  required
                >
                  <option selected disabled value="">Selecione</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Boleto">Boleto</option>
                  <option value="Pix">Pix</option>
                </select>
                {error && (<h1 style={{ color: 'white' }}>{error}</h1>)}

                <br />
                {/* Botão para enviar o pedido */}
                <button
                  className="button-50"
                  onClick={handleCriarPedido}
                  disabled={!metodoPagamento} // Desabilita o botão caso nenhum método de pagamento tenha sido selecionado
                >
                  Finalizar Pedido
                </button>
              </div>
            </>
          )}

        </main>
        <Footer />
      </>
    </div>
  );
}
