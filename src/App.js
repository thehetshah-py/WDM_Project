import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [showLogin, setShowLogin] = useState(true); // State to track which component to show

  return (
    <div>
      {showLogin ? 
        <Login onRegisterClick={() => setShowLogin(false)} /> : 
        <Register onLoginClick={() => setShowLogin(true)} />
      }
    </div>
  );
}

export default App;
