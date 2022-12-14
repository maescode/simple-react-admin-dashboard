import React from 'react';
import './home.scss';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Widget from '../components/widget/Widget';
import Featured form '../components/featured/Featured'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
          <div className="charts">
            <Featured />
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
