import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
