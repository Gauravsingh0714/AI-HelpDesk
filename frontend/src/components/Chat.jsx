import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I am the GITA college helpdesk assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    
    // Add user message to state
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Send message to backend
      const response = await axios.post('http://localhost:5000/chat', {
        message: input
      });

      // Add bot response to state
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      // Handle error gracefully
      setError("Something went wrong. Please try again later.");
      const errorMessage = { text: "⚠️ Something went wrong connecting to the server. Please make sure the backend is running.", sender: 'bot', isError: true };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 flex-1 relative">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 scroll-smooth">
        {messages.map((msg, idx) => (
          <div 
            key={idx} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 shadow-sm border border-blue-200 mt-auto mb-1 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            
            <div 
              className={`max-w-[75%] rounded-2xl px-5 py-3 shadow-md border leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 border-blue-600 text-white rounded-br-sm' 
                  : msg.isError 
                    ? 'bg-red-50 border-red-200 text-red-800 rounded-bl-sm'
                    : 'bg-white border-gray-200 text-gray-800 rounded-bl-sm'
              }`}
            >
              <p className="whitespace-pre-wrap text-[15px]">{msg.text}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start items-end animate-fadeIn">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 shadow-sm border border-blue-200 mb-1 flex-shrink-0">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
                  <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className="bg-white border border-gray-200 text-gray-500 rounded-2xl rounded-bl-sm px-5 py-4 shadow-md flex items-center gap-1.5">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="h-1" />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-full px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors text-gray-800 placeholder-gray-400 text-sm shadow-inner"
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            autoFocus
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-blue-600 text-white rounded-full p-3.5 flex items-center justify-center hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
            aria-label="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-2 ml-4 mb-0">{error}</p>}
      </div>
    </div>
  );
};

export default Chat;
