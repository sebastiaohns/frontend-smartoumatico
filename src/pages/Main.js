import React from 'react';
import './Main.css';

import Countdown from '../components/Countdown';
import Report from '../components/Report';

function App() {
  return (
    <div className="Main" style={{height: "100vh"}}>
    <div className="App">     

      <Report/>
      <Countdown/>

    </div>
    </div>
  );
}

export default App;
