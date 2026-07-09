import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ name, image, index, link }) {
  return (
    <motion.div
      className="group relative overflow-hidden bg-bone cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg md:text-xl text-walnut font-medium">
            {name}
          </h3>
        </div>

        <a
          href={link || "#contact"}
          target={link ? "_blank" : undefined}
          rel={link ? "noopener noreferrer" : undefined}
          className="mt-4 inline-flex items-center gap-2 border border-walnut/30 text-walnut px-5 py-2.5 text-xs font-body tracking-widest uppercase hover:bg-sandstone hover:text-bone hover:border-sandstone transition-all duration-400"
        >
          Explore
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}