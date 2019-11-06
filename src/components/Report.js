import React from 'react';
import '../styles/styles.css';
import './Report.css';

import { Award, BookOpen, Flag, MessageCircle, Users } from 'react-feather';

export default function Report() {

  return (
    <section>
      <div className="Container">
        <p className="Title">Quantidade de atividades enviadas para o SMART no mês de agosto</p>
        <ul>
          <li>
            <Users className="ListIcon"/>
            <div className="Label">
              <p>Profissionais
                <span> Cadastrados</span>
              </p>
            </div>
            <p className="Data">17</p>
          </li>
          <li>
            <Flag className="ListIcon"/>
            <div className="Label">
              <p>Pontos
                <span> Implantados</span>
              </p>
            </div>
            <p className="Data">34</p>
          </li>
          <li>
            <MessageCircle className="ListIcon"/>
            <div className="Label">
              <p>Teleconsultorias
                <span> Produzidas</span>
              </p>
            </div>
            <p className="Data">3481</p>
          </li>
          <li>
            <Award className="ListIcon"/>
            <div className="Label">
              <p>Atividades de
                <span> Tele-educação</span>
              </p>
            </div>
            <p className="Data">597</p>
          </li>
          <li>
            <BookOpen className="ListIcon"/>
            <div className="Label">
              <p>Objetos de
                <span> Aprendizagem</span>
              </p>
            </div>
            <p className="Data">850</p>
          </li>
        </ul>
      </div>

      <div className="Select">
        <select>
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
        <button className="Button BtnReport" type="submit">Baixar Relatório</button>
      </div>
    </section>
  );
}