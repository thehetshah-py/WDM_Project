import React, { useState } from 'react';
import './Sent.css';

const Sent = () => {
  const [sentEmails] = useState([
    { to: 'Alice', subject: 'Welcome', time: '10:00 AM', body: 'Hello Alice, welcome!' },
    { to: 'Bob', subject: 'Meeting', time: '11:00 AM', body: 'Hello Bob, meeting at 11 AM.' },
  ]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (
    <div>
      {selectedEmail ? (
        <div className="email-view">
          <h2>Read Sent Email</h2>
          <div className="email-detail">
            <label>From:</label>
            <p>You</p>
          </div>
          <div className="email-detail">
            <label>To:</label>
            <p>{selectedEmail.to}</p>
          </div>
          <div className="email-detail">
            <label>Subject:</label>
            <p>{selectedEmail.subject}</p>
          </div>
          <div className="email-detail">
            <label>Body:</label>
            <p>{selectedEmail.body}</p>
          </div>
        </div>
      ) : (
        <div>
          <h2>Sent</h2>
          <table className="email-table">
            <thead>
              <tr>
                <th>To</th>
                <th>Subject</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {sentEmails.map((email, index) => (
                <tr key={index} onClick={() => handleEmailClick(email)}>
                  <td>{email.to}</td>
                  <td>{email.subject}</td>
                  <td>{email.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Sent;
