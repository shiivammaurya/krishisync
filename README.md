# 🌾 KrishiSync

KrishiSync is a Smart Farmer Coordination Platform developed during the TBI Internship Program. The project enables efficient farmer group management through a modern React frontend and an Express.js REST API backend.

---

# Features

## Frontend

- Responsive UI using React
- Dashboard
- Farmer Groups page
- Dark / Light Theme
- Component-based architecture
- Live API integration

## Backend

- Express.js REST API
- CRUD Operations
- Search API
- Error Handling Middleware
- Environment Variables
- Mock Database

---

# Tech Stack

### Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js
- REST API
- dotenv
- CORS

### API Testing

- Postman
- Thunder Client

---

# Project Structure

```
KrishiSync
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── data
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── README.md
```

---

# Frontend Setup

Clone the repository

```bash
git clone https://github.com/shiivammaurya/krishisync.git
```

Move inside project

```bash
cd krishisync
```

Install frontend packages

```bash
cd frontend
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Backend Setup

Move to backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Create a `.env` file inside the backend folder.

Example

```env
PORT=5001
```

Run backend

```bash
npm run dev
```

Backend runs at

```
http://localhost:5001
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/farmers | Get all farmer groups |
| GET | /api/farmers/:id | Get farmer by ID |
| POST | /api/farmers | Create new farmer |
| PUT | /api/farmers/:id | Update farmer |
| DELETE | /api/farmers/:id | Delete farmer |
| GET | /api/farmers/search?q=Kathua | Search farmer groups |

---

# Example Response

```json
[
  {
    "id": 1,
    "groupName": "Group A",
    "village": "Kathua",
    "farmers": 25,
    "status": "Ready"
  }
]
```

---

# API Testing

The backend API was tested using:

- Postman
- Thunder Client
- Browser
- Chrome DevTools Network Tab

---

# Future Improvements

- MongoDB Integration
- Authentication
- JWT Security
- Cloud Deployment
- Farmer Analytics Dashboard

---

# Author

**Shivam Maurya**

TBI Internship Program