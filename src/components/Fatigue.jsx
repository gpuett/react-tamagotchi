import React from 'react';
import Sleep from './Sleep';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

class Fatigue extends React.Component {
  render() {
    return(
      <div>
        <style jsx>{`
          .fatigue-wrapper {
            width: 200px;
          }
        `}</style>
        <div className='fatigue-wrapper'>
          <ProgressBar now={60} />
          <Sleep />
        </div>
      </div>
    );
  }
}

export default Fatigue;
