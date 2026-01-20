📘 TaskFlow API Documentation
Backend API for TaskFlow – a scalable task management application with authentication and dashboard features.

🔗 Base URL
http://localhost:4000/api

---

🔐 Authentication

Register User
POST /auth/register
Request Body:
{
"name": "Ravi",
"email": "ravi@example.com",
"password": "password123",
"gender": "male"
}

Response:
{
"message": "User registered successfully"
}

---

Login User
POST /auth/login
Request Body:
{
"email": "ravi@example.com",
"password": "password123"
}

Response:
{
"token": "JWT_TOKEN"
}
🔑 The JWT token must be included in the Authorization header for all protected routes.

---

👤 User Profile (Protected)
Get User Profile
GET /user/profile
Headers
Authorization: Bearer <JWT_TOKEN>
Response:
{
"\_id": "USER_ID",
"name": "Ravi",
"email": "ravi@example.com",
"gender": "male",
"avatar": "male1"
}

---

Update User Profile (Name / Avatar)
PUT /user/profile
Headers
Authorization: Bearer <JWT_TOKEN>
Request Body:
{
"name": "Ravi Teja",
"avatar": "female1"
}

Response:
{
"message": "Profile updated successfully",
"user": {
"\_id": "USER_ID",
"name": "Ravi Teja",
"gender": "male",
"avatar": "female1"
}
}
📌 Avatar values are predefined keys (no file uploads).

---

✅ Tasks (Protected)
Create Task
POST /tasks
Headers
Authorization: Bearer <JWT_TOKEN>
Request Body:
{
"title": "Learn React",
"completed": false
}

Response:
{
"\_id": "TASK_ID",
"title": "Learn React",
"completed": false,
"userId": "USER_ID",
"createdAt": "2026-01-19T10:00:00.000Z"
}

---

Get Tasks (Search, Filter & Pagination)
GET /tasks
Query Parameters
page=1
limit=5
status=completed | pending
search=react
Example:
GET /tasks?page=1&limit=5&status=pending&search=react

Response:
{
"tasks": [],
"page": 1,
"limit": 5,
"totalTasks": 12,
"totalPages": 3
}

---

Update Task
PUT /tasks/:id
Headers
Authorization: Bearer <JWT_TOKEN>
Request Body:
{
"title": "Learn React Hooks",
"completed": true
}

Response:
{
"\_id": "TASK_ID",
"title": "Learn React Hooks",
"completed": true
}

---

Delete Task
DELETE /tasks/:id
Headers
Authorization: Bearer <JWT_TOKEN>

Response:
{
"message": "Task deleted successfully"
}

---

🔒 Security Notes
J-> WT-based authentication
-> Passwords are hashed using bcrypt
-> Protected routes require Authorization: Bearer <token>
-> User data is isolated per authenticated user

---

⚙️ Scalability & Architecture Notes
-> Modular MVC architecture (routes, controllers, models)
-> Stateless JWT authentication
-> Backend-ready for horizontal scaling
-> Can be extended with:
Redis caching
Role-based access control
Database indexing
Load balancers (NGINX)

---

🧪 Testing
-> APIs tested using REST client (.http) and Postman
-> All CRUD and authentication flows verified

---

📦 Tech Stack
-> Node.js
-> Express.js
-> MongoDB + Mongoose
-> JWT Authentication
-> bcrypt

---

✅ Status
✔ Authentication implemented
✔ Profile management
✔ Task dashboard with CRUD
✔ Search, filter & pagination
✔ Secure & scalable backend
