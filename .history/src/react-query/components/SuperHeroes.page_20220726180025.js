import React, { useState } from 'react';

const SuperHerospage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  return (
    <div>
      <h1>Super Heroes Page</h1>
    </div>
  );
};

export default SuperHerospage;
