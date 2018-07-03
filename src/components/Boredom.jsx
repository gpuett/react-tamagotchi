import React from 'react';
import Play from './Play';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class Boredom extends React.Component {
  render() {
    return(
      <div>
        <style jsx>{`
          .boredom-wrapper {
            width: 200px;
          }
        `}</style>
        <div className='boredom-wrapper'>
          <ProgressBar now={60} />
          <Play />
        </div>
      </div>
    );
  }
}

export default Boredom;
