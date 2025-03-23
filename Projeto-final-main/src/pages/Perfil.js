import React, { useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import foto from '.././assets/images/profile-perfil.png'

import "../styles/perfil.css";

export default function Perfil() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    password: "",
    cpf: "",
    cep: "",
    cidade: "",
    bairro: "",
    logradouro: "",
    complemento: "",
    numero: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [historicoCompras, setHistoricoCompras] = useState([]);
  const { user, loading } = useContext(AuthContext);

  // Buscar dados do perfil
  useEffect(() => {
    if (!user || loading) {
      return;
    }

    const fetchPerfil = async () => {
      try {
        const responsePerfil = await api.get("/perfil");
        setFormData({
          nome: responsePerfil.data.nome,
          email: responsePerfil.data.email,
          telefone: responsePerfil.data.telefone,
          password: "",
          cpf: responsePerfil.data.cpf,
          cep: responsePerfil.data.endereco.cep,
          cidade: responsePerfil.data.endereco.cidade,
          bairro: responsePerfil.data.endereco.bairro,
          logradouro: responsePerfil.data.endereco.logradouro,
          complemento: responsePerfil.data.endereco.complemento,
          numero: responsePerfil.data.endereco.numero,
        });
      } catch (error) {
        setError(
          error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente."
        );
      }
    };

    fetchPerfil();
  }, [user, loading]);

  // Buscar histórico de compras
  useEffect(() => {

    const fetchHistoricoCompras = async () => {
      try {
        const responseHistorico = await api.get(`/pedidos?userId=${user.id}`, {
        });
        console.log("Historico",responseHistorico);
        
        setHistoricoCompras(responseHistorico.data);
      } catch (error) {
        setError(
          error.response?.data?.message || "Erro ao carregar histórico de compras."
        );
      }
    };

    fetchHistoricoCompras();
  }, [user, loading]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      await api.patch("/perfil/update", formData);
      setSuccessMessage("Perfil atualizado com sucesso!");
      setDisabled(true);
    } catch (error) {
      setError(
        error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente."
      );
    }
  };

  const handleEdit = () => {
    setDisabled(false);
  };

  if (loading) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div className="container-profile">
        <img className="avatar-icon-usuarios" src={foto} alt="" />

          <form onSubmit={handleSave}>
            <div className="input-group-profile">
              <h1 className="text-perfil">Nome</h1>
              <input
                className="input-perfil"
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Email</h1>
              <input
                className="input-perfil"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Telefone</h1>
              <input
                className="input-perfil"
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">CPF</h1>
              <input
                className="input-perfil"
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                disabled={disabled}
              />
            </div>

            <div className="input-group-profile">
              <h1 className="text-perfil">Logradouro</h1>
              <input
                className="input-perfil"
                type="text"
                name="logradouro"
                value={formData.logradouro}
                onChange={handleChange}
                disabled={disabled}
                placeholder="Endereço Completo"
              />
            </div>

            {!disabled && (
              <button type="submit" className="saveButton">Salvar</button>
            )}
          </form>
        </div>

        {user && user.role !== "ADMIN" && (
          <>
            <h1 className="historico">Histórico de Compras</h1>
            <div className="fica-historico">
              {historicoCompras.length > 0 ? (
                historicoCompras.map((venda) => (
                  <div key={venda.id} className="cartao-historico">
                    <p><strong>Data:</strong> {new Date(venda.data).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> R$ {(venda.total).toFixed(2)}</p>
                    <p><strong>Método de Pagamento:</strong> {venda.metodoPagamento}</p>
                    <h3>Itens Comprados:</h3>
                    {venda.itens.map((item) => (
                      <div key={item.id} className="item-historico">
                        <p><strong>Produto:</strong> {item.produto.nome}</p>
                        <p><strong>Quantidade:</strong> {item.quantidade}</p>
                        <p><strong>Preço:</strong> R$ {(item.preco).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <p style={{color:'white'}}>Nenhuma compra encontrada.</p>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
