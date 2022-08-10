import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Datatable from '../components/datatable/Datatable';
import Chart from '../components/chart/Chart';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

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
              src="http://dummyimage.com/500x500.png/dddddd/000000"
              alt="alt"
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>

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
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" name="phone" placeholder="+2348066181836" />
              </div>

              <div className="formInput">
                <label>Password</label>
                <input type="password" name="password" placeholder="password" />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Bodija Ashi, Ibadan"
                />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Bodija Ashi, Ibadan"
                />
              </div>

              <div className="formInput">
                <label>Country</label>
                <input type="text" name="country" placeholder="Country" />
              </div>

              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
