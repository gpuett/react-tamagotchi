import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){
  return(
    <div>
      <style jsx>{`
        .feed-wrapper {

        }
      `}</style>
      <div className='feed-wrapper'>
        <button className='btn btn-primary' onClick={props.onHandleFeed} >Feed</button>
      </div>
    </div>
  );
}

Feed.propTypes = {
  onHandleFeed: PropTypes.func
};

export default Feed;
