import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/super-heroes'}>Home</Link>
          </li>
          <li>
            <Link to={'/rq-super-heroes'}>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
