import React from 'react';
import Feed from './Feed';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class Hunger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hungerLevel: 0
    };
    this.handleFeed = this.handleFeed.bind(this);
  }

  handleFeed(){
    let currentHungerLevel = this.state.hungerLevel;
    this.setState({hungerLevel: currentHungerLevel - 20});
  }

  incrementHunger(){
    let currentHungerLevel = this.state.hungerLevel;
    this.setState({hungerLevel: currentHungerLevel+1});
  }

  componentDidMount() {
    this.getHungry = setInterval(() =>
      this.incrementHunger(),
    1000
    );
  }

  render() {
    return(
      <div>

        <style jsx>{`
          .hunger-wrapper {
            width: 200px;
          }
        `}</style>
        <div className='hunger-wrapper'>
          <ProgressBar now={this.state.hungerLevel} />
          <Feed />
        </div>
      </div>
    );
  }
}

export default Hunger;
