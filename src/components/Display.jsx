import React from 'react';
import Sif from './../assets/images/sif.gif';
import Hunger from './Hunger';
import Boredom from './Boredom';
import Fatigue from './Fatigue';

class Display extends React.Component {

  render() {
    return(
      <div>
        <style jsx>{`
            .display-wrapper{
              text-align: center;
            }
            .status-wrapper {
              display: flex;
              justify-content: space-around;
            }
            `}</style>
        <div className='display-wrapper'>
          <img src={Sif}/>
          <div className='status-wrapper'>
            <Hunger />
            <Boredom />
            <Fatigue />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
