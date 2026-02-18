# 🚀 CodeArena – Competitive Coding Platform (MERN Stack)

CodeArena is a full-stack competitive coding platform built using the MERN stack.  
It allows users to register, log in, solve coding problems, and compete on a leaderboard.

This project is being developed to simulate a real-world coding contest platform similar to LeetCode or Codeforces.

---

## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt (Password Hashing)

**Version Control**
- Git
- GitHub

---

## 🔐 Features Implemented (Current Phase)

- User Registration API
- User Login API
- Secure Password Hashing
- JWT Token Generation
- MongoDB Atlas Integration
- Clean Backend Architecture

---

## 📂 Project Structure

CodeArena/
└── server/
├── config/
│ └── db.js
├── controllers/
│ └── authController.js
├── models/
│ └── User.js
├── routes/
│ └── authRoutes.js
├── server.js
└── package.json


---

## 🔑 Authentication Flow

1. User registers with name, email, password.
2. Password is hashed using bcrypt.
3. JWT token is generated upon successful registration/login.
4. Token can be used to access protected routes (coming next).

---

## 🚀 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/v-kaushik3010/CodeArena.git
cd CodeArena/server


2️⃣ Install Dependencies
npm install

3️⃣ Create .env File

Inside the server folder create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4️⃣ Start Server
npm run dev


Server will run on:

http://localhost:5000

📌 API Endpoints
🔐 Register User

POST /api/auth/register

Request Body:

{
  "name": "Varun",
  "email": "varun@gmail.com",
  "password": "123456"
}


Response:

{
  "_id": "...",
  "name": "Varun",
  "email": "varun@gmail.com",
  "role": "user",
  "token": "JWT_TOKEN"
}

🔑 Login User

POST /api/auth/login

Request Body:

{
  "email": "varun@gmail.com",
  "password": "123456"
}


Response:

{
  "_id": "...",
  "name": "Varun",
  "email": "varun@gmail.com",
  "role": "user",
  "token": "JWT_TOKEN"
}

📈 Upcoming Features

JWT Authentication Middleware

Role-based Authorization (Admin/User)

Problem Schema

Problem CRUD APIs

Code Submission System

Leaderboard System

Frontend (React + Tailwind)

Deployment (Render / Vercel)

🎯 Project Goal

To build a scalable competitive coding platform demonstrating:

Backend Engineering Skills

Secure Authentication Systems

REST API Design

Database Modeling

Clean Architecture Practices

Real-world Debugging Experience

👨‍💻 Author

Varun Kaushik

GitHub: https://github.com/v-kaushik3010

LinkedIn: https://www.linkedin.com/in/varun-kaushik-/


---