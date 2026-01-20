# TaskFlow – Task Management Web App

TaskFlow is a full-stack task management web application built with **React.js** for the frontend and **Node.js + Express** for the backend. It includes **user authentication, profile management, task CRUD operations**, search & filter functionality, and a **responsive dashboard**. This project demonstrates modern web development practices, security, and scalability considerations.

---

## 🔗 Deployed Links

- **Live Demo: ** https://taskflowfrontend-3ssg.onrender.com
- **Frontend:** [https://taskflowfrontend-3ssg.onrender.com](https://taskflowfrontend-3ssg.onrender.com)  
- **Backend:** [https://taskflowbackend-59jt.onrender.com](https://taskflowbackend-59jt.onrender.com)

---

## 🛠 Tech Stack

**Frontend:** React.js, React Router DOM, TailwindCSS / Custom CSS, Axios for API calls  

**Backend:** Node.js + Express.js, MongoDB (Mongoose), JWT Authentication, Bcrypt for password hashing, CORS enabled  

**Deployment:** Render (Frontend + Backend)  

---

## ⚡ Features

### Frontend (React)
- Responsive design for mobile and desktop  
- User login & registration with validation  
- Protected dashboard route  
- Navbar visible on all pages  
- Task CRUD operations  
- Task search & filter  
- Logout functionality  

### Backend (Node.js / Express)
- User authentication (login/register) with JWT  
- Profile fetch & update  
- CRUD APIs for tasks  
- Password hashing using bcrypt  
- CORS configuration for deployed frontend  
- Error handling and validation  

### Security & Scalability
- JWT-based stateless authentication  
- Password hashing  
- Modular code structure  
- Ready for horizontal scaling  
- Scaling considerations documented in `SCALING.md`  

---

## 📁 Project Structure

TaskFlow/
│
├─ taskflow-backend/
│  ├─ config/db.js
│  ├─ controllers/
│  │  ├─ authController.js
│  │  ├─ taskController.js
│  │  └─ userController.js
│  ├─ middleware/authMiddleware.js
│  ├─ models/
│  │  ├─ Task.js
│  │  └─ User.js
│  ├─ routes/
│  │  ├─ authRoutes.js
│  │  ├─ taskRoutes.js
│  │  └─ userRoutes.js
│  ├─ SCALING.md
│  ├─ index.js
│  └─ package.json
│
├─ taskflow-frontend/
│  ├─ public/
│  │  └─ vite.svg
│  ├─ src/
│  │  ├─ api/axios.js
│  │  ├─ components/
│  │  │  ├─ Dashboard/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ Loader/
│  │  │  │  ├─ ButtonLoader.jsx
│  │  │  │  ├─ FullScreenLoader.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ Login/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ Navbar/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ Profile/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ ProtectedRoute/
│  │  │  │  └─ index.jsx
│  │  │  ├─ Register/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  ├─ TaskCard/
│  │  │  │  ├─ index.jsx
│  │  │  │  └─ index.css
│  │  │  └─ Tasks/
│  │  │     ├─ index.jsx
│  │  │     └─ index.css
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ vite.config.js
│  └─ package.json
│
└─ .gitignore

---


## 📝 Setup & Installation

### Backend

# Navigate to backend
cd taskflow-backend

# Install dependencies
npm install

# Create .env file with:
### PORT=4000
### MONGO_URI=<your_mongodb_connection_string>
### JWT_SECRET=<your_jwt_secret>

# Start backend server
npm run start
# or
node index.js

### Frontend

# Navigate to frontend
cd taskflow-frontend

# Install dependencies
npm install

# Create .env file with backend URL if needed:
### VITE_API_BASE_URL=https://taskflowbackend-59jt.onrender.com/api

# Start frontend
npm run dev

---

## 📄 API Endpoints
### Auth
POST /api/auth/register   # Register new user
POST /api/auth/login      # Login user and get JWT

### User
GET /api/user/profile     # Get user profile
PUT /api/user/profile     # Update user profile

### Tasks
GET /api/tasks            # Get all tasks for user
POST /api/tasks           # Create new task
PUT /api/tasks/:id        # Update task
DELETE /api/tasks/:id     # Delete task

---

## 🚀 Scaling Strategy
See SCALING.md for detailed scaling strategy covering:
### Frontend-backend integration
### Backend horizontal scaling with Docker & Load Balancers
### Database indexing, pagination, connection pooling, MongoDB replica sets
### Caching with Redis
### API response compression & throttling
### Security considerations (HTTPS, environment variables, token expiration, RBAC)
### Deployment strategy (Render / AWS / CI-CD pipeline)

---

✅ Contribution

This is a personal project completed as a Frontend Developer Intern assignment. Contributions are welcome via pull requests for enhancements, bug fixes, or additional features.

---

📌 Notes

### The app is fully functional with authentication, task CRUD, search/filter, profile management, and logout.

### Responsive UI works across mobile and desktop devices.

### Backend is stateless, secure, and ready for production scaling.

### Deployment links provided above for live demo.
