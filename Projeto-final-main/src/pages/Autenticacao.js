import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/autenticacao.css";
import { PiEyeClosedBold, PiEye  } from "react-icons/pi";
import { FiArrowLeftCircle } from "react-icons/fi";

export default function Autenticacao() {
  const [bodyClass, setBodyClass] = useState("");
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
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  
  const handleSignIn = () => setBodyClass("sign-in-js");
  const handleSignUp = () => setBodyClass("sign-up-js");

  useEffect(() => {
    document.body.className = bodyClass;
    return () => {
      document.body.className = "";
    };
  }, [bodyClass]);

  // Função para registro
  const handleRegisterSubmit = async (e) => {
  e.preventDefault();
  
  // Prepare os dados com o campo 'role'
  const registrationData = {
    ...formData,
    role: "USER", // Adicionando o campo role com valor USER
  };
  
  // Exibe os dados que serão enviados no console
  console.log("Dados a serem enviados:", registrationData);
  
  try {
    await api.post("/auth/registro", registrationData); // Envia os dados para a API
    alert("Cadastro realizado com sucesso!");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError("Erro desconhecido. Por favor, tente novamente.");
    }
  }
};

  // Função para login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(loginData.email, loginData.password);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Erro desconhecido. Por favor, tente novamente.");
      }
    }
  };

  // Controle dos campos do formulário
  const handleRegisterChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  return (
    <div className="container-autenticacao">
      <div className="extra-menu-voltar">
        <a href="/" className="my-tora">
        <FiArrowLeftCircle size={30} />
        </a>
      </div>
      <div className="content first-content">
        <div className="first-column">
          <h2 className="title title-primary">Bem-Vindo de Volta!</h2>
          <p className="description description-primary">Para se manter conectado conosco</p>
          <p className="description description-primary">por favor faça login com suas informações pessoais</p>
          <button onClick={handleSignIn} className="btn-login btn-primary">Logar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Cadastre sua Conta</h2>
          <form onSubmit={handleRegisterSubmit} className="form">
            <label className="label-input">
              <input type="text" placeholder="Nome" name="nome" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Email" name="email" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Telefone" name="telefone" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="CPF" name="cpf" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="CEP" name="cep" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Cidade" name="cidade" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Bairro" name="bairro" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Logradouro" name="logradouro" onChange={handleRegisterChange} required />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Complemento" name="complemento" onChange={handleRegisterChange} />
            </label>
            <label className="label-input">
              <input type="text" placeholder="Número" name="numero" onChange={handleRegisterChange} required />
            </label>
            <div className="margin-ne">
            <label className="label-input">
            <input
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        name="password"
        onChange={handleRegisterChange}
        required
        
      />      <button
      type="button"
      onClick={togglePasswordVisibility}
      className="toggle-password"
    >
      {showPassword ?  <PiEye /> : <PiEyeClosedBold />}
    </button>

            </label>
            <button className="btn-login btn-second">Cadastrar</button>
            </div>

          </form>
        </div>
      </div>
      <div className="content second-content">
        <div className="first-column">
          <h2 className="title title-primary">Olá, Amigo!</h2>
          <p className="description description-primary">Insira seus dados pessoais</p>
          <p className="description description-primary">e comece sua jornada conosco</p>
          <button onClick={handleSignUp} className="btn-login btn-primary">Cadastrar</button>
        </div>
        <div className="second-column">
          <h2 className="title title-second">Faça login</h2>
          <form onSubmit={handleLoginSubmit} className="form">
            <label className="label-input">
              <input type="text" placeholder="Email" name="email" onChange={handleLoginChange} required />
            </label>

            <label className="label-input">
            <input
        type={showPassword ? "text" : "password"}
        placeholder="Senha"
        name="password"
        onChange={handleLoginChange}
        required
        
      />      <button
      type="button"
      onClick={togglePasswordVisibility}
      className="toggle-password"
    >
      {showPassword ?  <PiEye /> : <PiEyeClosedBold />}
    </button>

            </label>
            <button className="btn-login btn-tercery">Logar</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
      
    </div>
  );
}
