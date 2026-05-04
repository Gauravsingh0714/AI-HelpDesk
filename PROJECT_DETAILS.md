# AI Helpdesk - GITA Autonomous College

## Overview
The **AI Helpdesk** is a web-based chatbot application designed to provide instant assistance to students, faculty, and visitors regarding GITA Autonomous College, Bhubaneswar. The assistant leverages Groq's lightning-fast inference models to answer queries related to courses, admissions, fees, exams, hostel facilities, and contact information.

## Tech Stack
### Frontend
- **Framework**: React 19 via Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Architecture**: Component-based UI with a clean, smooth chat interface mimicking modern messaging apps. Features include auto-scrolling, typing indicators, and distinct error states.

### Backend
- **Environment**: Node.js & Express.js
- **AI Integration**: Groq SDK (`llama3-8b-8192`)
- **Middleware**: CORS, Express JSON parser
- **Security**: Environment variables via `dotenv` for API key protection.

## Features
- **Context-Aware Responses:** The bot acts specifically as the GITA Helpdesk. It gracefully declines to answer non-college-related questions.
- **Modern Chat Interface:** Features smooth scrolling, bouncing loading indicators, message bubbles, and responsive design.
- **Robust Error Handling:** Visual cues for API failures or connection dropouts.

## Directory Structure
```
AI HelpDesk/
├── backend/
│   ├── .env               # Environment variables (GROQ_API_KEY)
│   ├── package.json       # Backend dependencies
│   └── server.js          # Main Express server and Groq integration
└── frontend/
    ├── package.json       # Frontend dependencies
    ├── postcss.config.js  # PostCSS Config
    ├── tailwind.config.js # Tailwind Config
    ├── vite.config.js     # Vite Config
    ├── index.html         # Application Entry Node
    └── src/
        ├── App.jsx        # Main Layout & Header
        ├── index.css      # Globals and Tailwind Directives
        └── components/
            └── Chat.jsx   # Core Chat Interface Logic
```

## Setup & Installation

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your Groq API key:
   ```env
   GROQ_API_KEY=your_api_key_here
   ```
4. Start the server (runs on `http://localhost:5000`):
   ```bash
   node server.js
   ```

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development and Extensibility
- **AI Upgrades:** Change the model parameter in `backend/server.js` from `llama3-8b-8192` to `mixtral-8x7b-32768` for different reasoning.
- **Knowledge Base Expansion:** Update `SYSTEM_PROMPT` in `backend/server.js` to feed the AI new or updated information regarding the college.
