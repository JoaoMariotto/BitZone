import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import api from "../services/api";
import '../styles/pagina-produto.css';
import { FiArrowLeftCircle } from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext"; // Para acessar o usuário logado

export default function DetalhesProdutos({ categoria }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useContext(AuthContext); // Acessa o usuário logado
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await api.get(`/produtos/${id}`);
        setProduto(response.data);
      } catch (error) {
        setError('Erro ao carregar o produto. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduto();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) {
      alert("Você precisa estar logado para adicionar ao carrinho.");
      return navigate("/login");
    }

    try {
      // Envia uma requisição para adicionar o produto ao carrinho
      await api.post("/carrinho", {
        userId: user.id, // Certifique-se de que o ID do usuário está correto
        produtoId: produto.id, // ID do produto
        quantidade: 1, // Quantidade a ser adicionada
      });
      alert("Produto adicionado ao carrinho com sucesso!");
    } catch (error) {
      setError('Erro ao adicionar o produto ao carrinho.');
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-page">
      <Header />
      <main className="product-main">
        {produto && (
          <>
            <div style={{display:'flex', flexDirection:'row'}}>            
              <div className="extra-menu-voltar-product">
              <a href="#" onClick={() => navigate(-1)} className="my-tora">
                <FiArrowLeftCircle size={30} />
              </a>
            </div>
              <h1 className="product-name">{produto.nome}</h1></div>

            <div className="product-info">
              <div className="product-image-container">

                <img
                  className="product-image-details"
                  src={produto.imagens[0]}
                  alt={produto.nome}
                />
              </div>
              <div className="product-details">
                <p className="product-title">
                  Vendido e entregue por: BITZONE
                  <span className="in-stock">
                    {produto.estoque > 0 ? 'Em estoque' : 'Fora de estoque'}
                  </span>
                </p>
                <p className="product-shipping">
                  Frete grátis
                  <span className="cep-info"> - Consulte disponibilidade de seu CEP</span>
                </p>
                <p className="product-price">
                  POR: <span className="discount-price">R${produto.preco.toFixed(2)}</span>
                </p>
                {user && user.role !== "ADMIN" && (
                  <button
                    onClick={handleAddToCart}
                    style={{ width: 400 }}
                    className="button-50"
                    role="button"
                  >
                    Adicionar ao Carrinho
                  </button>
                )}
              </div>
            </div>

            <div className="product-description">
              <h2>Detalhe do Produto</h2>
              <p>{produto.descricao}</p>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
