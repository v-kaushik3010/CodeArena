# AlgoArena 🚀

AlgoArena is a full-stack competitive coding platform inspired by LeetCode and Codeforces.

It allows users to:
- Solve coding problems
- Submit solutions
- Track scores
- Compete on leaderboards
- Practice DSA in a modern coding environment

---

# 🌟 Features

## 🔐 Authentication & Authorization
- JWT-based Authentication
- Secure Login/Register
- Protected Routes
- Role-Based Access Control (Admin/User)

---

## 📚 Problem Management
- Create Problems (Admin)
- Fetch All Problems
- Get Problem by ID
- Difficulty Levels:
  - Easy
  - Medium
  - Hard
- Tags & Constraints Support
- Examples & Testcases

---

## 📤 Submission System
- Submit Solutions
- Verdict Generation
- Submission History
- Runtime Error Handling
- Wrong Answer Detection

---

## 🏆 Leaderboard System
- Dynamic Rankings
- Difficulty-Based Scoring
- Solved Problem Tracking

---

## ⚛️ Frontend
- React + Vite
- Tailwind CSS
- React Router
- Axios Integration
- Dynamic Problem Pages
- Leaderboard UI

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Tools
- Git & GitHub
- Thunder Client
- VS Code

---

# 📂 Project Structure

```bash
AlgoArena/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/v-kaushik3010/AlgoArena.git
```

---

## 2️⃣ Backend Setup

```bash
cd AlgoArena/server
npm install
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd AlgoArena/client
npm install
npm run dev
```

---

# 🔑 Environment Variables

Create `.env` inside `server/`

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
```

---

# 🚀 API Endpoints

## Auth Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Problem Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/problems` | Get All Problems |
| GET | `/api/problems/:id` | Get Problem By ID |
| POST | `/api/problems` | Create Problem (Admin) |

---

## Submission Routes

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/submissions` | Submit Solution |
| GET | `/api/submissions/my` | User Submission History |

---

## User Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/profile` | User Profile |
| GET | `/api/users/leaderboard` | Leaderboard |

---

# 🎯 Future Improvements

- Monaco Code Editor
- Contest System
- Hidden Testcases
- Docker-based Code Execution
- Multiple Language Support
- Real-Time Rankings
- Discussion Forum
- AI Problem Recommendations

---

# 👨‍💻 Author

Varun Kaushik

- GitHub: https://github.com/v-kaushik3010

---

# ⭐ Contributing

Contributions, suggestions, and feedback are welcome!

If you like this project, consider giving it a ⭐ on GitHub.