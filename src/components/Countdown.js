import React from 'react';
import Countdown from 'react-countdown-now';
import '../styles/styles.css';
import './Countdown.css';

import Postpone from './Postpone';
import SendNow from './SendNow';

export default function CountdownSection() {

  const date = '2019-11-08T01:02:03';

  return (
    <section>
      <div className="Container">
        <p className="Title">O próximo relatório será enviado automaticamente em </p>
        <div className="Day">
          <Countdown date={date}
            renderer={props => <span>{props.days}</span>}/>
          <p>Dias</p>
        </div>
        <div className="Hour">
          <Countdown date={date}
            renderer={props => <span>{props.hours}</span>}/>
          <p>Horas</p>
        </div>
        <div className="Minute">
          <Countdown date={date}
            renderer={props => <span>{props.minutes}</span>}/>
          <p>Mins</p>
        </div>
        <div className="Second">
          <Countdown date={date}
            renderer={props => <span>{props.seconds}</span>}/>
          <p>Segs</p>
        </div>
      </div >

      <div className="Function">

        <Postpone />
        <SendNow />

      </div>
    </section>
  );
}