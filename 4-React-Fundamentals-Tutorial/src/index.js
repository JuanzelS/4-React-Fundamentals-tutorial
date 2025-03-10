import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './HomePage'; // Import any other pages you want to route to
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} /> {/* This is the default page */}
        {/* Define more nested routes here */}
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
