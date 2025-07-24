import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Chatbot.css';
export default function Chatbot({ onSend, messages }) {
    const [input, setInput] = useState('');
    const handleSend = () => {
        if (!input.trim())
            return;
        onSend(input);
        setInput('');
    };
    return (_jsxs("div", { className: "chatbot-container", children: [_jsx("div", { className: "chatbot-messages", children: messages.map((m, i) => (_jsx("div", { className: `chatbot-msg ${m.from}`, children: m.text }, i))) }), _jsxs("div", { className: "chatbot-input", children: [_jsx("input", { value: input, onChange: (e) => setInput(e.target.value), placeholder: "\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD558\uC138\uC694..." }), _jsx("button", { onClick: handleSend, children: "\uC804\uC1A1" })] })] }));
}
