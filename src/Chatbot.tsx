import React, { useState } from 'react';
import './Chatbot.css';

export interface Message {
  from: 'user' | 'bot';
  text: string;
}

interface ChatbotProps {
  onSend: (text: string) => void;
  messages: Message[];
}

export default function Chatbot({ onSend, messages }: ChatbotProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((m, i) => (
          <div key={i} className={`chatbot-msg ${m.from}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <button onClick={handleSend}>전송</button>
      </div>
    </div>
  );
}
