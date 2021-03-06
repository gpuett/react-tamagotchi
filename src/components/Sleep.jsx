import React from 'react';
import PropTypes from 'prop-types';

function Sleep(props){
  return(
    <div>
      <style jsx>{`
        .sleep-wrapper {

        }
      `}</style>
      <div className='sleep-wrapper'>
        <button className='btn btn-primary' onClick={props.onHandleSleep}>Sleep</button>

      </div>
    </div>
  );
}

Sleep.propTypes = {
  onHandleSleep: PropTypes.func,
  isDead: PropTypes.bool
};

export default Sleep;
