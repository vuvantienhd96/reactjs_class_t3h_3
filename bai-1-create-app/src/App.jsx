import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
// class component

import { Provider, useDispatch } from 'react-redux';

import Login from './pages/Login';
import Register from './pages/Register';
import LoginRef from './pages/LoginRef';
import { auth } from './firebase';
import { setUser } from './redux/actions';
import PrivateRouter from './components/PrivateRouter';

function App() {

  const token = localStorage.getItem('myCat');
  const dispatch = useDispatch();
  React.useEffect(() => {
    
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(setUser(authUser));
      }else dispatch(setUser(null));
    })
  }, [dispatch])
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={ 
              <PrivateRouter>
                <Home />
              </PrivateRouter>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/loginRef" element={<LoginRef />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>,
    </>
  );
}
export default App;

