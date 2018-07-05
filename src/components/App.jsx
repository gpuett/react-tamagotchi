import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Display from './Display';
import Header from './Header';
import Stats from './Stats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boredomLevel: 0,
      hungerLevel: 0,
      fatigueLevel: 0,
      isDead: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSleep = this.handleSleep.bind(this);
    this.handleFeed = this.handleFeed.bind(this);
  }

  handlePlay(){
    let currentBoredomLevel = this.state.boredomLevel;
    if (currentBoredomLevel < 20) {
      this.setState({boredomLevel: 0});
    } else {
      this.setState({boredomLevel: currentBoredomLevel - 20});
    }
  }

  incrementBoredom(){
    let currentBoredomLevel = this.state.boredomLevel;
    if (currentBoredomLevel >= 100) {
      this.setState({isDead: true});
    } else if (currentBoredomLevel < 100 && this.state.isDead === false) {
      this.setState({boredomLevel: currentBoredomLevel+2});
    }
  }

  handleSleep(){
    let currentFatigueLevel = this.state.fatigueLevel;
    if (currentFatigueLevel < 20) {
      this.setState({fatigueLevel: 0});
    } else {
      this.setState({fatigueLevel: currentFatigueLevel - 20});
    }
  }

  incrementFatigue(){
    let currentFatigueLevel = this.state.fatigueLevel;
    if (currentFatigueLevel >= 100) {
      this.setState({isDead: true});
    } else if (currentFatigueLevel < 100 && this.state.isDead === false) {
      this.setState({fatigueLevel: currentFatigueLevel+1});
    }
  }

  handleFeed(){
    let currentHungerLevel = this.state.hungerLevel;
    if (currentHungerLevel < 20) {
      this.setState({hungerLevel: 0});
    } else {
      this.setState({hungerLevel: currentHungerLevel - 20});
    }
  }

  incrementHunger(){
    let currentHungerLevel = this.state.hungerLevel;
    if (currentHungerLevel >= 100) {
      this.setState({isDead: true});
    } else if (currentHungerLevel < 100 && this.state.isDead === false) {
      this.setState({hungerLevel: currentHungerLevel+1});
    }
  }

  componentDidMount() {
    this.increment = setInterval(() =>
      this.incrementBoredom(),
    1000
    );
    this.getTired = setInterval(() =>
      this.incrementFatigue(),
    3000
    );
    this.getHungry = setInterval(() =>
      this.incrementHunger(),
    1000
    );
  }

  render() {
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
            <Route exact path='/' render={() =><Display
              boredomLevel={this.state.boredomLevel}
              onHandlePlay={this.handlePlay}
              fatigueLevel={this.state.fatigueLevel}
              onHandleSleep={this.handleSleep}
              hungerLevel={this.state.hungerLevel}
              onHandleFeed={this.handleFeed}
              isDead={this.state.isDead}/>} />
            <Route path='/stats' component={Stats} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
