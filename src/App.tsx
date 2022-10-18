import React from 'react';
import './scss/main.scss';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './user/containers/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
