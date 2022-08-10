import React from 'react';
import './sidebar.scss';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
        <hr />
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Dashboad</span>
          </li>
          <li>
            <span>Dashboad</span>
          </li>
          <li>
            <span>Dashboad</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
