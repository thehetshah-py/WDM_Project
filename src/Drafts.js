import React, { useState } from 'react';
import './Drafts.css';

const Drafts = () => {
  const [drafts, setDrafts] = useState([
    { to: 'someone@example.com', subject: 'Draft 1', body: 'This is draft email 1.' },
    { to: 'another@example.com', subject: 'Draft 2', body: 'This is draft email 2.' },
  ]);
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [formData, setFormData] = useState({ to: '', subject: '', body: '' });

  const handleDraftClick = (draft) => {
    setSelectedDraft(draft);
    setFormData(draft);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSend = () => {
    // Logic to send the draft
    alert('Email sent!');
    // Remove the draft after sending
    setDrafts(drafts.filter(draft => draft !== selectedDraft));
    setSelectedDraft(null);
  };

  const handleSaveDraft = () => {
    // Logic to save the updated draft
    setDrafts(drafts.map(draft => (draft === selectedDraft ? formData : draft)));
    alert('Draft saved!');
  };

  return (
    <div>
      {selectedDraft ? (
        <div className="email-edit">
          <h2>Edit Draft</h2>
          <div className="email-detail">
            <label>To:</label>
            <input
              type="email"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
            />
          </div>
          <div className="email-detail">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="email-detail">
            <label>Body:</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="button-group">
            <button onClick={handleSend}>Send</button>
            <button onClick={handleSaveDraft}>Save as Draft</button>
            <button onClick={() => setSelectedDraft(null)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Drafts</h2>
          <table className="email-table">
            <thead>
              <tr>
                <th>To</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {drafts.map((draft, index) => (
                <tr key={index} onClick={() => handleDraftClick(draft)}>
                  <td>{draft.to}</td>
                  <td>{draft.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Drafts;
