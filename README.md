# 💬 ChatMate - A Real-time Chat Application

ChatMate is a real-time chat application built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to sign up, log in, and chat securely with each other through private and group conversations. It features modern UI/UX, authentication, and WebSocket-powered real-time messaging.

---

## 🚀 Features

- 🔐 **User Authentication** (JWT-based)
- 🧑‍🤝‍🧑 **One-to-One & Group Chat**
- 📩 **Real-Time Messaging** (Socket.io)
- 👀 **Online Users Indicator**
- 📱 **Responsive Design**
- 💾 **MongoDB Database Integration**
- ✨ **Clean & Modern UI**

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS or CSS Modules
- Axios
- React Router DOM
- Context API / Zustand / Redux (state management)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.io
- JWT for Authentication
- bcrypt for Password Hashing

---

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/TimelyCo/Chat-App.git
cd chatmate
```
### 2. Set up the back-end
```bash
cd backend
npm install
```

Create a .env file inside the backend directory with the following contents:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the server:
```bash
npm run dev
```

### 3. Set up the front-end
```bash
cd frontend
npm install
```

Start the React Development server
```bash
npm run dev
```

---

### Security Features

Encrypted passwords using bcrypt

Protected routes via middleware

JWT authentication for login and token-based sessions

CORS configuration

![image](https://github.com/user-attachments/assets/834cb29f-e02a-4c17-9c5d-2eb2b92f210b)
![image](https://github.com/user-attachments/assets/ff135495-47c3-4c62-ba39-717bb59028f7)
![image](https://github.com/user-attachments/assets/9caf71fa-0607-4400-ae57-fe4b42556063)



