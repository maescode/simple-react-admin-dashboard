import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
const Sidebar = () => {
  const Menus = [{ name: 'Dashboard' }, { name: 'Users' }, { name: 'Product' }];
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {Menus.map((item) => {
            return <div key={item.id}>I am one Object in the Array {item}</div>;
          })}
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
