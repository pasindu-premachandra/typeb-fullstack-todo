# 📝 TODO App - Full Stack Application

A simple and clean TODO management application built with React, Express, and MongoDB.

## 🎥 Demo

 ![Demo Video](https://github.com/user-attachments/assets/179cbbf7-f4ef-471e-8d07-30af0eb360f8)

## ✨ Features

- ✅ View all todos with clean UI
- ➕ Create new todo with title and optional description
- ✏️ Edit existing todos
- ✅ Mark todos as done/undone with visual feedback (strikethrough)
- ❌ Delete todos with confirmation
- 📱 Responsive design for mobile and desktop
- ⚡ Real-time updates
- 🎨 Clean and modern interface

## 🛠️ Tech Stack

**Frontend:**
- React.js (with Vite)
- Axios for API calls
- CSS3 for styling

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose ODM
- CORS enabled

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (Atlas or local instance)

### Backend Setup

```bash
cd server
npm install

# Create .env file
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "PORT=5000" >> .env

# Start server
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install

# Start development server
npm run dev
```

Frontend runs on `http://localhost:3000`

## 📁 Project Structure

```
typeb-fullstack-todo/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API service layer
│   │   └── App.jsx
│   └── package.json
│
├── server/              # Express backend
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   └── server.js
│
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint                | Description                  |
|--------|-------------------------|------------------------------|
| GET    | `/api/todos`            | Get all todos                |
| POST   | `/api/todos`            | Create new todo              |
| PUT    | `/api/todos/:id`        | Update todo                  |
| PATCH  | `/api/todos/:id/done`   | Toggle done status           |
| DELETE | `/api/todos/:id`        | Delete todo                  |

## 💾 Database Schema

```javascript
{
  _id: ObjectId,
  title: String (required),
  description: String (optional),
  done: Boolean (default: false),
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 🎯 Key Features Implemented

- **Form Validation**: Title is required before submission
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during data fetching
- **Delete Confirmation**: Prevents accidental deletions
- **Responsive Design**: Works on all screen sizes
- **Clean Architecture**: Organized component structure

## 📝 Notes

- The application uses a simple monorepo structure
- MongoDB connection string should be added to `server/.env`
- Both servers must be running for the app to work
- Default ports: Backend (5000), Frontend (3000)

## 🔧 Development

**Build for production:**
```bash
# Frontend
cd client && npm run build

# Backend
cd server && npm start
```