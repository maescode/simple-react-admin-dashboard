import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>

      {/* <Route path="/" element={<HomePage />} /> */}
    </BrowserRouter>
  );
};

export default HomePage;
