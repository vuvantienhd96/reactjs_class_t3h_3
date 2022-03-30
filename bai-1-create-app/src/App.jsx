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


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>,
    </>
  );
}
export default App;
