import React from "react";
import "./Login.css"
import { Link } from 'react-router-dom';
const Register = ({ onLoginSuccess }) => {
  const handleLogin = () => {
    // Assuming login credentials are correct
    onLoginSuccess(); // This will set isLoggedIn to true in the App component
  };

  return (
    <div
      id="myModal"
      className="modal-background"
    >
      
      <div className="modal-content">
        <div className="flex-container">
          <div className="login-section">
            <div className="welcome-text">
              Welcome!
            </div>
            <form>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div className="buttongroup">
                <div className="buttons">
                    <button onClick={onLoginSuccess} type="submit">Login</button>
                </div>
                <div className="buttons">
                    <button type="button"><Link to="/register">Register</Link></button>
                </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
