import logo from './logo.svg';
import BasicTable from './react-tables/components/BasicTable';
import PaginationTable from './react-tables/components/PaginationTable';
import { QueryClientProvider, QueryClient } from 'react-query';
import HomePage from './react-query/components/Home.page';
import SuperHerospage from './react-query/components/SuperHeroes.page';
import RQSuperHeroesPage from './react-query/components/RQSuperHeroes.Page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="">
      {/* <BasicTable /> */}
      {/* <PaginationTable /> */}
      <h1>React Query</h1>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/super-heroes" element={<SuperHerospage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
