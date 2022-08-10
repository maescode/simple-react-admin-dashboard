import React from 'react';
import './featured.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressBar } from 'react-circular-progress';
import 'react-circular-progressbar/dist/styles.css';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressBar value={70} text={'70%'} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
