import React from "react";
import "./Register.css"
import { Link } from 'react-router-dom';

const Register = ({ onLoginClick }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement login logic here
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
              Register!
            </div>
            <form onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="input-field">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input type="password" id="confirmpassword" name="confirmpassword" required />
              </div>
              <div className="buttongroup">
                <div className="buttons">
                    <button type="submit">Register</button>
                </div>
                <div className="buttons extra">
                    
                Already a user?<div className="link-button" onClick={onLoginClick}> <Link to="/">Login</Link></div>
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