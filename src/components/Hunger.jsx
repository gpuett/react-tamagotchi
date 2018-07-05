import React from 'react';
import Feed from './Feed';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Hunger(props) {
  let buttonToDisplay = <Feed onHandleFeed={props.onHandleFeed}/>;
  if (props.isDead) {
    buttonToDisplay = null;
  }
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
        <ProgressBar now={props.hungerLevel} />
        {buttonToDisplay}
      </div>
    </div>
  );
}

Hunger.propTypes = {
  onHandleFeed: PropTypes.func,
  hungerLevel: PropTypes.number,
  isDead: PropTypes.bool
};

export default Hunger;
