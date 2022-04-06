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

import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginRef from './pages/LoginRef';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginRef" element={<LoginRef />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </BrowserRouter>,
    </>
  );
}
export default App;

