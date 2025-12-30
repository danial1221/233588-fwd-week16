const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Feedback = require('./models/Feedback');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/feedback-tracker';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('✅ Connected to MongoDB Atlas successfully');
  console.log('📊 Database:', mongoose.connection.name);
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  console.error('💡 Make sure:');
  console.error('   1. Your password is correct in .env file');
  console.error('   2. Your IP address is whitelisted in MongoDB Atlas');
  console.error('   3. Network Access allows your IP (or 0.0.0.0/0 for all)');
});

// Routes

// GET route - Retrieve all feedback
app.get('/api/feedback', async (req, res) => {
  try {
    // Fetch all feedback from MongoDB, sorted by newest first
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks
    });
  } catch (error) {
    console.error('Error fetching feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching feedback',
      error: error.message
    });
  }
});

// POST route - Submit new feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, message } = req.body;

    // Validate input
    if (!name || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both name and message'
      });
    }

    // Create new feedback document
    const newFeedback = new Feedback({
      name,
      message
    });

    // Save to MongoDB
    const savedFeedback = await newFeedback.save();

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: savedFeedback
    });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting feedback',
      error: error.message
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Student Feedback Tracker API',
    version: '1.0.0',
    endpoints: {
      getAllFeedback: 'GET /api/feedback',
      submitFeedback: 'POST /api/feedback'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
