import React from 'react';
import Play from './Play';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class Boredom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      boredomLevel: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay(){
    let currentBoredomLevel = this.state.boredomLevel;
    this.setState({boredomLevel: currentBoredomLevel - 20});
  }

  incrementBoredom(){
    let currentBoredomLevel = this.state.boredomLevel;
    this.setState({boredomLevel: currentBoredomLevel+2});
  }

  componentDidMount() {
    this.getBored = setInterval(() =>
      this.incrementBoredom(),
    1000
    );
  }

  render() {
    return(
      <div>
        <style jsx>{`
          .boredom-wrapper {
            width: 200px;
          }
        `}</style>
        <div className='boredom-wrapper'>
          <ProgressBar now={this.state.boredomLevel} />
          <Play />
        </div>
      </div>
    );
  }
}

export default Boredom;
