import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Datatable from '../components/datatable/Datatable';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
