import React from 'react';
import Sleep from './Sleep';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

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
    this.setState({fatigueLevel: currentFatigueLevel - 20});
  }

  incrementFatigue(){
    let currentFatigueLevel = this.state.fatigueLevel;
    this.setState({fatigueLevel: currentFatigueLevel+1})
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
        `}</style>
        <div className='fatigue-wrapper'>
          <ProgressBar now={this.state.fatigueLevel} />
          <Sleep />
        </div>
      </div>
    );
  }
}

export default Fatigue;
