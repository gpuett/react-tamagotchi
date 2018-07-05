import React from 'react';
import Sif from './../assets/images/sif.gif';
import Hunger from './Hunger';
import Boredom from './Boredom';
import Fatigue from './Fatigue';
import PropTypes from 'prop-types';

function Display(props) {
  return(
    <div>
      <style jsx>{`
          .display-wrapper{
            text-align: center;
          }
          .status-wrapper {
            display: flex;
            justify-content: space-around;
            padding-top: 40px;
          }
          `}</style>
      <div className='display-wrapper'>
        <img src={Sif}/>
        <div className='status-wrapper'>
          <Hunger
            hungerLevel={props.hungerLevel}
            onHandleFeed={props.onHandleFeed}/>
          <Boredom
            boredomLevel={props.boredomLevel}
            onHandlePlay={props.onHandlePlay}/>
          <Fatigue
            fatigueLevel={props.fatigueLevel}
            onHandleSleep={props.onHandleSleep}/>
        </div>
      </div>
    </div>
  );
}

Display.propTypes = {
  boredomLevel: PropTypes.number,
  hungerLevel: PropTypes.number,
  fatigueLevel: PropTypes.number,
  onHandlePlay: PropTypes.func,
  onHandleFeed: PropTypes.func,
  onHandleSleep: PropTypes.func
};

export default Display;
