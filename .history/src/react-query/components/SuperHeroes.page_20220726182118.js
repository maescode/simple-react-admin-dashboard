import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuperHerospage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/superheroes').then((res) => {
      //console.log('data_accessed', res.data);
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>Super Heroes Page</h1>
      {data.map((hero) => {
        return <p key={hero.first_name}>{hero.name}</p>;
      })}
    </div>
  );
};

export default SuperHerospage;
