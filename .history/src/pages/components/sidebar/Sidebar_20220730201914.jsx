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
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DvrIcon from '@mui/icons-material/Dvr';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
const Sidebar = () => {
  const Menus = [
    // { name: 'Dashboard', icon: <DashboardIcon className="icon" /> },
    // { name: 'Users', icon: <PersonOutlineOutlinedIcon className="icon" /> },
    // {
    //   name: 'Product',
    //   icon: <ProductionQuantityLimitsOutlinedIcon className="icon" />,
    // },
    // { name: 'Orders', icon: <AddShoppingCartIcon className="icon" /> },
    // { name: 'Delivery', icon: <DeliveryDiningIcon className="icon" /> },
    // { name: 'Stats', icon: <AnalyticsIcon className="icon" /> },
    // { name: 'Notifications', icon: <NotificationsIcon className="icon" /> },
    // { name: 'System Health', icon: <HealthAndSafetyIcon className="icon" /> },
    // { name: 'Logs', icon: <DvrIcon className="icon" /> },
    // { name: 'Settings', icon: <SettingsSuggestIcon className="icon" /> },
    // { name: 'Profile', icon: <AccountBoxOutlinedIcon className="icon" /> },
    // { name: 'Logout', icon: <LogoutOutlinedIcon className="icon" /> },
  ];
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
