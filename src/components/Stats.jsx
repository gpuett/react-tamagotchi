import React from 'react';
import Age from './Age';
import Art from './../assets/images/artorias.gif';

class Stats extends React.Component {
  render(){
    return(
      <div>
        <style jsx>{`
          .stats-wrapper {
            text-align: center;
          }
        `}</style>
        <div className='stats-wrapper'>
          <img src={Art}/>
          <p>Stats go here!</p>
          <Age />
        </div>
      </div>
    );
  }
}

export default Stats;
