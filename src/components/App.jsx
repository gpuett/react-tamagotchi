import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Display from './Display';
import Header from './Header';
import Stats from './Stats';

function App(){
  return (
    <div>
      <style global jsx>{`
        .app-wrapper {
          font-family: 'Helvetica Neue', sans-serif;
          background-color: lightgrey;
          height: 100vh;
        }
        .app-wrapper h1 {
          text-align: center;
        }
      `}</style>
      <div className='app-wrapper'>
        <Header />
        <h1>React Tamagotchi</h1>
        <Switch>
          <Route exact path='/' component={Display} />
          <Route path='/stats' component={Stats} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
