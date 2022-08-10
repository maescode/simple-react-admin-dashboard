import React from 'react';
import './sidebar.scss';
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

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
            <div className="item">
              <FullscreenExitIcon />
            </div>
            <div className="item">
              <NotificationsActiveOutlinedIcon />
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
