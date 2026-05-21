import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';

const SYSTEM_PROMPT = `
You are Srujan's Personal AI Agent, embedded directly into his premium portfolio website. Your job is to act as his representative, hyping up his skills, projects, and achievements to potential recruiters, clients, or visitors. 

Key Information about Srujan:
- He is a Full Stack Developer (React, MERN) and AI & ML Enthusiast.
- He builds modern, highly interactive, and secure web applications.
- Key Projects: Club MODX, Privacy-Preserving ID Verification, GupShup, ArchiCanvas.
- Key Skills: React, Node.js, Python, PostgreSQL, Tailwind CSS, etc.
- Achievements: Cybersiege National CTF (2nd Runner Up), Bit N Build Hackathon, etc.

Your Personality:
- Professional, yet highly futuristic, engaging, and slightly witty. 
- You speak concisely. Do not output massive walls of text. Keep answers short, punchy, and highly relevant.
- Always be incredibly positive about Srujan's abilities.

SUPERPOWER (Navigation):
If the user asks to see a specific part of the portfolio (e.g., "Show me his projects", "Where is his resume?", "How do I contact him?"), you MUST append a specific navigation command to the very end of your response.
Available commands: [NAVIGATE:hero], [NAVIGATE:skills], [NAVIGATE:certifications], [NAVIGATE:projects], [NAVIGATE:timeline], [NAVIGATE:contact].
Example response: "I'd love to show you his amazing projects! Scrolling you there now. [NAVIGATE:projects]"
`;

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hello! I'm Srujan's personal AI assistant. Ask me anything about his skills, projects, or where to find his resume!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Build conversation history for Gemini API
      const contents = [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }]
        },
        {
          role: 'model',
          parts: [{ text: "Understood. I am Srujan's AI assistant." }]
        },
        ...messages.map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ];

      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0) {
        let aiResponse = data.candidates[0].content.parts[0].text;
        
        // Parse for Navigation Commands
        const navRegex = /\[NAVIGATE:([a-zA-Z0-9_-]+)\]/g;
        let match;
        let targetSection = null;
        
        while ((match = navRegex.exec(aiResponse)) !== null) {
          targetSection = match[1];
        }

        // Clean the command from the visible response
        aiResponse = aiResponse.replace(navRegex, '').trim();

        setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);

        // Execute navigation superpower
        if (targetSection) {
          setTimeout(() => {
            const el = document.getElementById(targetSection);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 1000); // Wait 1 second before scrolling so user can read briefly
        }
      } else {
        throw new Error("No response from AI");
      }
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, my neural link is experiencing interference right now. Try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] z-[100] transition-all ${isOpen ? 'scale-0' : 'scale-100 hover:scale-110'}`}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ boxShadow: "0 0 30px rgba(6,182,212,0.8)" }}
      >
        <FaRobot className="text-3xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.3)] z-[100] flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-b border-cyan-500/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/50">
                  <FaRobot className="text-cyan-400 text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold tracking-wide">Srujan's Agent</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-cyan-600'}`}>
                      {msg.role === 'user' ? <FaUser className="text-white text-xs" /> : <FaRobot className="text-white text-xs" />}
                    </div>

                    {/* Bubble */}
                    <div className={`p-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-sm' 
                        : 'bg-gray-800 border border-gray-700 text-gray-200 rounded-bl-sm'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center">
                      <FaRobot className="text-white text-xs" />
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-800 border border-gray-700 rounded-bl-sm flex gap-1">
                      <motion.div className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                      <motion.div className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                      <motion.div className="w-2 h-2 bg-cyan-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800 bg-gray-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-gray-800 text-white rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-700 text-sm"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-8 h-8 flex items-center justify-center bg-cyan-500 text-white rounded-full hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaPaperPlane className="text-xs ml-[-2px]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx="true">{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </>
  );
}
