const mongoose = require('mongoose');

// Define Mongoose schema for feedback
const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [5, 'Message must be at least 5 characters long']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
