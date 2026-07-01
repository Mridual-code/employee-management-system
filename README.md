# Employee Management System

## Overview

This is a full-stack Employee Management System built using React, Node.js, Express, and MongoDB. The application provides secure authentication using JWT, role-based access control (RBAC), and complete CRUD operations for managing employee records.

## Features

- User Registration
- User Login
- JWT Authentication
- Role-Based Access Control (Admin, Manager, Employee)
- Employee CRUD Operations
- Protected Routes
- User Profile
- Responsive React Frontend
- MongoDB Database Integration

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

---

# Project Structure

```
employee-management-system
│
├── backend
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

# Project Setup

## 1. Clone Repository

```bash
git clone <repository-url>
```

## 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employeeDB
JWT_SECRET=mysecretkey
```

Start the backend server.

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## 3. Frontend Setup

```bash
cd frontend
npm install
```

Install required packages.

```bash
npm install axios react-router-dom
```

Run the frontend.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/employeeDB
JWT_SECRET=mysecretkey
```

---

# API Endpoints

## Authentication

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

### Get Current User

```
GET /api/auth/me
```

### Logout User

```
POST /api/auth/logout
```

---

## Employee APIs

### Get All Employees

```
GET /api/employees
```

### Get Employee By ID

```
GET /api/employees/:id
```

### Add Employee

```
POST /api/employees
```

### Update Employee

```
PUT /api/employees/:id
```

### Delete Employee

```
DELETE /api/employees/:id
```

---

## User APIs

### Change User Role

```
PUT /api/users/:id/role
```

---

# Role Permissions

| Feature | Admin | Manager | Employee |
|---------|:-----:|:-------:|:--------:|
| View Employees | ✓ | ✓ | ✗ |
| Add Employee | ✓ | ✓ | ✗ |
| Edit Employee | ✓ | ✓ | ✗ |
| Delete Employee | ✓ | ✗ | ✗ |
| Change User Role | ✓ | ✗ | ✗ |
| View Profile | ✓ | ✓ | ✓ |
| Update Profile | ✓ | ✓ | ✓ |

---

# Postman Testing

The backend APIs were tested using Postman.

Authentication APIs

- Register
- Login
- Current User
- Logout

Employee APIs

- Add Employee
- Get Employees
- Get Employee By ID
- Update Employee
- Delete Employee

User APIs

- Change User Role

---

# Screenshots

Add screenshots of the following:

- Login Page
- Register Page
- Dashboard
- Employees List
- Add Employee
- Edit Employee
- Profile Page
- Unauthorized Page
- Postman API Testing
- MongoDB Database

---

# Learning Outcomes

- React Frontend Development
- Node.js and Express Backend Development
- MongoDB and Mongoose Integration
- CRUD Operations
- JWT Authentication
- Password Hashing with bcrypt
- Role-Based Access Control (RBAC)
- Protected Routes
- REST API Development
- React Router
- Axios API Integration

---

# Author

**Mridul Krishan**

Backend Internship Project