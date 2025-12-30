# Backend - Student Feedback Tracker API

Express.js backend server for the Student Feedback Tracker application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure MongoDB:
   - For local MongoDB: Keep default in `.env`
   - For MongoDB Atlas: Update `MONGODB_URI` in `.env` with your connection string

3. Start the server:
```bash
npm start
```

Or use nodemon for development:
```bash
npm run dev
```

## API Endpoints

- `GET /api/feedback` - Get all feedback
- `POST /api/feedback` - Submit new feedback

## Environment Variables

Create a `.env` file with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/feedback-tracker
```

## Technologies

- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
