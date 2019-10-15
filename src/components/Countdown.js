import React from 'react';
import Countdown from 'react-countdown-now';
import './Countdown.css';

export default function CountdownSection() {

  const date = '2019-10-29T01:02:03';

  return (
    <section className="Countdown">
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
    </section>
  );
}