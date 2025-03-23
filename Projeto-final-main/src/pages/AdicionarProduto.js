import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/detalhesvendas.css';

export default function DetalhesVenda() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagens, setImagens] = useState([]);
  const [visibilidade, setVisibilidade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Função para buscar as categorias da API
    const fetchCategorias = async () => {
      try {
        const response = await api.get("/categorias");
        setCategorias(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategorias();
  }, []);

  // Função para lidar com seleção de arquivos de imagem
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImagens(selectedFiles);
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("preco", Number(preco));
    formData.append("estoque", Number(estoque));
    formData.append("descricao", descricao);
    formData.append("categoriaId", categoriaSelecionada);

    Array.from(imagens).forEach((imagem) => {
      formData.append("imagens", imagem);
    });

    try {
      await api.post("/produtos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Produto criado com sucesso!");
    } catch (error) {
      setError("Erro ao criar o produto. Tente novamente.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: 'black' }}>
        <div className="product-form-detalhe">
          <div className="product-name-detalhe">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome do Produto"
            />
          </div>

          <div className="product-image-detalhe">
            <div className="image-box-detalhe">
              <input type="file" multiple accept="image/*" onChange={handleImageChange} />
              <span>Selecione uma ou mais imagens para atualizar</span>
            </div>
            <div className="preco-categoria">
              <div className="product-category-detalhe">
                <label style={{ backgroundColor: 'black', color: 'white' }} htmlFor="categoria">Categoria:</label>
                <select
                  id="categoria"
                  value={categoriaSelecionada}
                  onChange={(e) => setCategoriaSelecionada(e.target.value)}
                  required
                >
                  <option value="">Selecione uma categoria</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  ))}
                </select>
              </div>
              <div className="image-options-detalhe">
                <p style={{ color: "white", fontSize: 25 }}>Vendido e entregue por: BITZONE</p>
                <input
                  style={{ height: 30, width: 200 }}
                  type="number"
                  step="0.01"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  required
                  placeholder="Preço"
                />
                <input
                  style={{ height: 30, width: 200, marginTop: 10 }}
                  type="number"
                  value={estoque}
                  onChange={(e) => setEstoque(e.target.value)}
                  required
                  placeholder="Estoque"
                />
              </div>
            </div>
          </div>

          <div className="product-details-detalhe">
            <h2>Detalhe do Produto</h2>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descrição do Produto"
            ></textarea>
          </div>

          {/* Botão para criar o produto */}
          <button onClick={handleCreateProduct} className="create-product-button">
            Criar Produto
          </button>

          {/* Mensagem de sucesso ou erro */}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
}
