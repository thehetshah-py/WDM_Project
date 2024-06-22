import React from "react";
import "./Login.css"
// import CompanyLogo from "./CompanyLogo"; // Ensure you have this component

const Register = ({ onRegisterClick }) => {
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
              Welcome!
            </div>
            <form onSubmit={handleSubmit}>
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
                    <button type="submit">Login</button>
                </div>
                <div className="buttons">
                    <button type="button" onClick={onRegisterClick}>Register</button>
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
