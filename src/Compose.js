import React, { useState } from 'react';
import './Compose.css';

const Compose = ({ onSend, onSaveDraft, onCancel }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    if (onSend) {
      onSend({ to, subject, body });
    }
  };

  const handleSaveDraft = () => {
    if (onSaveDraft) {
      onSaveDraft({ to, subject, body });
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <div className="compose-container">
      <h1>Compose Email</h1>
      <form className="compose-form">
        <label>
          To
          <input 
            type="email" 
            value={to} 
            onChange={(e) => setTo(e.target.value)} 
            required 
          />
        </label>
        <label>
          Subject
          <input 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
          />
        </label>
        <label>
          Body
          <textarea 
            value={body} 
            onChange={(e) => setBody(e.target.value)} 
            required 
          />
        </label>
        <div className="compose-actions">
          <button type="button" onClick={handleSend}>Send</button>
          <button type="button" onClick={handleSaveDraft}>Save as Draft</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
