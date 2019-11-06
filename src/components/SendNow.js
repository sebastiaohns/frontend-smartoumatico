import React, { Component } from 'react';
import '../styles/styles.css';
import './SendNow.css';

import { Upload, X } from 'react-feather';

export default class SendNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      prof: false,
      pontos: false,
      tele: false,
      educacao: false,
      objetos: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  
  sendData() {
    // insert logic to send data here
    this.setState({ 
                    show: false,
                    prof: false,
                    pontos: false,
                    tele: false,
                    educacao: false,
                    objetos: false,
                  });
  }

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
            <p className="Title">Selecione as atividades
            que devem ser enviadas AGORA para o SMART</p>
            <div>
              <div className="Label">
                <p>Profissionais
                  <span> Cadastrados</span>
                </p>
              </div>
              <label className="switch">
                <input
                  name="prof"
                  type="checkbox"
                  checked={this.state.prof}
                  onChange={this.handleInputChange}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div>
              <div className="Label">
                <p>Pontos
                  <span> Implantados</span>
                </p>
              </div>
              <label className="switch">
              <input
                  name="pontos"
                  type="checkbox"
                  checked={this.state.pontos}
                  onChange={this.handleInputChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <div className="Label">
                <p>Teleconsultorias
                  <span> Produzidas</span>
                </p>
              </div>
              <label className="switch">
                <input
                  name="tele"
                  type="checkbox"
                  checked={this.state.tele}
                  onChange={this.handleInputChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <div className="Label">
                <p>Atividades de
                  <span> Tele-educação</span>
                </p>
              </div>
              <label className="switch">
                <input
                  name="educacao"
                  type="checkbox"
                  checked={this.state.educacao}
                  onChange={this.handleInputChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <div className="Label">
                <p>Objetos de
                  <span> Aprendizagem</span>
                </p>
              </div>
              <label className="switch">
                <input
                  name="objetos"
                  type="checkbox"
                  checked={this.state.objetos}
                  onChange={this.handleInputChange}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <button className="ButtonConfirm" type="button" onClick={() => this.sendData()}>
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