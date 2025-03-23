import React, { useEffect, useState } from "react";
import api from "../services/api";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/finalizarcompra.css';

export default function FinalizarCompra() {
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    referencia: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await api.get("/perfil"); // Obtém as informações do perfil do usuário
        const { endereco } = response.data; // Acessa o endereço no perfil
        setEndereco({
          cep: endereco.cep,
          logradouro: endereco.logradouro,
          numero: endereco.numero,
          complemento: endereco.complemento,
          referencia: endereco.referencia,
          bairro: endereco.bairro,
          cidade: endereco.cidade,
          uf: endereco.uf,
        });
      } catch (error) {
        setError("Erro ao carregar endereço do perfil. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };
    fetchPerfil();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div className="container-finalizar">
          <section className="product-service-finalizar" style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }}>
            <nav>
              <h1 style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>PRODUTO E SERVIÇO</h1>
              <div className="product-info-finalizar">
                <p style={{ color: "white", fontSize: 20 }}>Vendido e entregue por: BITZONE</p>
                <p style={{ color: "white", fontSize: 20 }}>Produto que foi vendido: Breve descrição sobre ele ID - OP561FISOPUSISI</p>
              </div>
            </nav>
          </section>

          <section className="details-finalizar" style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }}>
            <h2 style={{ color: 'white' }}>ENDEREÇO COMPLETO</h2>
            <div className="address-form-finalizar">
              <input type="text" placeholder="CEP" value={endereco.cep} readOnly />
              <input type="text" placeholder="Logradouro" value={endereco.logradouro} readOnly />
              <input type="text" placeholder="Número" value={endereco.numero} readOnly />
              <input type="text" placeholder="Complemento" value={endereco.complemento} readOnly />
              <input type="text" placeholder="Referência" value={endereco.referencia} readOnly />
              <input type="text" placeholder="Bairro" value={endereco.bairro} readOnly />
              <input type="text" placeholder="Cidade" value={endereco.cidade} readOnly />
              <input type="text" placeholder="UF" value={endereco.uf} readOnly />
            </div>
          </section>

          <section className="payment-finalizar" style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }}>
            <h2 style={{ color: 'white' }}>FORMA DE PAGAMENTO</h2>
            <div className="payment-options-finalizar">
              <label htmlFor="payment-method" style={{ color: 'white', marginRight: 20 }}>Escolha o método de pagamento:</label>
              <select id="payment-method" style={{ padding: 15 }}>
                <option value="pix">PIX</option>
                <option value="boleto">Boleto Bancário</option>
                <option value="credit-card">Cartão de Crédito</option>
              </select>
            </div>
          </section>

          <section className="order-info-finalizar" style={{ marginBottom: 20, padding: 10, backgroundColor: "#222" }}>
            <h2 style={{ color: 'white' }}>INFORMAÇÕES DO SEU PEDIDO</h2>
            <p style={{ color: 'white' }}>Informações de entrega: Entrega entre 10:00 - 18:00</p>
            <p style={{ color: 'white' }}>Data de entrega estimada: 20/10/2024</p>
          </section>

          <div className="finalize-btn">
            <a href="/"><button className="button-55" role="button">Finalizar</button></a>
            <a href="/produto"><button className="button-55" role="button">Voltar</button></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
