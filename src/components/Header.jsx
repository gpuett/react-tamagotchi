import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-around;
          padding-top: 20px;
        }
      `}</style>
      <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/stats'>Stats</Link>
      </div>
    </div>
  );
}

export default Header;
