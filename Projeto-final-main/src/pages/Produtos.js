import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import api from '../services/api';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import '../styles/produto.css';
import Cartao from "./Componentes/Cartao";

export default function Produto() {
    const { id } = useParams(); // Captura o ID da URL
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
      const fetchProdutos = async () => {
        try {
          const response = await api.get('/produtos'); // Obtém todos os produtos
          // Filtra os produtos com base no ID da categoria
          const produtosFiltrados = response.data.filter(produto => produto.categoriaId === Number(id));
          setProdutos(produtosFiltrados);
        } catch (error) {
          setError('Erro ao carregar produtos. Tente novamente.');
        } finally {
          setLoading(false);
        }
      };
      fetchProdutos();
    }, [id]); // Executa a busca quando o ID muda

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
      <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", minHeight:"100vh"}}>
        <Header/>
        <main style={{flex:1, marginTop:60, backgroundColor:"black"}}>
          <div className="linhaCartao">
            {produtos.map(produto => (
              <Cartao key={produto.id} produto={produto} />
            ))}
          </div>
          <br></br>
          <br></br>
        </main>
        <Footer/>
      </div>
    );
}
