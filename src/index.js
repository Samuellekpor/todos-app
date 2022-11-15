import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import NotMatch from './functionBased/pages/NotMatch'
import About from './functionBased/pages/About'
import Navbar from './functionBased/components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
