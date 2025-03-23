import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/vendas.css";

export default function Vendas({ produto }) {
  const { user } = useContext(AuthContext);
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        if (!user?.token) {
          setError("Usuário não autenticado.");
          setLoading(false);
          return;
        }

        const response = await api.get("/vendas", {
          headers: { Authorization: `Bearer ${user.token}` },
        });

        setVendas(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || "Erro ao carregar vendas.");
        setLoading(false);
      }
    };

    fetchVendas();
  }, [user?.token]);

  if (loading) return <p>Carregando vendas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-vendas">
      <Header />
      <main style={{flex:1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <h1>Vendas Realizadas</h1>
        {vendas.length > 0 ? (
          vendas.map((venda) => (
            <div key={venda.id} className="venda-cartao">
              <div className="status-vendas">
                <h1>Venda Realizada</h1>
                <span className="green">{venda.metodoPagamento}</span>
              </div>

              <div className="details-vendas">
                <div className="section-vendas">
                  <h3>Informações do Usuário</h3>
                  <p><strong>Nome:</strong> {venda.user.nome}</p>
                  <p><strong>Email:</strong> {venda.user.email}</p>
                  <p><strong>Telefone:</strong> {venda.user.telefone}</p>
                  <p><strong>CPF:</strong> {venda.user.cpf}</p>
                </div>
                <div className="section-vendas">
                  <h3>Informações do Pedido</h3>
                  <p><strong>Data:</strong> {new Date(venda.data).toLocaleDateString()}</p>
                </div>
              </div>

              <h2>Itens do Pedido</h2>
              <div className="section-vendas-lista">
                {venda.itens && venda.itens.length > 0 ? (
                  venda.itens.map((item) => (
                    <div key={item.id} className="item-pedido" style={{ display: "flex", alignItems: "center" }}>
                      {/* Imagem do Produto */}
                      <img
                        src={item.produto.imagens?.[0] || "/images/placeholder.png"}
                        alt={item.produto.nome}
                        style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "10px" }}
                      />
                      {/* Detalhes do Produto */}
                      <div>
                        <p><strong>Produto:</strong> {item.produto.nome}</p>
                        <p><strong>Quantidade:</strong> {item.quantidade}</p>
                        <p><strong>Preço:</strong> R$ {(item.preco).toFixed(2)}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nenhum item encontrado.</p>
                )}

              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma venda encontrada.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
