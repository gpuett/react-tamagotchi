import React from 'react';
import Feed from './Feed';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

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
    if (currentHungerLevel < 20) {
      this.setState({hungerLevel: 0});
    } else {
      this.setState({hungerLevel: currentHungerLevel - 20});
    }
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
          .hunger-wrapper p {
            font-weight: bold;
          }
        `}</style>
        <div className='hunger-wrapper'>
          <p>Hunger</p>
          <ProgressBar now={this.state.hungerLevel} />
          <Feed
            onHandleFeed={this.handleFeed}/>
        </div>
      </div>
    );
  }
}

Hunger.propTypes = {
  onHandleFeed: PropTypes.func
};

export default Hunger;
