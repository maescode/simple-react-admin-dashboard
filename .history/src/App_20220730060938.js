import logo from './logo.svg';
import BasicTable from './react-tables/components/BasicTable';
import PaginationTable from './react-tables/components/PaginationTable';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './react-query/components/Home.page';
import SuperHerospage from './react-query/components/SuperHeroes.page';
import RQSuperHeroesPage from './react-query/components/RQSuperHeroes.Page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return <>Hello</>;
}

export default App;
