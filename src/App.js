// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/donate" component={Donate} />
      </Routes>
    </Router>
  );
};

export default App;
