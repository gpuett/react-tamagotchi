import React from 'react';
import Sif from './../assets/images/sif.gif';
import Nito from './../assets/images/nito.gif';
import Hunger from './Hunger';
import Boredom from './Boredom';
import Fatigue from './Fatigue';
import PropTypes from 'prop-types';

function Display(props) {
  let imageToDisplay = <img src={Sif}/>;
  if (props.isDead) {
    imageToDisplay = <div><img src={Nito}/> <p>Your pet died</p></div>;
  }
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
        {imageToDisplay}

        <div className='status-wrapper'>
          <Hunger
            hungerLevel={props.hungerLevel}
            onHandleFeed={props.onHandleFeed}
            isDead={props.isDead}/>
          <Boredom
            boredomLevel={props.boredomLevel}
            onHandlePlay={props.onHandlePlay}
            isDead={props.isDead}/>
          <Fatigue
            fatigueLevel={props.fatigueLevel}
            onHandleSleep={props.onHandleSleep}
            isDead={props.isDead}/>
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
  onHandleSleep: PropTypes.func,
  isDead: PropTypes.bool
};

export default Display;
