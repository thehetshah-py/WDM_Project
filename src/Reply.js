import React from 'react';
import { useLocation } from 'react-router-dom';
import './Reply.css';

function Reply() {
  const location = useLocation();
  const { email } = location.state;

  return (
    <div className="reply-container">
      <h1 className="reply-title">Reply</h1>
      <div className="reply-details">
        <label>From</label>
        <input type="text" value="You" readOnly />
      </div>
      <div className="reply-details">
        <label>To</label>
        <input type="text" value={email.sender} readOnly />
      </div>
      <div className="reply-details">
        <label>Subject</label>
        <input type="text" value={`Re: ${email.subject}`} readOnly />
      </div>
      <div className="reply-details">
        <label>Body</label>
        <textarea />
      </div>
      <button className="send-button">Send</button>
    </div>
  );
}

export default Reply;
