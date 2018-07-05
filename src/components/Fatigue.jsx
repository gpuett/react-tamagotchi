import React from 'react';
import Sleep from './Sleep';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Fatigue(props) {
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
        <ProgressBar now={props.fatigueLevel} />
        <Sleep
          onHandleSleep={props.onHandleSleep}/>
      </div>
    </div>
  );
}

Fatigue.propTypes = {
  onHandleSleep: PropTypes.func,
  fatigueLevel: PropTypes.number,
};

export default Fatigue;
