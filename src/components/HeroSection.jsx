import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/2def08e35_generated_image.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Premium furniture showcase"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-walnut/80 via-walnut/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-walnut/60 via-transparent to-walnut/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}>
          
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

          


          

          <a
            href="#collections"
            className="mt-10 inline-flex items-center gap-3 border border-sandstone/60 text-bone px-8 py-4 text-sm font-body tracking-widest uppercase hover:bg-sandstone hover:text-bone transition-all duration-500">
            
            Explore Collections
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

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