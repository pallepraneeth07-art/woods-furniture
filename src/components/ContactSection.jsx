import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: "Inquiry Sent", description: "We'll get back to you shortly." });
      setForm({ name: "", phone: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-sandstone" />
              <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl text-walnut font-medium leading-tight">
              Visit Our
              <br />
              <span className="italic text-sandstone">Design Studio</span>
            </h2>
            <p className="mt-6 text-walnut/60 font-body text-base leading-relaxed font-light max-w-md">
              Walk through our curated showroom and experience each piece up close. 
              Our design consultants are ready to help you find the perfect furniture 
              for your space.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-sandstone" />
                </div>
                <div>
                  <p className="text-walnut font-body text-sm font-medium">Call Us</p>
                  <a href="tel:+919876543210" className="text-walnut/60 font-body text-sm hover:text-sandstone transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-sandstone" />
                </div>
                <div>
                  <p className="text-walnut font-body text-sm font-medium">Showroom</p>
                  <p className="text-walnut/60 font-body text-sm">
                    Woods Furnitures Design Studio
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-sandstone" />
                </div>
                <div>
                  <p className="text-walnut font-body text-sm font-medium">Hours</p>
                  <p className="text-walnut/60 font-body text-sm">
                    Mon – Sat: 10 AM – 8 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-oatmeal p-8 md:p-10">
              <h3 className="font-heading text-xl text-walnut font-medium mb-6">
                Inquire About Our Furniture
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-walnut/70 text-xs font-body tracking-widest uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-bone border border-sandstone/30 px-4 py-3 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
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
                    className="w-full bg-bone border border-sandstone/30 px-4 py-3 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-walnut/70 text-xs font-body tracking-widest uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-bone border border-sandstone/30 px-4 py-3 text-walnut font-body text-sm focus:outline-none focus:border-sandstone transition-colors resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-walnut text-bone py-4 text-xs font-body tracking-widest uppercase hover:bg-sandstone transition-colors disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Send Inquiry"}
                  {!sending && <Send size={14} />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}