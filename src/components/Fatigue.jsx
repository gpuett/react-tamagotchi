import React from 'react';
import Sleep from './Sleep';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Fatigue(props) {
  let buttonToDisplay = <Sleep onHandleSleep={props.onHandleSleep}/>;
  if (props.isDead) {
    buttonToDisplay = null;
  }
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
        {buttonToDisplay}
      </div>
    </div>
  );
}

Fatigue.propTypes = {
  onHandleSleep: PropTypes.func,
  fatigueLevel: PropTypes.number,
  isDead: PropTypes.bool
};

export default Fatigue;
