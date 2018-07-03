import React from 'react';
import Feed from './Feed';
import { ProgressBar } from 'react-bootstrap';

class Hunger extends React.Component {
  render() {
    return(
      <div>
        <style jsx>{`
          .hunger-wrapper {

          }
        `}</style>
        <div className='hunger-wrapper'>
          <ProgressBar now={60} />
          <Feed />
        </div>
      </div>
    );
  }
}

export default Hunger;
