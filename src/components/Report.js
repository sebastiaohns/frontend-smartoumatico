import React from 'react';
import './Report.css';

import { Award, BookOpen, Flag, MessageCircle, Users } from 'react-feather';

export default function Report() {

  return (
    <section>
      <div className="Report">
        <p className="Title">Quantidade de atividades enviadas para o SMART no mês de agosto</p>
        <ul>
          <li>
            <Users className="Icon"/>
            <p className="Label">Profissionais Cadastrados</p>
            <p>123</p>
          </li>
          <li>
            <Flag className="Icon"/>
            <p className="Label">Pontos Implantados</p>
            <p>123</p>
          </li>
          <li>
            <MessageCircle className="Icon"/>
            <p className="Label">Teleconsultorias Produzidas</p>
            <p>123</p>
          </li>
          <li>
            <Award className="Icon"/>
            <p className="Label">Atividades de Tele-educação Produzidas</p>
            <p>11223</p>
          </li>
          <li>
            <BookOpen className="Icon"/>
            <p className="Label">Objetos de Aprendizagem Produzidos</p>
            <p>123</p>
          </li>
        </ul>
      </div>

      <div className="Month">
        <select name="Mês">
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </select>
        <button type="submit">Baixar Relatório</button>
      </div>
    </section>
  );
}