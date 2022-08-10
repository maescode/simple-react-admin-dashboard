import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const Sidebar = () => {
  const Menus = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Users', icon: <PersonOutlineOutlinedIcon /> },
    { name: 'Product' },
    { name: 'Orders' },
    { name: 'Delivery' },
    { name: 'Stats' },
    { name: 'Notifications' },
    { name: 'System Health' },
    { name: 'Logs' },
    { name: 'Settings' },
    { name: 'Profile' },
    { name: 'Logout' },
  ];
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          {Menus.map((menu) => {
            return (
              <li>
                {menu.icon}
                <span>{menu.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
