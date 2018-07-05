import React from 'react';
import PropTypes from 'prop-types';

function Play(props){
  return(
    <div>
      <style jsx>{`
        .play-wrapper {

        }
      `}</style>
      <div className='play-wrapper'>
        <button className='btn btn-primary' onClick={props.onHandlePlay}>Play</button>

      </div>
    </div>
  );
}

Play.propTypes = {
  onHandlePlay: PropTypes.func,
  isDead: PropTypes.bool
};

export default Play;
