import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";

const CATEGORIES = [
  { name: "L-Shape Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/3dd5fa506_IMG-20240619-WA0001.jpg" },
  { name: "3+1+1 Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/77d4901a4_IMG-20241224-WA0001.jpg" },
  { name: "Dining", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/5e4d3cd70_IMG-20250517-WA0017.jpg" },
  { name: "Cots", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/08086edb0_generated_a8b573f5.png" },
  { name: "Recliner Sofas", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/c71623eae_generated_e570ac4c.png" },
  { name: "Deewan Cum Bed", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/350caf9ae_generated_25c94d1f.png" },
  { name: "Wooden Sofas", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/d31692118_generated_ed41df22.png" },
  { name: "Office Furniture", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/fc7d4ee19_generated_a85bc518.png" },
  { name: "TV Units", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/334b723ed_generated_91b5240c.png" },
  { name: "Center Tables", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/1e2b71110_generated_0570b34a.png" },
  { name: "Wardrobes", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/0f0154c5e_generated_08f8d389.png" },
  { name: "Cushion & Designer Cots", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/1c5ed3921_generated_e0a7f66c.png" },
  { name: "Loungers & Sofa Cum Bed", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/ea4e5593b_generated_56f53c86.png" },
  { name: "Dressing Tables", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/8a2e4b3fb_generated_19b978dd.png" },
  { name: "Shoe Racks", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/8552f83ab_generated_252fee30.png" },
  { name: "Accent Chairs", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/327910d91_generated_a961b8ef.png" },
  { name: "Marbles", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/3a7c839a6_generated_ddf12d08.png" },
  { name: "Bunk Beds", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/33287566c_generated_bde83481.png" },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-20 md:py-32 bg-oatmeal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-sandstone" />
            <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
              Our Collections
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-walnut font-medium leading-tight">
            Curated for Every Space
          </h2>
          <p className="mt-4 text-walnut/60 font-body text-base md:text-lg max-w-xl leading-relaxed font-light">
            Discover furniture that blends form and function — 
            each piece crafted with precision and care.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              image={cat.image}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}