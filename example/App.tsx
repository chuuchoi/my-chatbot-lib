import React, { useState } from 'react';
import Chatbot, { Message } from '../src/Chatbot';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    setMessages((prev) => [...prev, { from: 'user', text }]);

    // 가짜 응답 예시
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'bot', text: `당신은 "${text}"라고 입력했어요.` }]);
    }, 500);
  };

  return <Chatbot messages={messages} onSend={handleSend} />;
}

export default App;
