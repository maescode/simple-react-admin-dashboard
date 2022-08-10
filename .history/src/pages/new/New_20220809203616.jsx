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
          <div className="left">
            <img
              src="http://dummyimage.com/160x100.png/dddddd/000000"
              alt="alt"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label>Username</label>
                <input type="text" name="username" placeholder="john_doe" />
              </div>

              <div className="formInput">
                <label>Name and Surname</label>
                <input
                  type="text"
                  name="name_and_surname"
                  placeholder="John Doe"
                />
              </div>

              <div className="formInput">
                <label>email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="formInput">
                <label>email</label>
                <input
                  type="email"
                  name="username"
                  placeholder="example@gmail.com"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
