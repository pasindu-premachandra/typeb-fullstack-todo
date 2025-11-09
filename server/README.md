# Backend - TODO App API

Express.js REST API for the TODO management application with MongoDB integration.

## Tech Stack

- Node.js & Express.js
- MongoDB with Mongoose ODM
- CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (Atlas or local instance)
- npm or yarn

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in the server directory:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **MongoDB Connection:**

   You can use either:

   - **MongoDB Atlas (Cloud)**:
     - Create account at https://www.mongodb.com/cloud/atlas
     - Create a cluster and get connection string
     - Example: `mongodb+srv://username:password@cluster.mongodb.net/todoapp`

   - **Local MongoDB**:
     - Install MongoDB locally
     - Use connection string: `mongodb://localhost:27017/todoapp`

4. **Start the server:**
   ```bash
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```

   Server will run on `http://localhost:5000`

## API Endpoints

| Method | Endpoint                | Description                      |
|--------|-------------------------|----------------------------------|
| GET    | `/api/todos`            | Get all TODO items               |
| POST   | `/api/todos`            | Create a new TODO item           |
| PUT    | `/api/todos/:id`        | Update TODO (title/description)  |
| PATCH  | `/api/todos/:id/done`   | Toggle done status               |
| DELETE | `/api/todos/:id`        | Delete a TODO                    |

## Database Schema

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

## Project Structure

```
server/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   └── todoController.js  # Business logic for todos
├── models/
│   └── Todo.js            # Mongoose schema and model
├── routes/
│   └── todoRoutes.js      # API route definitions
├── .env                   # Environment variables (not in git)
└── server.js              # Main application entry point
```

## Available Scripts

- `npm start` - Start server in production mode
- `npm run dev` - Start server in development mode with auto-reload

## Assumptions & Limitations

### Assumptions:
- MongoDB connection is stable and accessible
- Single database shared by all users (no authentication)
- All todos are public (no user-specific todos)
- Network connection is stable

### Limitations:
- No user authentication or authorization
- No rate limiting or request throttling
- No pagination for large datasets
- No data validation beyond required fields
- Delete operations are permanent (no soft delete)
- No audit trail or change history
- Basic error messages (no detailed logging)

## Error Handling

The API returns appropriate HTTP status codes:
- `200 OK` - Successful GET/PUT/PATCH/DELETE
- `201 Created` - Successful POST
- `400 Bad Request` - Invalid data or missing required fields
- `404 Not Found` - Todo ID doesn't exist
- `500 Internal Server Error` - Database or server errors

## Testing

Test the API using:
- **Postman** - Import endpoints and test manually
- **cURL** - Command line testing
- **Frontend app** - Integration testing

Example cURL command:
```bash
# Get all todos
curl http://localhost:5000/api/todos

# Create a todo
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Todo","description":"Test description"}'
```

## Notes

- CORS is enabled for all origins in development
- Server listens on `0.0.0.0` to allow network access
- MongoDB connection includes error handling and retry logic
- All timestamps are automatically managed by Mongoose
