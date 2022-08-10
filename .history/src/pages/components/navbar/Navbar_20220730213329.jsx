import React from 'react';
import './sidebar.scss';
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search.." className="" />
          <SearchIcon />
          <div className="items">
            <div className="item">
              <GTranslateIcon />
              English
            </div>
            <div className="item">
              <DarkModeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
