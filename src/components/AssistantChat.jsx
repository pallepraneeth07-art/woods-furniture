import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, MessageSquare, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import MessageBubble from "@/components/MessageBubble";

const AGENT_NAME = "furniture_assistant";

export default function AssistantChat() {
  const [open, setOpen] = useState(false);
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [starting, setStarting] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!open || !conversation) return;
    const unsubscribe = base44.agents.subscribeToConversation(conversation.id, (data) => {
      setMessages(data.messages || []);
    });
    return () => unsubscribe();
  }, [open, conversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStart = async () => {
    setStarting(true);
    try {
      const conv = await base44.agents.createConversation({
        agent_name: AGENT_NAME,
        metadata: { name: "Enquiry Chat", description: "Customer enquiry" },
      });
      setConversation(conv);
      setMessages(conv.messages || []);
    } catch (e) {
      console.error(e);
    }
    setStarting(false);
  };

  const handleToggle = async () => {
    if (open) {
      setOpen(false);
      return;
    }
    setOpen(true);
    if (!conversation) await handleStart();
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || !conversation) return;
    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    try {
      const updated = await base44.agents.addMessage(conversation, { role: "user", content: text });
      setConversation(updated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sandstone text-bone rounded-full shadow-lg flex items-center justify-center hover:bg-walnut transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat with assistant"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-bone shadow-2xl rounded-lg overflow-hidden flex flex-col"
            style={{ height: "min(70vh, 560px)" }}
          >
            <div className="bg-walnut text-bone px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-sandstone" />
                <div>
                  <p className="font-heading text-sm font-medium">Woods Assistant</p>
                  <p className="text-bone/60 text-[10px]">Online — replies instantly</p>
                </div>
              </div>
              <a
                href={base44.agents.getWhatsAppConnectURL(AGENT_NAME)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone/70 hover:text-sandstone transition-colors text-[10px] font-body tracking-widest uppercase border border-sandstone/30 px-2.5 py-1.5 rounded"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-bone">
              {starting && messages.length === 0 && (
                <div className="flex items-center justify-center gap-2 text-walnut/50 text-sm py-8">
                  <Loader2 size={14} className="animate-spin" />
                  Starting conversation...
                </div>
              )}
              {messages.length === 0 && !starting && (
                <div className="text-center text-walnut/40 text-sm py-8">
                  Ask about our collections, showroom locations, or timings — I'm here to help.
                </div>
              )}
              {messages.map((m, idx) => (
                <MessageBubble key={idx} message={m} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-3 border-t border-walnut/10 bg-bone flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-oatmeal border border-sandstone/20 px-3 py-2 text-walnut font-body text-sm rounded focus:outline-none focus:border-sandstone transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-sandstone text-bone p-2.5 rounded hover:bg-walnut transition-colors disabled:opacity-40"
                aria-label="Send message"
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