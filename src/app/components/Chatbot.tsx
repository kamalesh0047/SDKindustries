import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Paperclip, Mic, Cpu } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Welcome to SDK Automations! I'm your AI engineering assistant. How can I help you today?",
    sender: "bot",
  },
];

const suggestedPrompts = [
  "Tell me about your services",
  "I need an automation setup",
  "Can I request a quotation?",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "Thank you for reaching out. A technical consultant will review your query and get back to you shortly.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("services")) {
        botResponse = "We specialize in PLC automation, chemical processing lines, NDT FPI booths, conveyor systems, and turnkey engineering support.";
      } else if (lowerText.includes("industries")) {
        botResponse = "We serve aerospace, automobile, precision engineering, metal finishing, and manufacturing industries.";
      } else if (lowerText.includes("quotation") || lowerText.includes("quote")) {
        botResponse = "I can help with that. Please provide your email address and a brief description of your requirements, and our sales team will contact you.";
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: botResponse, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 text-white z-50 hover:bg-blue-700 transition-colors"
      >
        <MessageSquare className="w-7 h-7" strokeWidth={1.5} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-6rem)] bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-slate-900 px-4 py-4 flex justify-between items-center shrink-0 rounded-t-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/20 blur-xl"></div>
              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Cpu className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">SDK AI Assistant</h3>
                  <p className="text-blue-300 text-xs flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors relative z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-sm"
                        : "bg-white text-slate-800 border border-slate-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-bl-sm flex space-x-1">
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-xs bg-white border border-blue-100 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100 shrink-0">
              <div className="flex items-center space-x-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200">
                <button className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700 placeholder-slate-400"
                />
                <button className="text-slate-400 hover:text-blue-600 transition-colors mr-1">
                  <Mic className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim()}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    inputValue.trim()
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-200 text-slate-400"
                  }`}
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
