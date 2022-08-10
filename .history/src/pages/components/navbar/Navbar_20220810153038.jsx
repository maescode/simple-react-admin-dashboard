import React, { useContext } from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search.." className="" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <GTranslateIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img
              src={'https://picsum.photos/id/237/200/300'}
              className="avatar"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
