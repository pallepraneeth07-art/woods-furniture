import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

const SHOWROOMS = [
  { id: "bowenpally", label: "Bowenpally", address: "Old Bowenpally, Secunderabad", number: "919866659400" },
  { id: "doolapally", label: "Doolapally", address: "Dulapally Road, Kompally", number: "918341149400" }
];

const ASSISTANT_PROMPT = `You are the friendly virtual assistant for Woods Furnitures, a furniture design studio in Hyderabad, India.

Showroom details:
- Bowenpally: #174, Plassey Lane, adj. to Malla Reddy Garden, Old Bowenpally, Secunderabad. Phone: +91 98666 59400
- Doolapally: D.No 20-13, Burma Agaya Nagar, beside St. Martin's Engg College, Dulapally Road, Kompally, Hyderabad. Phone: +91 83411 49400
Hours: Mon to Sat, 9:30 AM to 9:00 PM. GSTIN/UIN: 36AACFW3245M1ZV.

Collections: L-Shape Sofas, 3+1+1 Sofas, Dining Sets, Cots, Recliner Sofas, Deewan Cum Bed, Wooden Sofas, Office Furniture, TV Units, Center Tables, Wardrobes, Cushion & Designer Cots, Loungers & Sofa Cum Bed, Dressing Tables, Shoe Racks, Accent Chairs, Marbles, Bunk Beds.

Instructions: Reply in 1 to 3 short sentences. Be warm, helpful and concise. Help customers with product info, materials, dimensions and showroom visits. If they want to place an order or need detailed help, encourage them to use the WhatsApp button to reach the showroom directly.`;

const GREETING = "Welcome to Woods Furnitures! Ask me about our sofas, dining sets, beds, wardrobes or any collection and I'll help you right away.";

export default function EnquireForm() {
  const [messages, setMessages] = useState([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showroom, setShowroom] = useState("bowenpally");
  const [details, setDetails] = useState({ name: "", phone: "" });
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const updated = [...messages, { role: "user", content: text }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const convo = updated
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
        .join("\n");
      const res = await base44.integrations.Core.InvokeLLM({
        prompt: `${ASSISTANT_PROMPT}\n\nConversation so far:\n${convo}\n\nReply as the assistant:`,
      });
      const reply = typeof res === "string" ? res : res?.response || res?.output || res?.text || "Thanks for your message! Our team will get back to you shortly.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "I'm having trouble responding right now. Please tap 'Send via WhatsApp' to reach our showroom directly." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const selected = SHOWROOMS.find((s) => s.id === showroom) || SHOWROOMS[0];
    const enquiry = messages.filter((m) => m.role === "user").map((m) => m.content).join(" | ");
    const text = `Hello Woods Furnitures (${selected.label}), I'd like to enquire.%0A%0AName: ${encodeURIComponent(details.name)}%0APhone: ${encodeURIComponent(details.phone)}%0AEnquiry: ${encodeURIComponent(enquiry || "Interested in your furniture collections")}`;
    window.open(`https://wa.me/${selected.number}?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="bg-bone/95 backdrop-blur-sm p-6 md:p-8 w-full max-w-md flex flex-col"
    >
      <h3 className="font-heading text-lg md:text-xl text-walnut font-medium mb-4">
        Enquire Now
      </h3>

      {/* Showroom selector */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {SHOWROOMS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setShowroom(s.id)}
            className={`flex flex-col items-start gap-1 px-3 py-2 border transition-colors ${
              showroom === s.id ? "border-sandstone bg-sandstone/10" : "border-sandstone/30 bg-oatmeal hover:border-sandstone/60"
            }`}
          >
            <span className="flex items-center gap-1.5 text-walnut font-body text-xs font-medium">
              <MapPin size={12} className="text-sandstone" />
              {s.label}
            </span>
            <span className="text-walnut/50 font-body text-[10px]">{s.address}</span>
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div className="min-h-[220px] max-h-[300px] overflow-y-auto space-y-3 bg-oatmeal/50 border border-sandstone/20 p-4 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] px-3 py-2 text-sm font-body leading-relaxed ${
                m.role === "user"
                  ? "bg-walnut text-bone rounded-l-lg rounded-br-lg"
                  : "bg-bone border border-sandstone/30 text-walnut rounded-r-lg rounded-bl-lg"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-bone border border-sandstone/30 px-3 py-2.5 rounded-r-lg rounded-bl-lg">
              <Loader2 size={14} className="text-sandstone animate-spin" />
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Chat input */}
      <form onSubmit={handleSend} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-sandstone text-bone px-4 py-2.5 flex items-center justify-center hover:bg-walnut transition-colors disabled:opacity-40"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </form>

      {/* WhatsApp escalation */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <input
          type="text"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          className="bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
          placeholder="Your name"
        />
        <input
          type="tel"
          value={details.phone}
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          className="bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
          placeholder="Phone number"
        />
      </div>
      <button
        type="button"
        onClick={handleWhatsApp}
        className="w-full flex items-center justify-center gap-2 bg-walnut text-bone py-3 text-xs font-body tracking-widest uppercase hover:bg-sandstone transition-colors"
      >
        Send via WhatsApp
        <Send size={14} />
      </button>
    </motion.div>
  );
}