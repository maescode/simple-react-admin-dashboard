import React from 'react';
import './sidebar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
