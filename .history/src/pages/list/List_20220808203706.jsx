import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../component/sidebar/Sidebar';
import './list.scss';

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="dataTable"></div>
      </div>
    </div>
  );
};

export default List;
