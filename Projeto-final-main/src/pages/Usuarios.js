import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import '../styles/usuarios.css';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import CartaoUsuario from './Componentes/CartaoUsuario';

export default function Usuarios() {
  const { user } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get("/users");
        setUsuarios(response.data);
        setLoading(false);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Erro desconhecido. Por favor, tente novamente.");
        }
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [user.token]);

  const handleDelete = async (userId) => {
    const confirmed = window.confirm("Tem certeza que deseja excluir este usuário?");
    if (confirmed) {
      try {
        await api.delete(`/users/${userId}`);
        setUsuarios((prevUsuarios) =>
          prevUsuarios.filter((usuario) => usuario.id !== userId)
        );
        alert("Usuário excluído com sucesso!");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Erro desconhecido. Por favor, tente novamente.");
        }
      }
    }
  };

  const handleEdit = (userId) => {
    navigate(`/admin/usuarios/${userId}`);
  };

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, marginTop: 60, backgroundColor: "black" }}>
        <div className="container-usuarios">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GESTÃO DE USUÁRIOS</h1>
          {usuarios.length > 0 ? (
            <div className="usuarios-list">
              {usuarios.map((usuario) => (
                <CartaoUsuario 
                  key={usuario.id} 
                  usuario={usuario} 
                  onEdit={handleEdit} 
                  onDelete={handleDelete} 
                />
              ))}
            </div>
          ) : (
            <p>Nenhum usuário encontrado.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
