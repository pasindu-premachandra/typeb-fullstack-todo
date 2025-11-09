# Frontend - TODO App

React.js frontend for the TODO management application.

## Tech Stack

- React.js (with Vite)
- Axios for API calls
- CSS3 for styling

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure API endpoint (if needed):**

   The app connects to the backend at `http://localhost:5000` by default. This is configured in `src/services/api.js`.

   If your backend runs on a different port, update the `baseURL` in that file.

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The app will run on `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── TodoForm.jsx  # Form for creating/editing todos
│   └── TodoItem.jsx  # Individual todo display
├── pages/            # Page components
│   └── TodoPage.jsx  # Main todo management page
├── services/         # API service layer
│   └── api.js        # Axios configuration and API calls
├── App.jsx           # Root component
├── App.css           # Global styles
└── main.jsx          # App entry point
```

## Features

- View all todos with clean UI
- Create new todo with title and optional description
- Edit existing todos
- Mark todos as done/undone with visual feedback (strikethrough)
- Delete todos with confirmation
- Responsive design for mobile and desktop
- Real-time updates
- Loading states and error handling

## Notes

- Ensure the backend server is running before starting the frontend
- Default backend URL: `http://localhost:5000`
- The app uses Vite for fast development and optimized production builds
