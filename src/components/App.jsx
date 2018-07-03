import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Display from './Display';
import Header from './Header';
import Stats from './Stats';

function App(){
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Display} />
        <Route path='/stats' component={Stats} />
      </Switch>
    </div>
  );
}

export default App;
