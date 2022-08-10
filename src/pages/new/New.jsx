import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
//import Datatable from '../components/datatable/Datatable';
//import Chart from '../components/chart/Chart';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

import './new.scss';
//import { InputSharp } from '@mui/icons-material';

const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'http://dummyimage.com/500x500.png/dddddd/000000'
              }
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
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map((input) => {
                return (
                  <div key={input.id} className="formInput">
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      name={input.name}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}

              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
