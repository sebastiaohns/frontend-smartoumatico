import React from 'react';
import './Login.css';

import logo from '../assets/sofia.png';

export default function Login( ) {

  return (
    <div className="login-container">
      <form onSubmit={() => {}}>
        <img src={logo} alt="NTS-MA"/>
        <p>Sistema de Interoperabilidade de 
          Dados do Telessaúde Maranhão com o 
          Telessaúde Brasil Redes</p>
        <input placeholder="Login" />
        <input placeholder="Senha"/>
        <button className="btn" type="submit">Enviar</button>
      </form>
    </div>

  );
}