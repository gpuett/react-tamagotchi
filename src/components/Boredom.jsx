import React from 'react';
import Play from './Play';

class Boredom extends React.Component {
  render() {
    return(
      <div>
        <style jsx>{`
          .boredom-wrapper {

          }
        `}</style>
        <div className='boredom-wrapper'>
          <p>Boredom bar</p>
          <Play />
        </div>
      </div>
    );
  }
}

export default Boredom;
