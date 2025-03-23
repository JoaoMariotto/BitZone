import React, { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../../styles/home.css';
import { HiOutlineLogout } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import Logo from '../../assets/images/BITZONE-PNG.jpg';

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Pega o usuário logado e a função logout
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Controle do menu mobile
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [categorias, setCategorias] = useState([]);

    // Fetch de produtos e agrupamento por categorias
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await api.get('/categorias');
                console.log(response);

                setCategorias(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.response?.data?.message || "Erro desconhecido. Por favor, tente novamente.");
                setLoading(false);
            }
        };
        fetchProdutos();
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };


    const handleLogout = () => {
        logout(); // Desloga o usuário
        navigate("/autenticacao"); // Redireciona para a página de autenticação
    };

    return (
        <header className="header">
            <div className="logo">
                <a href="/">BITZONE</a>
            </div>
            <div
                className="mobile-menu-icon"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
                ☰
            </div>

            <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="menu">
                    {/* Link para Produtos com submenu */}
                    <li className="menu-item" onClick={() => handleMenuClick("produtos")}>
                        Produtos
                        {activeMenu === "produtos" && (
                            <div className="dropdown">
                                <div className="submenu-container">
                                    {categorias.map(categoria => (
                                        <Link key={categoria.id} to={`/categoria/${categoria.id}`}>
                                            {categoria.nome}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Exibir "Carrinho", "Perfil" e "Histórico" apenas para usuários logados */}
                    {user && (
                        <>
                            <li className="menu-item">
                                <Link to="/perfil">Meu Perfil</Link>
                            </li>
                           
                        </>
                    )}


                    {/* Links visíveis apenas para Admin */}
                    {user && user.role !== "ADMIN" && (
                        <li className="menu-item">
                            <Link to="/carrinho">Carrinho</Link>
                        </li>
                    )}
                    {user && user.role === "ADMIN" && (
                        <>
                            <li className="menu-item">
                                <Link to="/admin/vendas">Vendas</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/usuarios">Gerenciar Usuários</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/admin/adicionar-produto">Adicionar Produto</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>

            <div className="extra-menu">
                {user ? (
                    <a href="/" className="my-aorus" onClick={handleLogout}><HiOutlineLogout size={30} /></a>
                ) : (
                    <Link to="/autenticacao" className="my-aorus"><FaUser size={25} /></Link>
                )}
            </div>
        </header>
    );
};

export default Header;
