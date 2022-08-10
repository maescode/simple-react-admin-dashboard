import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const RQSuperHeroesPage = () => {
  const fetchSuperHeroes = () => {
    axios.get('http://localhost:3004/superheroes');
  };

  const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes);
  return (
    <div>
      <h1>RQ Super Heroes Page</h1>
    </div>
  );
};

export default RQSuperHeroesPage;
