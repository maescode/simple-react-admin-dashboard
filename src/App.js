import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/darkModeContext';
import './style/dark.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  // const [dark, setDark] = useState(false);
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title={'Add New User'} />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title={'Add New Product'} />
                }
              />
            </Route>
            <Route path="orders">
              <Route index element={<List />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="order/new"
                element={
                  <New inputs={productInputs} title={'Add New Product'} />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
