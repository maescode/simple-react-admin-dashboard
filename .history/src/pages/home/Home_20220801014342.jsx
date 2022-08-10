import React from 'react';
import './home.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Widgets from '../components/widget/Widgets';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">{/* <Widget /> */}</div>
      </div>
    </div>
  );
};

export default Home;
