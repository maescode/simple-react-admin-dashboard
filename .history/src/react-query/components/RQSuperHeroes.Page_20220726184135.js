import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperHeroesPage = () => {
  const fetSuperHeroes = () => {
    axios.get('http://localhost:3004/superheroes');
  };
  return (
    <div>
      <h1>RQ Super Heroes Page</h1>
    </div>
  );
};

export default RQSuperHeroesPage;
