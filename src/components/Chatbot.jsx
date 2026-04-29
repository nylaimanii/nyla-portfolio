import { useState, useRef, useEffect } from 'react';
import Window from './Window';
import { chatbotSystemPrompt } from '../constants/data';

const WELCOME = "Hey! I'm Nyla Bot ♥ Ask me anything about Nyla — her skills, projects, hackathons (3 of them, including a Yale solo build!), her 2 Summer 2026 internship offers, or anything else!";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: WELCOME }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = { role: 'user', content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const conversationHistory = updatedMessages
        .filter(m => m.content !== WELCOME)
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          max_tokens: 512,
          messages: [
            { role: 'system', content: chatbotSystemPrompt },
            ...conversationHistory,
          ],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        const errMsg = data?.error?.message || `API error ${response.status}`;
        throw new Error(errMsg);
      }

      const reply = data?.choices?.[0]?.message?.content
        || 'Sorry, I had trouble responding. Try again!';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err.message}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Window title="✦ NYLA_BOT.ai" variant="lime" id="chatbot" index={7}>
      <div className="chatbot-wrapper">
        <div className="chat-history">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.role === 'user' ? 'chat-user' : 'chat-bot'}`}>
              <span className="chat-role">{msg.role === 'user' ? 'YOU' : 'NYLA BOT'}</span>
              <span className="chat-text">{msg.content}</span>
            </div>
          ))}
          {isLoading && (
            <div className="chat-message chat-bot">
              <span className="chat-role">NYLA BOT</span>
              <span className="chat-text chat-typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="chat-input-row">
          <input
            className="chat-input"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Nyla..."
            disabled={isLoading}
            autoComplete="off"
          />
          <button
            className="chat-send-btn"
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
          >
            ▶
          </button>
        </div>
      </div>
    </Window>
  );
}
