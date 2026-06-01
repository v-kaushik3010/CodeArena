# AlgoArena 🚀

A full-stack competitive programming platform inspired by LeetCode and Codeforces.

Built and deployed independently using the MERN stack, MongoDB Atlas, Render, and Vercel.

## 🌐 Live Demo

Frontend: https://algo-arena-xi-lovat.vercel.app

Backend API: https://algoarena-backend-bhqw.onrender.com

## 📌 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes

### Coding Platform

* Browse coding problems
* View problem descriptions, examples, constraints, and tags
* Multi-language code editor support
* Submit solutions
* Automated verdict generation (Accepted / Wrong Answer / Runtime Error)

### User Dashboard

* Personal profile dashboard
* Score tracking
* Solved problems count
* Recent submissions history

### Leaderboard

* Global ranking system
* Score-based ordering
* Solved problem statistics

### Submission Tracking

* View all personal submissions
* Verdict history
* Language information
* Submission timestamps

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Monaco Editor

### Backend

* Node.js
* Express.js
* JWT Authentication
* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

## 📂 Project Structure

```text
AlgoArena
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
└── README.md
```

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/v-kaushik3010/AlgoArena.git
cd AlgoArena
```

### Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

## 🎯 Future Improvements

* Enhanced online judge
* Hidden test cases
* Code execution sandboxing
* Contest mode
* User profiles
* Problem categories
* Difficulty filters
* Discussion section
* Performance analytics

## 👨‍💻 Author

Varun Kaushik

GitHub: https://github.com/v-kaushik3010

LinkedIn: https://www.linkedin.com/in/varun-kaushik3010/
