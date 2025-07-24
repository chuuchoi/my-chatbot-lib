import './Chatbot.css';
export interface Message {
    from: 'user' | 'bot';
    text: string;
}
interface ChatbotProps {
    onSend: (text: string) => void;
    messages: Message[];
}
export default function Chatbot({ onSend, messages }: ChatbotProps): import("react/jsx-runtime").JSX.Element;
export {};
