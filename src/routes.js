import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Postpone from './components/Postpone';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Main} />
      <Route path="/modal" component={Postpone} />
    </BrowserRouter>
  );
}