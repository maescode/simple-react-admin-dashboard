import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Widget = ({ type }) => {
  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
      };

      break;

    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">2121</span>
        <span className="link">see all user</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          20%
          <KeyboardArrowUpOutlinedIcon />
        </div>
        <PersonOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Widget;
