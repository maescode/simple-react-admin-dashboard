import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../component/sidebar/Sidebar';
import './list.scss';

const List = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets"></div>
      </div>
    </div>
  );
};

export default List;
