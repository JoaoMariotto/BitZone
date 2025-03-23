import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // Certifique-se de que o caminho da API está correto
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import '../../styles/vendas.css ';

export default function Vendas() {
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

        console.log("Dados das vendas:", response.data);
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
    <div className="vendas-page">
      <h1>Vendas Realizadas</h1>
      {vendas.length > 0 ? (
        <div className="vendas-list">
          {vendas.map((venda) => (
            <div key={venda.id} className="venda-card">
              <img src="https://via.placeholder.com/150" alt="Produto" />
              <div>
                <p><strong>Produto:</strong> {venda.produto?.nome || "Produto não encontrado"}</p>
                <p><strong>Preço Total:</strong> R$ {venda.total}</p>
                <p><strong>Data:</strong> {new Date(venda.data).toLocaleDateString()}</p>
                <p><strong>Endereço:</strong> {venda.endereco}</p>
                <button onClick={() => navigate(`/admin/vendas/${venda.id}`)}>Ver Detalhes</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Nenhuma venda encontrada.</p>
      )}
    </div>
  );
}
