import React from 'react';
import './widget.scss';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">Users</span>
        <span className="counter">2121</span>
        <span className="link">see all user</span>
      </div>
      <div className="right">right</div>
      <div></div>
    </div>
  );
};

export default Widget;
