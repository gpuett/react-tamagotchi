import React from 'react';
import Play from './Play';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import PropTypes from 'prop-types';

function Boredom(props) {
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
        <ProgressBar now={props.boredomLevel} />
        <Play
          onHandlePlay={props.onHandlePlay}/>
      </div>
    </div>
  );
}

Boredom.propTypes = {
  onHandlePlay: PropTypes.func,
  boredomLevel: PropTypes.number
};

export default Boredom;
