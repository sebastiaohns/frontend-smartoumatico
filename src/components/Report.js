import React from 'react';
import './Report.css';

import { ReactComponent as User } from '../assets/user.svg';
import { ReactComponent as Flag } from '../assets/flag.svg';
import { ReactComponent as Bubble } from '../assets/speech-bubble.svg';
import { ReactComponent as Mortarboard } from '../assets/mortarboard.svg';
import { ReactComponent as Book } from '../assets/open-book.svg';

export default function Report() {

  return (
    <section className="Report">
      <p>Quantidade de atividades enviadas para o SMART no mês de agosto</p>
      <ul>
        <li>
          <User className="Icon"/>
          <p className="Label">Profissionais Cadastrados</p>
          <p className="Data">123</p>
        </li>
        <li>
          <Flag className="Icon"/>
          <p className="Label">Pontos Implantados</p>
          <p className="Data">123</p>
        </li>
        <li>
          <Bubble className="Icon"/>
          <p className="Label">Teleconsultorias Produzidas</p>
          <p className="Data">123</p>
        </li>
        <li>
          <Mortarboard className="Icon"/>
          <p className="Label">Atividades de Tele-educação Produzidas</p>
          <p className="Data">11223</p>
        </li>
        <li>
          <Book className="Icon"/>
          <p className="Label">Objetos de Aprendizagem Produzidos</p>
          <p className="Data">123</p>
        </li>
      </ul>
    </section>
  );
}