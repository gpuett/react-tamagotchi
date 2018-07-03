import React from 'react';
import Play from './Play';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

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
    if (currentBoredomLevel < 20) {
      this.setState({boredomLevel: 0})
    } else {
      this.setState({boredomLevel: currentBoredomLevel - 20});
    }
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
          .boredom-wrapper p{
            font-weight: bold;
          }
        `}</style>
        <div className='boredom-wrapper'>
          <p>Boredom</p>
          <ProgressBar now={this.state.boredomLevel} />
          <Play
          onHandlePlay={this.handlePlay}/>
        </div>
      </div>
    );
  }
}

Boredom.propTypes = {
  onHandlePlay: PropTypes.func
};

export default Boredom;
