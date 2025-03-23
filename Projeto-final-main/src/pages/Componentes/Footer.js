import React, { useState } from 'react';
import '../../styles/footer.css';

export default function Footer(){
    return(
        <footer>
        <span className="footer-slogan glitch" data-text="TEAM UP, FIGHT ON.">
          TEAM UP, FIGHT ON.
        </span>
        <hr />
        <div className="container-footer">
          <div className="column-footer">
            <h3>CATEGORIAS</h3>
            <ul>
              <li><a className='a-footer'>Placas-Mãe</a></li>
              <li><a className='a-footer'>Placas De Vídeo</a></li>
              <li><a className='a-footer'>Monitores</a></li>
              <li><a className='a-footer'>Computador</a></li>
            </ul>
          </div>
          <div className="column-footer">
            <h3>PRODUTO MAIS VENDIDOS</h3>
            <ul>
              <li><a className='a-footer' >Placa Mãe</a></li>
              <li><a className='a-footer' >Computador</a></li>
            </ul>
          </div>
          <div className="column-footer">
            <h3>SERVIÇO</h3>
            <ul>
              <li><a className='a-footer'>Informações de Garantia</a></li>
              <li><a className='a-footer'>Registo de Produto</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>©2024 BITZONE Technology Co., Ltd. All Rights Reserved. <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
        </div>
      </footer>
    )
}