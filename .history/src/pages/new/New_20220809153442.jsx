import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Datatable from '../components/datatable/Datatable';
import Chart from '../components/chart/Chart';

import './new.scss';

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add new User</h1>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default New;
