import React from 'react';
import Sleep from './Sleep';

class Fatigue extends React.Component {
  render() {
    return(
      <div>
        <style jsx>{`
          .fatigue-wrapper {

          }
        `}</style>
        <div className='fatigue-wrapper'>
          <p>Fatigue bar</p>
          <Sleep />
        </div>
      </div>
    );
  }
}

export default Fatigue;
