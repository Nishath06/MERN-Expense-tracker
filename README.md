# 💰 Expense Tracker

A modern full-stack expense tracking application built with the **MERN Stack** (MongoDB, Express.js, React, Node.js) and TypeScript.

## 📚 Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript

### Database
- **MongoDB** - NoSQL database

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
expense-tracker/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components (Home, AddExpense, Stats)
│   │   ├── api/          # API client functions
│   │   └── App.tsx       # Main app component
│   ├── package.json
│   └── vite.config.ts
│
├── backend/              # Express backend API
│   ├── src/
│   │   ├── routes/       # API routes (expenses.ts)
│   │   └── server.ts     # Entry point
│   └── package.json
│
├── docker-compose.yml    # Docker services configuration
├── .gitignore           # Git ignore rules
└── package.json         # Root package scripts
```

## 🛠️ Prerequisites

- **Node.js** 18+ and npm
- **MongoDB** (local installation or Docker)
- **Docker & Docker Compose** (optional)

## 🚀 Quick Start

### 1. Install Dependencies
```powershell
npm run install:all
```

### 2. Set Up Environment Variables

Create `.env` file in the **backend** folder:
```env
MONGODB_URI=mongodb://localhost:27017/expense-tracker
PORT=3000
```

Create `.env` file in the **frontend** folder:
```env
VITE_API_URL=http://localhost:3000/api
```

### 3. Start MongoDB

Using Docker (Recommended):
```powershell
docker-compose up -d mongodb
```

Or use your local MongoDB installation.

### 4. Run the Application
```powershell
npm start
```

**Access the application:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

## 💻 Development

### Run Backend Only
```powershell
cd backend
npm run dev
```

### Run Frontend Only
```powershell
cd frontend
npm run dev
```

### Run with Docker Compose
```powershell
docker-compose up
```

## 📡 API Endpoints

| Method   | Endpoint              | Description              |
|----------|----------------------|--------------------------|
| `GET`    | `/api/expenses`      | List all expenses        |
| `GET`    | `/api/expenses/:id`  | Get single expense       |
| `POST`   | `/api/expenses`      | Create a new expense     |
| `PUT`    | `/api/expenses/:id`  | Update an expense        |
| `DELETE` | `/api/expenses/:id`  | Delete an expense        |

### Example Request (POST/PUT)
```json
{
  "title": "Grocery Shopping",
  "amount": 150.50,
  "category": "Food",
  "date": "2025-12-26",
  "description": "Weekly groceries"
}
```

## 🐳 Docker Deployment

Build and run with Docker:
```powershell
docker-compose up --build
```

## 📦 Build for Production

### Frontend
```powershell
cd frontend
npm run build
```

### Backend
```powershell
cd backend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**Built with ❤️ using the MERN Stack**