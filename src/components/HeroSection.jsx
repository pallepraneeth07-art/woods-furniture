import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import EnquireForm from "@/components/EnquireForm";

const HERO_IMG = "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/4c0a87440_IMG-20260709-WA0004.jpg";

export default function HeroSection() {
  const [enquireOpen, setEnquireOpen] = useState(false);

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Premium furniture showcase"
          className="w-full h-full object-cover object-left" />

        <div className="absolute inset-0 bg-gradient-to-r from-walnut/80 via-walnut/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-walnut/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-px bg-sandstone" />
            <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
              A Design Studio
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bone leading-none tracking-tight">
            WOODS
          </h1>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-sandstone leading-none mt-1">
            Furnitures
          </h1>

          <button
            onClick={() => setEnquireOpen(true)}
            className="mt-10 inline-flex items-center gap-3 bg-sandstone text-bone px-8 py-4 text-sm font-body tracking-widest uppercase hover:bg-bone hover:text-walnut transition-all duration-500">
            Enquire Now
          </button>
        </motion.div>
      </div>

      {/* Enquire Modal */}
      <AnimatePresence>
        {enquireOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-walnut/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEnquireOpen(false)}
          >
            <motion.div
              className="relative max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setEnquireOpen(false)}
                className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-walnut text-bone flex items-center justify-center hover:bg-sandstone transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <EnquireForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}>

        <span className="text-bone/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-sandstone/60 to-transparent" />
      </motion.div>
    </section>);

}