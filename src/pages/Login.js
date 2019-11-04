import React from 'react';
import './Login.css';

import logo from '../assets/sofia.png';

export default function Login( ) {

  return (
    <div className="login-container">
      <form onSubmit={() => {}}>
        <img src={logo} alt="NTS-MA"/>
        <p>SIDA</p>
        <input placeholder="Login" />
        <input placeholder="Senha"/>
        <button className="ButtonLogin" type="submit">Enviar</button>
      </form>
    </div>

  );
}