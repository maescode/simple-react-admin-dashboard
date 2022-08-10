import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Sidebar = () => {
  const Menus = [
    { name: 'Dashboard', icon: <DashboardIcon /> },
    { name: 'Users', icon: <PersonOutlineOutlinedIcon /> },
    { name: 'Product', icon: <ProductionQuantityLimitsOutlinedIcon /> },
    { name: 'Orders',icon:<AddShoppingCartIcon /> },
    { name: 'Delivery',icon:<DeliveryDiningIcon /> },
    { name: 'Stats' ,icon:<AnalyticsIcon /> },
    { name: 'Notifications',icon:<NotificationsIcon/> },
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
