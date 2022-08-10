import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">2121</span>
        <span className="link">see all user</span>
      </div>
      <div className="right">
        <KeyboardArrowUpOutlinedIcon />
        <div className="percentage"></div>
        <PersonOutlinedIcon />
      </div>
    </div>
  );
};

export default Widget;
