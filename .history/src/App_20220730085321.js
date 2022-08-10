import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
