import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { base44 } from "@/api/base44Client";
import ReactMarkdown from "react-markdown";

const AGENT_NAME = "furniture_assistant";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
  if (!conversation) return;
  const unsubscribe = base44.agents.subscribeToConversation(conversation.id, (data) => {
    setMessages(data.messages || []);
    });
  return () => unsubscribe();
  }, [conversation]);

  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOpen = async () => {
  setOpen(true);
  if (!conversation && !initializing) {
    setInitializing(true);
    try {
    const conv = await base44.agents.createConversation({
      agent_name: AGENT_NAME,
      metadata: { name: "Website Enquiry" }
    });
    setConversation(conv);
    setMessages(conv.messages || []);
    } catch (e) {
    console.error(e);
    } finally {
    setInitializing(false);
    }
  }
  };

  const handleSend = async (e) => {
  e.preventDefault();
  if (!input.trim() || !conversation || loading) return;
  const text = input.trim();
  setInput("");
  setLoading(true);
  try {
    const updated = await base44.agents.addMessage(conversation, { role: "user", content: text });
    setConversation(updated);
    setMessages(updated.messages || []);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
  };

  const isThinking = loading || (messages.length > 0 && messages[messages.length - 1].role === "user");

  return (
  <>
    {/* Floating Button */}
    <AnimatePresence>
    {!open && (
      <motion.button
      onClick={handleOpen}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sandstone text-bone rounded-full shadow-lg flex items-center justify-center hover:bg-walnut transition-colors"
      aria-label="Open chat"
      >
      <MessageCircle size={24} />
      </motion.button>
    )}
    </AnimatePresence>

    {/* Chat Panel */}
    <AnimatePresence>
    {open && (
      <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] max-h-[calc(100vh-3rem)] bg-bone shadow-2xl flex flex-col border border-walnut/10"
      >
      {/* Header */}
      <div className="bg-walnut text-bone px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-sandstone rounded-full flex items-center justify-center">
          <MessageCircle size={18} />
        </div>
        <div>
          <p className="font-heading text-sm font-medium leading-none">Woods Assistant</p>
          <p className="font-body text-[10px] text-bone/60 mt-1">Replies in seconds</p>
        </div>
        </div>
        <button onClick={() => setOpen(false)} className="text-bone/70 hover:text-bone transition-colors" aria-label="Close chat">
        <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-oatmeal/40">
        {messages.length === 0 && !initializing && (
        <div className="flex justify-start">
          <div className="bg-bone border border-walnut/10 px-4 py-2.5 max-w-[80%]">
          <p className="font-body text-sm text-walnut">
            Hi! I'm the Woods Furnitures assistant. Ask me about our collections, showroom locations, or timings — I'm here to help!
          </p>
          </div>
        </div>
        )}
        {initializing && (
        <div className="flex justify-center">
          <div className="w-6 h-6 border-2 border-walnut/20 border-t-sandstone rounded-full animate-spin"></div>
        </div>
        )}
        {messages.map((msg, idx) => {
        const isUser = msg.role === "user";
        return (
          <div key={idx} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
          <div className={isUser
            ? "bg-sandstone text-bone px-4 py-2.5 max-w-[80%]"
            : "bg-bone border border-walnut/10 text-walnut px-4 py-2.5 max-w-[80%]"}>
            {isUser ? (
            <p className="font-body text-sm whitespace-pre-wrap">{msg.content}</p>
            ) : (
            <ReactMarkdown className="font-body text-sm prose prose-sm max-w-none prose-p:my-0 prose-ul:my-1 prose-li:my-0">{msg.content}</ReactMarkdown>
            )}
          </div>
          </div>
        );
        })}
        {isThinking && (
        <div className="flex justify-start">
          <div className="bg-bone border border-walnut/10 px-4 py-3 flex items-center gap-1">
          <span className="w-2 h-2 bg-walnut/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
          <span className="w-2 h-2 bg-walnut/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
          <span className="w-2 h-2 bg-walnut/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
          </div>
        </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-walnut/10 bg-bone flex items-center gap-2">
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
        />
        <button
        type="submit"
        disabled={!input.trim() || loading || initializing}
        className="w-10 h-10 bg-walnut text-bone flex items-center justify-center hover:bg-sandstone transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Send"
        >
        <Send size={16} />
        </button>
      </form>
      </motion.div>
    )}
    </AnimatePresence>
  </>
  );
}