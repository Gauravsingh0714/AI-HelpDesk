<div align="center">
  <h1>🎓 AI HelpDesk</h1>
  <p><strong>Intelligent Assistant for GITA Autonomous College</strong></p>
  
  [![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-Backend-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Groq](https://img.shields.io/badge/Groq-Llama_3-f55036?style=for-the-badge&logo=groq)](https://groq.com/)
</div>

---

## 📖 Overview

The **AI HelpDesk** is a modern, responsive web-based chatbot designed to provide instant assistance to students, faculty, and visitors of **GITA Autonomous College, Bhubaneswar**. Powered by Groq's lightning-fast language models, it intelligently answers queries regarding courses, admissions, fees, hostel facilities, and contact information.

It acts specifically as a college representative, providing accurate information and politely declining to answer off-topic or non-college-related questions.

## ✨ Features

- 🤖 **Context-Aware AI:** Strictly adheres to its persona as the GITA HelpDesk assistant.
- 💬 **Modern Interface:** A clean, WhatsApp/ChatGPT-style chat UI with smooth scrolling and typing indicators.
- ⚡ **Real-Time Responses:** Fast and fluid communication powered by a dedicated Node.js backend.
- 🛡️ **Robust Error Handling:** Visual cues and friendly error messages for API failures or network issues.
- 📱 **Fully Responsive:** Beautifully designed to work seamlessly across desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

### Frontend
- **React 19** (initialized via Vite for blazing-fast development)
- **Tailwind CSS 4** (for rapid, utility-first styling)
- **Lucide React** (beautiful, consistent iconography)
- **Axios** (for making HTTP requests)

### Backend
- **Node.js & Express.js** (robust backend environment)
- **Groq API** (`llama3-8b-8192` for incredibly fast intelligent response generation)
- **CORS & Express JSON parser** (secure middleware configuration)
- **dotenv** (environment variable management)

## 📂 Project Structure

```text
AI-HelpDesk/
├── backend/
│   ├── .env               # Environment variables (Add your GROQ_API_KEY)
│   ├── package.json       # Backend dependencies
│   └── server.js          # Express server & Groq integration logic
└── frontend/
    ├── package.json       # Frontend dependencies
    ├── tailwind.config.js # Styling configuration
    ├── index.html         # Entry point
    └── src/
        ├── App.jsx        # Main Layout & Header
        ├── index.css      # Globals & Tailwind Directives
        └── components/
            └── Chat.jsx   # Core Chat Interface Logic
```

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- An active [Groq API Key](https://console.groq.com/keys).

### 1. Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
```

Install the required dependencies:
```bash
npm install
```

Create a `.env` file in the `backend` folder and add your Groq API key:
```env
GROQ_API_KEY=gsk-your-secret-api-key-here
```

Start the backend server (runs on port 5000):
```bash
node server.js
```

### 2. Frontend Setup

Open a **new** terminal window and navigate to the frontend directory:
```bash
cd frontend
```

Install the required dependencies:
```bash
npm install
```

Start the Vite development server:
```bash
npm run dev
```

The application will now be running at `http://localhost:5173`.

## ⚙️ Customization & Extensibility

- **Upgrading the AI:** Open `backend/server.js` and change the `model` parameter from `llama3-8b-8192` to `mixtral-8x7b-32768` for different reasoning capabilities.
- **Updating Knowledge Base:** The bot's behavior is dictated by the `SYSTEM_PROMPT` in `backend/server.js`. Modify this string to add new college policies, fee structures, or specific instructions on how the bot should behave.

---
*Developed for GITA Autonomous College.*
