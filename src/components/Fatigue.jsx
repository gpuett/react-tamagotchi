import React from 'react';
import Sleep from './Sleep';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

class Fatigue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fatigueLevel: 0
    };
    this.handleSleep = this.handleSleep.bind(this);
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
    if (currentFatigueLevel < 100) {
      this.setState({fatigueLevel: currentFatigueLevel+1});
    }
  }

  componentDidMount() {
    this.getTired = setInterval(() =>
      this.incrementFatigue(),
    3000
    );
  }

  render() {
    return(
      <div>
        <style jsx>{`
          .fatigue-wrapper {
            width: 200px;
          }
          .fatigue-wrapper p {
            font-weight: bold;
          }
        `}</style>
        <div className='fatigue-wrapper'>
          <p>Fatigue</p>
          <ProgressBar now={this.state.fatigueLevel} />
          <Sleep
            onHandleSleep={this.handleSleep}/>
        </div>
      </div>
    );
  }
}

Fatigue.propTypes = {
  onHandleSleep: PropTypes.func
};

export default Fatigue;
