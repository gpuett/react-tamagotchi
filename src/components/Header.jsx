import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
      <div className='header'>
        <Link to='/'>Home</Link>
        <h1>React Tamagotchi</h1>
        <Link to='/stats'>Stats</Link>
      </div>
    </div>
  );
}

export default Header;
