import React from 'react';
import Feed from './Feed';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Hunger(props) {

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
        <Feed
          onHandleFeed={props.onHandleFeed}/>
      </div>
    </div>
  );
}

Hunger.propTypes = {
  onHandleFeed: PropTypes.func,
  hungerLevel: PropTypes.number,
};

export default Hunger;
