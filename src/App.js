import React, { useState } from 'react';
import "./Nav.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import About from './About';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Register from './Register'; // Make sure to import the Register component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate a login action
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate a logout action
  };

  return (
    <div>
      {isLoggedIn ? (
        <Router>
          <nav className="nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Login onLoginSuccess={handleLogin} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;