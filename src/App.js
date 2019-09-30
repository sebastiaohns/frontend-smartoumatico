import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';
import logo from './logo.svg';
import './App.css';

function App() {

  const date = '2019-10-29T01:02:03';

  return (
    <div className="App">
      <div className="Container">
        <p className="TitleCountDown">O próximo relatório será enviado automaticamente em </p>
         <div className="CountDown">
          <div className="Day">
            <Countdown
              date={date}
              renderer={props => <span>{props.days}</span>}
              zeroPadTime={2}
            />
            <p>Dias</p>
          </div>
          <div className="Hour">
            <Countdown
              date={date}
              renderer={props => <span>{props.hours}</span>}
              zeroPadTime={2}
            />
            <p>Horas</p>
          </div>
          <div className="Minute">
            <Countdown
              date={date}
              renderer={props => <span>{props.minutes}</span>}
              zeroPadTime={2}
            />
            <p>Mins</p>
          </div>
          <div className="Second">
            <Countdown
              date={date}
              renderer={props => <span>{props.seconds}</span>}
              zeroPadTime={2}
            />
            <p>Segs</p>
          </div>
        </div>
      </div>

      




    </div>
  );
}

export default App;
