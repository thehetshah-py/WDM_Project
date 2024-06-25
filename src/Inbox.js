import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inbox.css';

function Inbox() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const navigate = useNavigate();

  const emails = [
    { id: 1, sender: 'Alice', subject: 'Welcome', time: '10:00 AM', body: 'Hello, welcome!', folder: 'Inbox' },
    { id: 2, sender: 'Bob', subject: 'Meeting', time: '11:00 AM', body: 'Meeting at 11 AM', folder: 'Inbox' },
  ];

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleReplyClick = () => {
    navigate('/reply', { state: { email: selectedEmail } });
  };

  if (selectedEmail) {
    return (
      <div className="email-view-container">
        <h1 className="email-view-title">{selectedEmail.subject}</h1>
        <div className="email-view-details">
          <label>From</label>
          <input type="text" value={selectedEmail.sender} readOnly />
        </div>
        <div className="email-view-details">
          <label>To</label>
          <input type="text" value="You" readOnly />
        </div>
        <div className="email-view-details">
          <label>Subject</label>
          <input type="text" value={selectedEmail.subject} readOnly />
        </div>
        <div className="email-view-details">
          <label>Body</label>
          <textarea value={selectedEmail.body} readOnly />
        </div>
        <div className="email-view-actions">
          <button className="reply-button" onClick={handleReplyClick}>Reply with AI</button>
          <button className="reply-button" onClick={handleReplyClick}>Reply Manually</button>
        </div>
      </div>
    );
  }

  return (
    <div className="inbox-container">
      <h1 className="inbox-title">Inbox</h1>
      <ul className="email-list">
        {emails.map((email) => (
          <li key={email.id} className="email-item" onClick={() => handleEmailClick(email)}>
            <span className="email-sender">{email.sender}</span>
            <span className="email-subject">{email.subject}</span>
            <span className="email-time">{email.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
