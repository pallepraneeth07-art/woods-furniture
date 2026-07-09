import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "918341149400";

export default function EnquireForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Woods Furnitures, I'd like to enquire.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="bg-bone/95 backdrop-blur-sm p-6 md:p-8 w-full max-w-md"
    >
      <h3 className="font-heading text-lg md:text-xl text-walnut font-medium mb-5">
        Enquire Now
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-walnut/70 text-xs font-body tracking-widest uppercase mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-walnut/70 text-xs font-body tracking-widest uppercase mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-walnut/70 text-xs font-body tracking-widest uppercase mb-2">
            Your Message
          </label>
          <textarea
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-oatmeal border border-sandstone/30 px-4 py-2.5 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors resize-none"
            placeholder="Tell us what you're looking for..."
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-walnut text-bone py-3 text-xs font-body tracking-widest uppercase hover:bg-sandstone transition-colors"
        >
          Send via WhatsApp
          <Send size={14} />
        </button>
      </div>
    </motion.form>
  );
}