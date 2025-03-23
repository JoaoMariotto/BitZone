import React from "react";
import '../../styles/usuarios.css'


export default function HistoryCard( ){
    return(
        <div>
          <div className="user-info-usuarios">
            <div className="user-avatar-usuarios">
              <div className="avatar-icon-usuarios">Foto Né</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:" space-between",width:"60%"}}>
            <div style={{fontSize:"1.2rem"}} className="user-details-usuarios">
              <h2>Nome de Usuário: raul12345</h2>
              <p>Email: teste.exemplo@exemplo.com</p>
              <p>Nome Completo: Nome Completo Aqui</p>
              <p>Telefone: (00) 0000-0000</p>
              <p>Endereço: Rua Exemplo, 000, Bairro, Cidade, UF</p>
              <p>CPF: 000.000.000-00</p>
              <p>Último Acesso: 00-00-0000</p>
              <p>Pedido Total: R$ 1.111,11</p>
              <p>Informações Sobre: Título da Seção Aqui</p>
              <p>Última Transação: 00-00-0000</p>
            </div>


              <div style={{fontSize:"1.2rem"}} className="permissions-usuarios">
                <h2>Permissão: Cliente</h2>
                <p>Email: teste.permissao@exemplo.com</p>
                <p>Nome Completo: Nome Completo Aqui</p>
                <p>Telefone: (00) 0000-0000</p>
                <p>CPF: 000.000.000-00</p>
                <p>Último Acesso: 00-00-0000</p>
                <p>Endereço: Rua Exemplo, 000</p>
              </div>
            </div>

            <div className="actions-usuarios">
              <a href="/"><button class="button-55" role="button">Editar</button></a>
              <a href="/"><button class="button-55" role="button">Excluir</button></a>
            </div>
          </div>
        </div>
    )
}
