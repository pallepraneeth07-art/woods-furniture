import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin } from "lucide-react";

const SHOWROOMS = [
  { id: "bowenpally", label: "Bowenpally", address: "Old Bowenpally, Secunderabad", number: "919866659400" },
  { id: "doolapally", label: "Doolapally", address: "Dulapally Road, Kompally", number: "918341149400" }
];

export default function EnquireForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "", showroom: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = SHOWROOMS.find((s) => s.id === form.showroom);
    if (!selected) return;
    const text = `Hello Woods Furnitures (${selected.label}), I'd like to enquire.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${selected.number}?text=${text}`, "_blank");
    setForm({ name: "", phone: "", message: "", showroom: "" });
  };

  const locationChosen = Boolean(form.showroom);

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
            Select the Location
          </label>
          <div className="grid grid-cols-2 gap-2">
            {SHOWROOMS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setForm({ ...form, showroom: s.id })}
                className={`flex flex-col items-start gap-1 px-3 py-2.5 border text-left transition-colors ${
                  form.showroom === s.id
                    ? "border-sandstone bg-sandstone/10"
                    : "border-sandstone/30 bg-oatmeal hover:border-sandstone/60"
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
        </div>

        <div className={locationChosen ? "" : "opacity-40 pointer-events-none"}>
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

          <div className="mt-4">
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

          <div className="mt-4">
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
            disabled={!locationChosen}
            className="w-full flex items-center justify-center gap-2 bg-walnut text-bone py-3 text-xs font-body tracking-widest uppercase hover:bg-sandstone transition-colors disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send via WhatsApp
            <Send size={14} />
          </button>
        </div>
      </div>
    </motion.form>
  );
}