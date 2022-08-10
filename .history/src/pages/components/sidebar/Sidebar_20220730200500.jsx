import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Sidebar = () => {
  const Menus = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Users', icon: <PersonOutlineOutlinedIcon /> },
    { name: 'Product', icon: <ProductionQuantityLimitsOutlinedIcon /> },
    { name: 'Orders',icon:<AddShoppingCartIcon /> },
    { name: 'Delivery',icon:</> },
    { name: 'Stats' ,icon:</> },
    { name: 'Notifications',icon:</> },
    { name: 'System Health',icon:</> },
    { name: 'Logs',icon:</> },
    { name: 'Settings',icon:</> },
    { name: 'Profile',icon:<AccountBoxOutlinedIcon /> },
    { name: 'Logout', icon: <LogoutOutlinedIcon /> }
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
