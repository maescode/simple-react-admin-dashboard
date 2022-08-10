import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Datatable from '../components/datatable/Datatable';
import './list.scss';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="dataTable">
          <Datatable />
        </div>
      </div>
    </div>
  );
};

export default Single;
