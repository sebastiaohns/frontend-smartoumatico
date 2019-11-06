import React, { Component } from 'react';
import '../styles/styles.css';
import './Postpone.css';

import { Clock, X } from 'react-feather';

export default class Postpone extends Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="Postpone">
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <div className="Inside">
          <p className="Title">Adiar o envio do relatório de atividades para o SMART em:</p>
          <div className="Field">
            <div>
              <input maxLength="2"/>
              <p>Dias</p>
            </div>
            <div>
            <input maxLength="2"/>
              <p>Horas</p>
            </div>
            <div>
            <input maxLength="2"/>
              <p>Min</p>
            </div>
          </div>
          <button className="ButtonConfirm" type="button" onClick={() => {}}>
            <p>Confirmar</p>
          </button>
          </div>
        </Modal>
        <button className="Button " type="button" onClick={this.showModal}>
          <Clock className="ButtonIcon"/>
          <p>Adiar envio</p>
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