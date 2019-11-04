import React, { Component } from 'react';
import '../styles/styles.css';
import './SendNow.css';

import { Upload, X } from 'react-feather';

export default class SendNow extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="SendNow">
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="Options">
            <p className="Title">Selecione as atividades do Núcleo de Telessaúde do Maranhão
            que devem ser incluídas no relatório de que será enviado AGORA
            para o SMART</p>
            <div>
              <p>Profissionais Cadastrados</p>
              <label className="switch">
                <input type="checkbox"/>
                <span className="slider"></span>
              </label>
            </div>
            <div>
              <p>Pontos Implantados</p>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <p>Teleconsultorias Produzidas</p>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <p>Atividades de Tele-educação Produzidas</p>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <p>Objetos de Aprendizagem Produzidos</p>
              <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <button className="ButtonConfirm" type="button" onClick={() => {}}>
            <p>Confirmar</p>
          </button>
        </Modal>
        <button className="Button" type="submit" onClick={this.showModal}>
          <Upload className="ButtonIcon"/>
          <p>Enviar agora</p>
        </button>
      </div>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <X className="ButtonClose" onClick={handleClose} />
      </section>
    </div>
  );
};