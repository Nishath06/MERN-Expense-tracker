# Expense Tracker

A full-stack expense tracking application built with React, Node.js, and MongoDB.

## Project Structure

```
expense-tracker/
├── frontend/     # React + Vite + TypeScript
├── backend/      # Node.js + Express + TypeScript
└── docker/       # Docker configuration files
```

## Prerequisites

- Node.js 18+ and npm
- MongoDB (local or Docker)
- Docker and Docker Compose (optional)

## Quick Start

1. Install dependencies:
```powershell
npm run install:all
```

2. Start MongoDB (if using Docker):
```powershell
docker-compose up -d mongodb
```

3. Start the application:
```powershell
npm start
```

The frontend will be available at http://localhost:5173
The backend API will be available at http://localhost:3000

## Development

### Backend Only
```powershell
cd backend
npm run dev
```

### Frontend Only
```powershell
cd frontend
npm run dev
```

## API Endpoints

- `GET /api/expenses` - List all expenses
- `POST /api/expenses` - Create a new expense
- `PUT /api/expenses/:id` - Update an expense
- `DELETE /api/expenses/:id` - Delete an expense

## Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=3000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000/api
```