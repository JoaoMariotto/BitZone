import React from "react";
import foto from '../../assets/images/profile.png'
import '../../styles/usuarios.css';

export default function CartaoUsuario({ usuario, onDelete }) {
  return (
    <div className="user-info-usuarios">
      <div className="user-avatar-usuarios">
        <img className="avatar-icon-usuarios" src={foto} alt="" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",width:400}}>
        <div style={{ fontSize: "1.0rem" }} className="user-details-usuarios">
          <h2>Nome de Usuário: {usuario.nome}</h2>
          <p>Email: {usuario.email}</p>
          <p>CPF: {usuario.cpf}</p>
        </div>


      </div>

      <div className="actions-usuarios">
        <button className="button-55" role="button" onClick={() => onDelete(usuario.id)}>Excluir</button>
      </div>
    </div>
  );
}
