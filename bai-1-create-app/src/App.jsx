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

function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Contact />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />}>
            </Route>
          </Route>
        </Routes>
        </Provider>
      </BrowserRouter>,
    </>
  );
}
export default App;

