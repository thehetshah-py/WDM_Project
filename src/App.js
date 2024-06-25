import React, { useState } from 'react';
import './Nav.css';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation 
} from 'react-router-dom';

import About from './About';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Register from './Register';
import Inbox from './Inbox';
import Sent from './Sent';
import Drafts from './Drafts';
import Compose from './Compose';
import Reply from './Reply';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [replyEmail, setReplyEmail] = useState(null);
  const [emails, setEmails] = useState([
    { sender: 'Alice', subject: 'Welcome', time: '10:00 AM' },
    { sender: 'Bob', subject: 'Meeting', time: '11:00 AM' },
  ]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEmailClick = (email) => {
    setReplyEmail(email);
  };

  const Sidebar = () => {
    const location = useLocation();

    return (
      <div className="sidebar">
        <Link to="/compose" className={`sidebar-link ${location.pathname === '/compose' ? 'active' : ''}`}>
          Compose
        </Link>
        <Link to="/inbox" className={`sidebar-link ${location.pathname === '/inbox' ? 'active' : ''}`}>
          Inbox
        </Link>
        <Link to="/sent" className={`sidebar-link ${location.pathname === '/sent' ? 'active' : ''}`}>
          Sent
        </Link>
        <Link to="/drafts" className={`sidebar-link ${location.pathname === '/drafts' ? 'active' : ''}`}>
          Drafts
        </Link>
      </div>
    );
  };

  return (
    <div>
      {isLoggedIn ? (
        <Router>
          <nav className="nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link" to="/inbox">Home</Link>
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
          <div className="main-content">
            <Sidebar />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Inbox />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/compose" element={<Compose />} />
                <Route path="/inbox" element={<Inbox emails={emails} onEmailClick={handleEmailClick} />} />
                <Route path="/sent" element={<Sent />} />
                <Route path="/drafts" element={<Drafts />} />
                <Route path="/reply" element={<Reply email={replyEmail} />} />
              </Routes>
            </div>
          </div>
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
};

export default App;
