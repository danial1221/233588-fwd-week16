# Student Feedback Tracker - MERN Stack Application

A full-stack web application built with MongoDB, Express.js, React, and Node.js that allows students to submit and view feedback comments.

## 🚀 Features

- ✅ Submit feedback with name and message
- ✅ View all submitted feedbacks in real-time
- ✅ Store feedback data in MongoDB
- ✅ Clean and responsive UI with animations
- ✅ RESTful API with proper error handling
- ✅ Form validation on both frontend and backend

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd 233588_fwd_week16
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Configure environment variables
# Edit the .env file and update MongoDB URI if needed
# For local MongoDB: mongodb://localhost:27017/feedback-tracker
# For MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/feedback-tracker

# Start the backend server
npm start
```

The backend server will run on **http://localhost:5000**

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will run on **http://localhost:3000**

## 📁 Project Structure

```
233588_fwd_week16/
├── backend/
│   ├── models/
│   │   └── Feedback.js          # Mongoose schema/model
│   ├── .env                      # Environment variables
│   ├── package.json              # Backend dependencies
│   └── server.js                 # Express server & API routes
│
└── frontend/
    ├── public/
    │   └── index.html            # HTML template
    ├── src/
    │   ├── App.js                # Main React component
    │   ├── App.css               # Component styling
    │   ├── index.js              # React entry point
    │   └── index.css             # Global styling
    └── package.json              # Frontend dependencies
```

## 🔌 API Endpoints

### GET `/api/feedback`
Retrieve all feedback submissions

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "message": "Great class!",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### POST `/api/feedback`
Submit new feedback

**Request Body:**
```json
{
  "name": "Jane Smith",
  "message": "Very informative session!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Feedback submitted successfully",
  "data": {
    "_id": "...",
    "name": "Jane Smith",
    "message": "Very informative session!",
    "createdAt": "2024-01-15T10:35:00.000Z"
  }
}
```

## 💻 Usage

1. Open your browser and navigate to **http://localhost:3000**
2. Enter your name and feedback message in the form
3. Click "Submit Feedback" button
4. Your feedback will appear in the list below
5. All feedbacks are stored in MongoDB and persist across sessions

## 🧪 Testing

### Test Backend API

```bash
# Test GET endpoint
curl http://localhost:5000/api/feedback

# Test POST endpoint
curl -X POST http://localhost:5000/api/feedback \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","message":"Test message"}'
```

## 🎨 Technologies Used

### Frontend
- **React 18** - UI library with hooks (useState, useEffect)
- **Axios** - HTTP client for API requests
- **CSS3** - Styling with animations and gradients

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable management

## 📝 Assignment Requirements Checklist

### Task 1: UI/UX Design – React Frontend ✅
- [x] Form with two input fields (name, message) - 5 marks
- [x] Submit button to send data - 5 marks
- [x] Feedback messages displayed below the form - 5 marks
- [x] Proper use of React hooks (useState, useEffect) - 5 marks
- [x] Basic styling with CSS - 5 marks

### Task 2: Backend API – Node.js + Express ✅
- [x] Set up Express server - 5 marks
- [x] POST route to receive new feedback - 5 marks
- [x] GET route to return all feedback - 5 marks
- [x] Use of middleware (express.json()) - 5 marks
- [x] Connect backend with frontend (via axios) - 5 marks

### Task 3: Database Integration – MongoDB ✅
- [x] Define Mongoose schema/model for feedback - 5 marks
- [x] Save submitted feedback into MongoDB - 5 marks
- [x] Fetch data from MongoDB - 5 marks
- [x] Display retrieved data in frontend - 5 marks
- [x] Handle errors gracefully (try-catch) - 5 marks

### GitHub Deployment ✅
- [x] Ready to push to public GitHub repository - 10 marks

## 🚀 Deployment to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Student Feedback Tracker MERN app"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/student-feedback-tracker.git

# Push to GitHub
git push -u origin main
```

## 🔧 Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running locally: `mongod`
- Or update `.env` file with MongoDB Atlas connection string

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: Choose different port when prompted or update in package.json

### CORS Errors
- Ensure backend has `cors()` middleware enabled
- Check API_URL in frontend App.js matches backend server address

## 📄 License

This project is created for educational purposes as part of a MERN stack assignment.

## 👨‍💻 Author

Student Assignment - FWD Week 16

## 📞 Support

For issues or questions, please create an issue in the GitHub repository.

---

**Note:** Make sure both backend and frontend servers are running simultaneously for the application to work properly.
