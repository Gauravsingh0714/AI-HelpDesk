import React from 'react';
import Chat from './components/Chat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[600px] border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white shadow-md z-10 relative">
          <h1 className="text-xl font-bold flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
            </svg>
            AI Helpdesk
            <span className="text-xs font-medium bg-blue-500/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-blue-400">GITA College</span>
          </h1>
          <p className="text-blue-100 text-sm mt-1.5 opacity-90 tracking-wide">Ask me anything about GITA Autonomous College</p>
        </div>
        
        {/* Chat Component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
