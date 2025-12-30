import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Main App Component
function App() {
  // State management using React hooks
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // API base URL
  const API_URL = 'http://localhost:5000/api/feedback';

  // useEffect hook to fetch feedbacks when component mounts
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Fetch all feedbacks from backend
  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      
      if (response.data.success) {
        setFeedbacks(response.data.data);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
      setError('Failed to load feedbacks. Make sure the backend server is running.');
      setLoading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    setError('');
    setSuccessMessage('');

    // Validation
    if (!name.trim() || !message.trim()) {
      setError('Please fill in both fields');
      return;
    }

    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }

    if (message.trim().length < 5) {
      setError('Message must be at least 5 characters long');
      return;
    }

    try {
      setLoading(true);
      
      // Send POST request to backend
      const response = await axios.post(API_URL, {
        name: name.trim(),
        message: message.trim()
      });

      if (response.data.success) {
        setSuccessMessage('Feedback submitted successfully! ✅');
        
        // Clear form fields
        setName('');
        setMessage('');
        
        // Refresh feedback list
        fetchFeedbacks();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error submitting feedback:', err);
      setError('Failed to submit feedback. Please try again.');
      setLoading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>📝 Student Feedback Tracker</h1>
          <p>Share your thoughts and feedback with us!</p>
        </header>

        {/* Feedback Form */}
        <div className="form-container">
          <h2>Submit Your Feedback</h2>
          
          {/* Display error or success messages */}
          {error && <div className="alert alert-error">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}

          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder="Enter your feedback message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={loading}
                rows="4"
                className="form-input"
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>

        {/* Feedback List */}
        <div className="feedbacks-container">
          <h2>All Feedback ({feedbacks.length})</h2>
          
          {loading && feedbacks.length === 0 ? (
            <div className="loading">Loading feedbacks...</div>
          ) : feedbacks.length === 0 ? (
            <div className="no-feedback">
              <p>No feedback yet. Be the first to share your thoughts! 🚀</p>
            </div>
          ) : (
            <div className="feedbacks-list">
              {feedbacks.map((feedback) => (
                <div key={feedback._id} className="feedback-card">
                  <div className="feedback-header">
                    <div className="feedback-author">
                      <span className="author-icon">👤</span>
                      <strong>{feedback.name}</strong>
                    </div>
                    <span className="feedback-date">
                      {formatDate(feedback.createdAt)}
                    </span>
                  </div>
                  <div className="feedback-message">
                    <p>{feedback.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
